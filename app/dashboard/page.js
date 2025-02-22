"use client"
import React,{useEffect, useState} from 'react'
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation'
import { updateProfile, fetchUser } from '@/actions/useractions'
import { ToastContainer, toast } from 'react-toastify'
import { Bounce } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

const page = () => {
    const [form, setForm] = useState({})

    const {data:session,status}=useSession()
    const router=useRouter()

    useEffect(() => {
        document.title=`Dashboard - ${session?.user?.name}`
        if (status === "unauthenticated") {
            router.push("/login");
        }
    }, [status, router]);
    
    useEffect(() => {
        if (status === "authenticated" && session?.user?.name) {
            console.log(session)
            console.log(session?.user?.name)
            getData();
        }
    }, [status, session]);  
    
    const getData = async () => {
        if (!session?.user?.name) return;  // Ensure username is available
        let u = await fetchUser(session?.user?.name);
        setForm(u);
    };
    const handleChange=(e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }
    const handleSubmit=async(e)=>{
        let a= await updateProfile(e,session?.user?.name)
        setTimeout(() => {
            toast('Profile Updated', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
                    }, 500);
    }

  return (
    <>
        <ToastContainer className="relative z-[1000]"
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
        />
    <div className='text-center pt-8 md:w-1/2 sm:w-3/4 w-full p-3 mx-auto'>

      <h1 className='text-3xl font-bold my-5 '>Welcome to your Dashboard</h1>

      <form className="form flex flex-col w-full p-4 text-sm gap-3" action={handleSubmit}>
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
        <button type='submit' className='w-full bg-gradient-to-br from-purple-600 to-blue-800 hover:bg-gradient-to-bl font-medium rounded-2xl sm:px-5 sm:py-2.5 px-2.5 py-1.5 text-center'>
            Save
        </button>
      </div>
        </form>
    </div>
    </>
  )
}

export default page
