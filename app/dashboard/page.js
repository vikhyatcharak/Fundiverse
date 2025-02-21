"use client"
import React,{useEffect, useState} from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'


const page = () => {
    const [form, setForm] = useState({})

    const {data:session,status}=useSession()
    const router=useRouter()

    useEffect(() => {
            if (status === "unauthenticated") {
                router.push("/login")
            }
    }, [status, router])

    const handleChange=(e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }

  return (
    <>
    <div className='text-center pt-8 w-1/2 mx-auto'>

      <h1 className='text-3xl font-bold my-5 '>Welcome to your Dashboard</h1>

      <form className="form flex flex-col w-full p-2 text-sm gap-3">
        <div className="item flex flex-col gap-1 w-full items-start">
            <label htmlFor='name' className='font-semibold'>Name</label>
            <input name='name' id='name' value={form.name?form.name:""} onChange={handleChange} type="text" className='rounded-lg bg-violet-700 px-3 py-1 w-full border-2 border-violet-500'/>
        </div>
        <div className="item flex flex-col gap-1 w-full items-start">
            <label htmlFor='email' className='font-semibold'>Email</label>
            <input name='email' id='email' value={form.email?form.email:""} onChange={handleChange} type="email" className='rounded-lg bg-violet-700 px-3 py-1 w-full border-2 border-violet-500'/>
        </div>
        <div className="item flex flex-col gap-1 w-full items-start">
            <label htmlFor='username' className='font-semibold'>Username</label>
            <input name='username' id='username' value={form.username?form.username:""} onChange={handleChange} type="text" className='rounded-lg bg-violet-700 px-3 py-1 w-full border-2 border-violet-500'/>
        </div>
        <div className="item flex flex-col gap-1 w-full items-start">
            <label htmlFor='profile_pic' className='font-semibold'>Profile Picture</label>
            <input name='profile_pic' id='profile_pic' value={form.profile_pic?form.profile_pic:""} onChange={handleChange} type="text" className='rounded-lg bg-violet-700 px-3 py-1 w-full border-2 border-violet-500'/>
        </div>
        <div className="item flex flex-col gap-1 w-full items-start">
            <label htmlFor='banner' className='font-semibold'>Banner</label>
            <input name='banner' id='banner' value={form.banner?form.banner:""} onChange={handleChange} type="text" className='rounded-lg bg-violet-700 px-3 py-1 w-full border-2 border-violet-500'/>
        </div>
        <div className="item flex flex-col gap-1 w-full items-start">
            <label htmlFor='rzPayId' className='font-semibold'>RazorPay ID</label>
            <input name='rzPayId' id='rzPayId' value={form.rzPayId?form.rzPayId:""} onChange={handleChange} type="text" className='rounded-lg bg-violet-700 px-3 py-1 w-full border-2 border-violet-500'/>
        </div>
        <div className="item flex flex-col gap-1 w-full items-start">
            <label htmlFor='rzPaySecret' className='font-semibold'>RazorPay Secret</label>
            <input name='rzPaySecret' id='rzPaySecret' value={form.rzPaySecret?form.rzPaySecret:""} onChange={handleChange} type="text" className='rounded-lg bg-violet-700 px-3 py-1 w-full border-2 border-violet-500'/>
        </div>
      <div className="button mt-5">
        <button type='submit' className='w-full bg-gradient-to-br from-purple-600 to-blue-800 hover:bg-gradient-to-bl font-medium rounded-2xl px-5 py-1 text-center'>
            Save
        </button>
      </div>
        </form>
    </div>
    </>
  )
}

export default page
