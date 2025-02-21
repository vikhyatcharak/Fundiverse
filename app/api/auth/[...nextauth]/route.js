import NextAuth from 'next-auth'
// import AppleProvider from 'next-auth/providers/apple'
// import FacebookProvider from 'next-auth/providers/facebook'
// import GoogleProvider from 'next-auth/providers/google'
// import TwitterProvider from "next-auth/providers/twitter";
// import LinkedInProvider from "next-auth/providers/linkedin";
import GitHubProvider from "next-auth/providers/github";
import mongoose from 'mongoose';
import User from '@/models/User';
import Payment from '@/models/Payment';
import connectDB from '@/db/connectDb';

export const authOptions= NextAuth({
  providers: [
    // OAuth authentication providers...

    // GoogleProvider({
    //     clientId: process.env.GOOGLE_ID,
    //     clientSecret: process.env.GOOGLE_SECRET
    // }),
    // LinkedInProvider({
    //     clientId: process.env.LinkedIn_ID,
    //     clientSecret: process.env.LinkedIn_SECRET
    // }),
    // TwitterProvider({
    //     clientId: process.env.Twitter_ID,
    //     clientSecret: process.env.Twitter_SECRET
    // }),
    // FacebookProvider({
    //     clientId: process.env.FACEBOOK_ID,
    //     clientSecret: process.env.FACEBOOK_SECRET
    // }),
    GitHubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET
    }),
    // AppleProvider({
    //   clientId: process.env.APPLE_ID,
    //   clientSecret: process.env.APPLE_SECRET
    // }),
    
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if(account.provider=="github"){
          //connect to database ---->>> done via connectDb
          await connectDB()
          // const client= await mongoose.connect("mongodb://localhost:27017/Fundiverse")
        //check if user already exists in database
        const userEmail = profile.email || user.email
        const currentUser= await User.findOne({email:userEmail})
        if(!currentUser){
          //creating new user
          const newUser= await User.create({
            email:userEmail,
            username:userEmail.split("@")[0]
          })
          await newUser.save()
        }
          return true
      }
    },
    async session({ session, user, token }) {
      const dbUser= await User.findOne({email: session.user.email})
      session.user.name= dbUser.username
      return session
    },
  }
})
export {authOptions as GET , authOptions as POST}