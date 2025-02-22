
import React from "react"
import PaymentPage from "@/components/PaymentPage"

import { fetchUser } from "@/actions/useractions"

const Page =async ({params}) => {
    // const params = useParams() // Correct way to access params in Next.js 14+

    //if username not found in database show 404 error page
    let u=await fetchUser(params.username)

    return (
        <>
            <PaymentPage username={params.username}/>
        </>
    )
}
export default Page
