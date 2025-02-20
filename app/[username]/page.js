"use client"
import React, { useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useParams } from "next/navigation"

const Page = () => {
    const { data: session, status } = useSession()
    const router = useRouter()
    const params = useParams() // Correct way to access params in Next.js 14+

    // Redirect if user is not authenticated
    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/login")
        }
    }, [status, router])

    if (status === "loading") return <p>Loading...</p> // Prevent rendering before session loads

    return (
        <>
            <div className="banner w-full h-[320]">
                <img className="object-cover w-full h-[320]" src="/banner.gif" alt="banner" />
                <div className="relative -top-14 profilePic rounded-lg w-fit bg-red-50 mx-auto">
                    <img className="w-24 h-24 text-center rounded-lg object-cover" src="/profilePic.jpg" alt="profile" />
                </div>
            </div>

            <div className="info flex justify-center items-center mt-10 flex-col">
                <div className="font-bold text-lg">
                    @{params.username}
                </div>
                <div className="text-slate-400">
                    Creating Animated art for VTT's
                </div>
                <div className="text-slate-400">
                    <ul className="flex gap-2 list-inside list-disc">
                        <li className="marker:mr-0 marker:ml-0">16,521 members</li>
                        <li className="marker:mr-0 marker:ml-0">95 posts</li>
                        <li className="marker:mr-0 marker:ml-0">$16,470/release</li>
                    </ul>
                </div>
            </div>

            <div className="payment w-[75%] flex mx-auto justify-center gap-3 mt-12 max-h-[380]">
                <div className="supporters w-1/2 bg-violet-900 rounded-xl p-5">
                {/* list of supporters */}
                    <h2 className="font-bold text-2xl">Supporters</h2>
                    <ul className="mt-3 px-5 max-h-[250] overflow-y-auto">
                        <li className="my-2 flex gap-2 items-center">
                            <img width={33} src="/supporter.png" alt="supporter" />
                           <span> Shubham donated <b>₹100</b> with a message "i support you. with lots of ❤️"</span>
                        </li>
                        <li className="my-2 flex gap-2 items-center">
                            <img width={33} src="/supporter.png" alt="supporter" />
                           <span> Shubham donated <b>₹100</b> with a message "i support you. with lots of ❤️"</span>
                        </li>
                        <li className="my-2 flex gap-2 items-center">
                            <img width={33} src="/supporter.png" alt="supporter" />
                           <span> Shubham donated <b>₹100</b> with a message "i support you. with lots of ❤️"</span>
                        </li>
                        <li className="my-2 flex gap-2 items-center">
                            <img width={33} src="/supporter.png" alt="supporter" />
                           <span> Shubham donated <b>₹100</b> with a message "i support you. with lots of ❤️"</span>
                        </li>
                        <li className="my-2 flex gap-2 items-center">
                            <img width={33} src="/supporter.png" alt="supporter" />
                           <span> Shubham donated <b>₹100</b> with a message "i support you. with lots of ❤️"</span>
                        </li>
                        <li className="my-2 flex gap-2 items-center">
                            <img width={33} src="/supporter.png" alt="supporter" />
                           <span> Shubham donated <b>₹100</b> with a message "i support you. with lots of ❤️"</span>
                        </li>
                        <li className="my-2 flex gap-2 items-center">
                            <img width={33} src="/supporter.png" alt="supporter" />
                           <span> Shubham donated <b>₹100</b> with a message "i support you. with lots of ❤️"</span>
                        </li>
                        <li className="my-2 flex gap-2 items-center">
                            <img width={33} src="/supporter.png" alt="supporter" />
                           <span> Shubham donated <b>₹100</b> with a message "i support you. with lots of ❤️"</span>
                        </li>
                        <li className="my-2 flex gap-2 items-center">
                            <img width={33} src="/supporter.png" alt="supporter" />
                           <span> Shubham donated <b>₹100</b> with a message "i support you. with lots of ❤️"</span>
                        </li>
                        <li className="my-2 flex gap-2 items-center">
                            <img width={33} src="/supporter.png" alt="supporter" />
                           <span> Shubham donated <b>₹100</b> with a message "i support you. with lots of ❤️"</span>
                        </li>
                        <li className="my-2 flex gap-2 items-center">
                            <img width={33} src="/supporter.png" alt="supporter" />
                           <span> Shubham donated <b>₹100</b> with a message "i support you. with lots of ❤️"</span>
                        </li>
                        <li className="my-2 flex gap-2 items-center">
                            <img width={33} src="/supporter.png" alt="supporter" />
                           <span> Shubham donated <b>₹100</b> with a message "i support you. with lots of ❤️"</span>
                        </li>
                    </ul>
                </div>

                <div className="pay w-1/2 bg-violet-900 rounded-xl p-5">
                    <h2 className="font-bold text-2xl">Payment</h2>
                    <div className="form flex flex-col gap-5 pt-3 px-2">
                        {/* custom amount */}
                        <input type="text" className="rounded-lg bg-transparent px-3 py-1 w-3/4 border-2 border-violet-500" placeholder="Name"/>
                        <input type="text" className="rounded-lg bg-transparent px-3 py-1 w-3/4 border-2 border-violet-500" placeholder="Message"/>
                        {/* <div className="flex gap-3"> */}
                            <input type="text" className="rounded-lg bg-transparent px-3 py-1 w-3/4 border-2 border-violet-500" placeholder="Amount"/>
                            <button className="w-3/4 bg-gradient-to-br from-purple-700 to-blue-700 hover:bg-gradient-to-bl font-medium rounded-2xl px-5 py-1 text-center">
                            Pay
                            </button>
                        {/* </div> */}
                    </div>
                    <div className="buttons flex gap-3 mt-8 py-2 px-4">
                        {/* fixed amount */}
                        <button className="bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-2xl px-5 py-2.5 text-center">
                            Pay ₹50
                        </button>
                        <button className="bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-2xl px-5 py-2.5 text-center">
                            Pay ₹150
                        </button>
                        <button className="bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-2xl px-5 py-2.5 text-center">
                            Pay ₹300
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Page
