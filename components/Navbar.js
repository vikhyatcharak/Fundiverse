"use client"
import React,{useState} from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

const Navbar = () => {
    const { data: session } = useSession()
    
    const [showdropdown, setShowdropdown] = useState(false)
    return (
        <>
            <nav className="flex sticky z-10 top-0 bg-slate-950 text-white justify-between items-center px-3 p-2">
               <Link href={"./"}> <div className='font-bold flex justify-center items-center sm:text-lg gap-1'> <img src="/logo.png" width={28} alt="logo" /><span>Fundiverse </span></div></Link>
                {session && <>

                    <div className=" relative buttons flex sm:flex-row flex-col sm:max-w-max max-w-20 justify-center items-center gap-3">

                        <button onBlur={()=>{setTimeout(() => {setShowdropdown(false)}, 300);}} onClick={()=>setShowdropdown(!showdropdown)} id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className="flex sm:gap-1 justify-center items-center text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-2xl sm:px-6 py-2 px-1 text-center" type="button">
                            <span className='sm:text-base text-sm w-fit'>Welcome {session.user.name}</span>
                             <svg className="sm:w-2.5 sm:h-2.5 sm:ms-3 w-2 h-2 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                            </svg>
                        </button>
                        <div id="dropdownHover" className={`absolute bg-slate-800 top-12 right-12 z-10 ${showdropdown?"":"hidden"} divide-y divide-gray-100 rounded-lg shadow-sm w-44`}>
                            <ul className="py-2 text-sm bg-" aria-labelledby="dropdownHoverButton">
                                <li>
                                    <Link href="/dashboard" className="block px-4 py-2 hover:bg-blue-800">Dashboard</Link>
                                </li>
                                <li>
                                    <Link href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-blue-800">Your Page</Link>
                                </li>
                                <li>
                                    <Link href="#" onClick={()=>signOut()} className="block px-4 py-2 hover:bg-blue-800">Sign out</Link>
                                </li>
                            </ul>
                        </div>

                        <button onClick={() => signOut()} type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-2xl sm:px-5 sm:py-2.5 px-2.5 py-1.5 text-center">
                            LogOut
                        </button>
                    </div>

                </>}

                {!session && <>
                    <Link href={'/login'}>
                        <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-2xl sm:px-5 sm:py-2.5 px-2.5 py-1.5 text-center">
                            Sign In
                        </button>
                    </Link>
                </>}
            </nav>
        </>
    )
}

export default Navbar
