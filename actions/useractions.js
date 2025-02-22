"use server"

import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import connectDB from "@/db/connectDb"
import User from "@/models/User"
import { notFound } from "next/navigation"

export const initiate = async (amount, to_user, paymentform) => {
    await connectDB();
    //from razorpay integration:-

    //fetch the razorpay secret and id of the user
    let user= await User.findOne({username:to_user})

    const secret= user.rzPaySecret
    const id= user.rzPayId
    
    var instance = new Razorpay({ key_id: id.trim(), key_secret: secret.trim() })

    let options={
        amount:Number.parseInt(amount),
        currency:"INR"
    }

    let x= await instance.orders.create(options)
    // create a payment object to show pending payment
    await Payment.create({oid: x.id, amount:Number.parseInt(amount)/100, to_user:to_user, name: paymentform.name, message: paymentform.message})

    return x;
}

export const fetchUser=async(username)=>{
    await connectDB()
    let u= await User.findOne({username: username})
    if(u){
        let user= u.toObject({flattenObjectIds:true})
        return user
    }
    if(!u){
        return notFound()
    }
}

export const fetchPayment=async(username)=>{
    await connectDB()
    //find all done payments sorted by decreasing order of amount
    let p= await Payment.find({to_user: username, done: true}).sort({amount:-1}).lean()
    return p
}

export const updateProfile= async(data,oldUsername)=>{
    await connectDB()
    //if the username is being updated check if it already exists
    let ndata=Object.fromEntries(data)
    if(oldUsername!=ndata.username){
        let u=await User.findOne({username:ndata.username})
        if(u){
            return {error:"Username already exists"}
        }
    }
    await User.updateOne({email:ndata.email},ndata)
    // ✅ Update all payments where `to_user` was the old username
    await Payment.updateMany(
        { to_user: oldUsername },  
        { $set: { to_user: ndata.username } }
    );
}