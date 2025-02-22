"use client"
import React, { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter, } from "next/navigation"
import Razorpay from "razorpay"
import Script from 'next/script'
import { fetchPayment, initiate, fetchUser } from "@/actions/useractions"
import { useSearchParams } from "next/navigation"
import { ToastContainer, toast } from 'react-toastify'
import { Bounce } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'


const PaymentPage = ({username}) => {

    const { data: session, status } = useSession()
    const router = useRouter()

    const [paymentform, setPaymentform] = useState({name:"", message:"", amount:""})
    const handleChange=(e)=>{
        setPaymentform({...paymentform,[e.target.name]:e.target.value})
    }
    const [currentuser, setCurrentuser] = useState({})
    const [payments, setPayments] = useState([])

    const pay=async(amount)=>{
        //get order id
        let a= await initiate(amount,username,paymentform)
        let orderId=a.id
        //from razorpay integration
        var options={
            "key": currentuser.rzPayId, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Fundiverse", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        }
        var rzp1 = new Razorpay(options);
        rzp1.open();
    }

    //for supporters section
    const getData=async()=>{
        let u= await fetchUser(username)
        setCurrentuser(u)
        let p= await fetchPayment(username)
        setPayments(p)
    }

    // Redirect if user is not authenticated
    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/login")
        }
    }, [status, router])

    const searchParams=useSearchParams()
    useEffect(()=>{
        if(searchParams.get("paymentDone")=="true"){
            setTimeout(() => {
                toast('Payment Successful', {
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
            router.push(`/${username}`)    
        }
    },[searchParams])

    useEffect(() => {
      getData()
    }, [])
    

    if (status === "loading") return <p>Loading...</p> // Prevent rendering before session loads


    

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
        {/* from razorpay integration */}
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>


            <div className="banner w-full h-[320]">
                <img className="object-cover w-full h-[320]" src={currentuser.banner} alt="banner" />
                <div className="relative -top-14 profilePic rounded-lg w-fit bg-red-50 mx-auto">
                    <img className="w-24 h-24 text-center rounded-lg object-cover" src={currentuser.profile_pic} alt="profile" />
                </div>
            </div>

            <div className="info flex justify-center items-center mt-10 flex-col">
                <div className="font-bold text-lg">
                    @{username}
                </div>
                <div className="text-slate-400">
                    Fund {currentuser.name} easily
                </div>
                <div className="text-slate-400">
                    <ul className="flex gap-2 list-inside list-disc">
                        <li className="marker:mr-0 marker:ml-0">{payments.length} payments</li>
                        <li className="marker:mr-0 marker:ml-0">Total ₹{payments.reduce((a,b)=>a+b.amount,0)} received</li>
                    </ul>
                </div>
            </div>

            <div className="payment lg:w-[75%] lg:p-0 md:w-full md:p-2 p-4  flex md:flex-row flex-col mx-auto justify-center gap-3 mt-12 md:max-h-[400]">
                <div className="supporters md:w-1/2 w-full bg-violet-900 rounded-xl p-5">
                {/* list of supporters */}
                    <h2 className="font-bold text-2xl">Supporters</h2>
                    <ul className="md:mt-3 mt-5 px-5 max-h-[250] overflow-y-auto">
                        {payments.length!=0 && payments.map((p,i)=>{

                           return <li key={i} className="my-2 flex gap-2 items-center">
                                <img width={33} src="/supporter.png" alt="supporter" />
                            <span> {p.name} donated <b>₹{p.amount}</b> with a message "{p.message}"</span>
                            </li>
                        })}
                        {
                            payments.length==0 && <li className="my-2 flex gap-2 items-center">
                                currently no supporter
                            </li>
                        }
                    </ul>
                </div>

                <div className="pay md:w-1/2 w-full bg-violet-900 rounded-xl p-5">
                    <h2 className="font-bold text-2xl">Payment</h2>
                    <div className="form flex flex-col gap-5 pt-3 px-2">
                        {/* custom amount */}
                        <input onChange={handleChange} name="name" value={paymentform.name?paymentform.name:""} type="text" className="rounded-lg bg-transparent px-3 py-1 w-full md:w-3/4 border-2 border-violet-500" placeholder="Name"/>
                        <input onChange={handleChange} name="message" value={paymentform.message?paymentform.message:""} type="text" className="rounded-lg bg-transparent px-3 py-1 w-full md:w-3/4 border-2 border-violet-500" placeholder="Message"/>
                        <input onChange={handleChange} name="amount" value={paymentform.amount?paymentform.amount:""} type="text" className="rounded-lg bg-transparent px-3 py-1 w-full md:w-3/4 border-2 border-violet-500" placeholder="Amount"/>
                        <button  disabled={paymentform.name?.length<1 || paymentform.message?.length<1 || paymentform.amount?.length<1} onClick={() => pay(paymentform.amount * 100)}  className="w-3/4 md:mx-0 mx-auto bg-gradient-to-br from-purple-700 to-blue-700 hover:bg-gradient-to-bl font-medium rounded-2xl sm:px-5 sm:py-2.5 px-2.5 py-1.5 text-center disabled:from-purple-300 disabled:to-blue-300">
                            Pay
                        </button>
                    </div>
                    <div className="buttons w-fit md:mx-0 mx-auto flex gap-3 mt-8 py-2 md:px-4">
                        {/* fixed amount */}
                    <button disabled={paymentform.name?.length==0 || paymentform.message?.length==0} onClick={()=>pay(5000)} className="bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-2xl md:px-5 lg:py-2.5 sm:px-2.5 sm:py-1.5 px-1 py-1 text-center disabled:from-purple-300 disabled:to-blue-300">
                            Pay ₹50
                        </button>
                        <button disabled={paymentform.name?.length==0 || paymentform.message?.length==0} onClick={()=>pay(15000)} className="bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-2xl md:px-5 lg:py-2.5 sm:px-2.5 sm:py-1.5 px-1 py-1 text-center disabled:from-purple-300 disabled:to-blue-300">
                            Pay ₹150
                        </button>
                        <button disabled={paymentform.name?.length==0 || paymentform.message?.length==0} onClick={()=>pay(30000)} className="bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-2xl md:px-5 lg:py-2.5 sm:px-2.5 sm:py-1.5 px-1 py-1 text-center disabled:from-purple-300 disabled:to-blue-300">
                            Pay ₹300
                        </button>
                    </div>
                </div>
            </div>


        </>
    )
}

export default PaymentPage
