import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
      <nav className="flex sticky top-0 bg-slate-950 text-white justify-between items-center px-3 p-2">
            <div className='font-bold flex justify-center items-center text-lg gap-1'> <img src="/logo.png" width={28} alt="logo" /><span>Fundiverse </span></div>
            <Link href={'/login'}>
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-2xl px-5 py-2.5 text-center">
                Sign In
            </button>
            </Link>
      </nav>
    </>
  )
}

export default Navbar
