import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

const Home = () => {
    const navigate = useNavigate()


    return (
        <>
            <section
                className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat"
            >
                <div
                    className="absolute inset-0 bg-brand-blue/50 sm:bg-brand-blue/10 sm:bg-gradient-to-r sm:from-brand-blue/70 sm:to-white/5"
                ></div>

                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                >
                    <div className="max-w-xl text-center sm:text-left">
                        <h1 className="text-3xl font-extrabold sm:text-5xl font-heading  text-white sm:text-left">
                            Let us find your

                            <strong className="block font-extrabold bg-white mt-2 text-brand-blue font-oswald uppercase sm:text-left">
                                Forever Home.
                            </strong>
                        </h1>

                        <p className="mt-4 max-w-md sm:text-md font-content text-white">
                            Welcome to our home listings designed for you. Explore to find your perfect match. We're here to make finding your dream home a smooth, enjoyable experience.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4 text-center">
                            <button
                                onClick={() => navigate('/search')}
                                className="block w-full rounded bg-brand-blue px-12 py-3 text-sm font-heading uppercase text-white shadow hover:bg-white hover:text-brand-blue duration-300 ease-in-out  sm:w-auto"
                            >
                                Get Started
                            </button>

                            <button

                                className="block w-full rounded hover:bg-brand-blue px-12 py-3 text-sm font-heading uppercase hover:text-white shadow bg-white text-brand-blue duration-300 ease-in-out  sm:w-auto"
                            >
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div
                    className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8"
                >
                    <div className="content">
                        <h2 className='text-3xl font-bold sm:text-5xl font-heading  text-brand-blue sm:text-left  '>
                            Explore Our Sale Post
                        </h2>
                        <p className='font-content font-medium text-sm sm:text-lg mt-3 max-w-3xl'>
                            Step into our Sale Event and discover an array of incredible offers waiting for you! Unleash your shopping desires with discounts on a wide range of products. Embrace the savings—start shopping now!
                        </p>
                    </div>

                    <div className="post_container mt-10">

                    </div>
                </div>
            </section>


            {/* // Footer section code here */}
            <Footer />

        </>


    )
}

export default Home