import React from 'react'

const page = () => {
  return (
    <>
    <div className='text-center pt-8 w-1/2 mx-auto'>

      <h1 className='text-3xl font-bold my-5 '>Welcome to your Dashboard</h1>

      <div className="form flex flex-col w-full p-2 text-sm gap-3">
        <div className="item flex flex-col gap-1 w-full items-start">
            <span className='font-semibold'>Name</span>
            <input type="text" className='rounded-lg bg-violet-700 px-3 py-1 w-full border-2 border-violet-500'/>
        </div>
        <div className="item flex flex-col gap-1 w-full items-start">
            <span className='font-semibold'>Email</span>
            <input type="text" className='rounded-lg bg-violet-700 px-3 py-1 w-full border-2 border-violet-500'/>
        </div>
        <div className="item flex flex-col gap-1 w-full items-start">
            <span className='font-semibold'>Username</span>
            <input type="text" className='rounded-lg bg-violet-700 px-3 py-1 w-full border-2 border-violet-500'/>
        </div>
        <div className="item flex flex-col gap-1 w-full items-start">
            <span className='font-semibold'>Profile Picture</span>
            <input type="text" className='rounded-lg bg-violet-700 px-3 py-1 w-full border-2 border-violet-500'/>
        </div>
        <div className="item flex flex-col gap-1 w-full items-start">
            <span className='font-semibold'>Banner</span>
            <input type="text" className='rounded-lg bg-violet-700 px-3 py-1 w-full border-2 border-violet-500'/>
        </div>
        <div className="item flex flex-col gap-1 w-full items-start">
            <span className='font-semibold'>RazorPay Credentials</span>
            <input type="text" className='rounded-lg bg-violet-700 px-3 py-1 w-full border-2 border-violet-500'/>
        </div>
      </div>

      <div className="button mt-5 px-2 w-full">
        <button className='w-full bg-gradient-to-br from-purple-600 to-blue-800 hover:bg-gradient-to-bl font-medium rounded-2xl px-5 py-1 text-center'>
            Save
        </button>
      </div>

    </div>
    </>
  )
}

export default page
