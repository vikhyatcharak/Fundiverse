import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/models/Payment";
import Razorpay from "razorpay";
import connectDB from "@/db/connectDb";
import User from "@/models/User";

export const POST=async(req)=>{
    await connectDB()
    let body= await req.formData()
    body=Object.fromEntries(body)
    // check if razorpay order id is on the server
    // console.log("Received body from Razorpay:", body)
    let p=await Payment.findOne({oid: body.razorpay_order_id})
    if(!p){
        return NextResponse.json({success:false, message:"order id not found"})
    }


    //verify the payment

    //fetch the razorpay secret of the user
    let user= User.findOne({username:p.to_user})
    const secret= user.rzPaySecret

    let xx=validatePaymentVerification({"order_id":body.razorpay_order_id, "payment_id":body.razorpay_payment_id}, body.razorpay_signature, secret)
    if(xx){
        // update payment status to done:true
        const updatedPayment= await Payment.findOneAndUpdate({oid:body.razorpay_order_id},{done:true},{new:true})

            //redirecting to url
        // const redirectUrl =
        //     process.env.NODE_ENV === "development"
        //         ? `http://localhost:3000/${updatedPayment.to_user}?paymentDone=true`
        //         : `${process.env.NEXT_PUBLIC_URL}/${updatedPayment.to_user}?paymentDone=true`;

        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/${updatedPayment.to_user}?paymentDone=true`, 302);
    }
    else{
        return NextResponse.json({success:false, message:"Payment verification failed"})
    }
}

