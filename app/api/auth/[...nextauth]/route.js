import NextAuth from 'next-auth'
// import AppleProvider from 'next-auth/providers/apple'
// import FacebookProvider from 'next-auth/providers/facebook'
// import GoogleProvider from 'next-auth/providers/google'
// import TwitterProvider from "next-auth/providers/twitter";
// import LinkedInProvider from "next-auth/providers/linkedin";
import GitHubProvider from "next-auth/providers/github";

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
    
  ]
})
export {authOptions as GET , authOptions as POST}