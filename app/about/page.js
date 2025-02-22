import React from 'react'
import Link from 'next/link'

const page = () => {
    return (
        <>
            <div className="min-h-screen  text-white py-12 px-6 md:px-20">
                {/* Hero Section */}
                <section className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-violet-500 mb-4">
                        About Fundiverse
                    </h1>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Fundiverse is a platform designed to help creators, artists, and innovators receive support
                        from their community. Join us in making a difference by funding creativity and passion.
                    </p>
                </section>

                {/* Mission Section */}
                <section className="bg-gradient-to-br from-purple-950 to-blue-950 rounded-xl p-6 md:p-12 shadow-lg mb-12">
                    <h2 className="text-3xl font-bold text-center mb-4">Our Mission</h2>
                    <p className="text-gray-200 text-center">
                        Our goal is to empower creators by providing a seamless and secure platform to
                        receive contributions, engage with supporters, and grow their community.
                    </p>
                </section>

                {/* Features Section */}
                <section className="grid md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-gradient-to-br from-purple-900 to-blue-900 p-6 rounded-lg shadow-md text-center">
                        <h3 className="text-xl font-semibold ">Secure Payments</h3>
                        <p className="text-gray-300 mt-2">
                            We ensure all transactions are safe and protected with top-tier security protocols.
                        </p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-900 to-blue-900 p-6 rounded-lg shadow-md text-center">
                        <h3 className="text-xl font-semibold">Easy Setup</h3>
                        <p className="text-gray-300 mt-2">
                            Create your profile and start receiving payments in just a few clicks.
                        </p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-900 to-blue-900 p-6 rounded-lg shadow-md text-center">
                        <h3 className="text-xl font-semibold">Community Focused</h3>
                        <p className="text-gray-300 mt-2">
                            Engage with your supporters, share updates, and grow your audience.
                        </p>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Fundiverse Today</h2>
                    <p className="text-gray-300 mb-6">
                        Start your journey towards sustainable creative growth with Fundiverse.
                    </p>
                    <Link href="/login" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-2xl px-5 py-2.5 text-center">
                        Get Started
                    </Link>
                </section>
            </div>
        </>
    )
}

export default page

export const metadata = {
    title: 'About Fundiverse',
  }