import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import SaleListing from '../components/SaleListing'
import RentListing from '../components/RentListing'
import OfferedListing from '../components/OfferedListing'

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
                        <h1 className="text-3xl font-extrabold sm:text-5xl xl:text-6xl font-heading  text-white sm:text-left">
                            Let us find your

                            <strong className="block font-extrabold bg-white mt-2 text-brand-blue max-w-xs mx-auto sm:ml-0 sm:mr-auto sm:max-w-md font-oswald uppercase sm:text-left xl:max-w-3xl">
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
                                onClick={() => navigate('/about')}
                                className="block w-full rounded hover:bg-brand-blue px-12 py-3 text-sm font-heading uppercase hover:text-white shadow bg-white text-brand-blue duration-300 ease-in-out  sm:w-auto"
                            >
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* offer Post Listings */}
            <OfferedListing />


            {/* Anousment Section  */}
            <section className='bg-brand-blue'>
                <div
                    className="mx-auto max-w-screen-xl  space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8"
                >
                    <div className="anoucement grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-3 ">
                        <h2 className='font-oswald uppercase text-3xl text-center sm:text-left sm:text-3xl text-white  font-bold'>Want to sell your property?</h2>
                        <div className="btn_container flex items-center sm:justify-end justify-center">
                            <button
                                className="group relative inline-flex items-center overflow-hidden rounded bg-white font-heading  px-8 py-3 text-brand-blue "
                                onClick={() => navigate('/create_post')}
                            >
                                <span className="absolute -end-full transition-all group-hover:end-4">
                                    <svg
                                        className="h-5 w-5 rtl:rotate-180"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </span>

                                <span className="text-sm font-medium transition-all  group-hover:me-4">
                                    Let's Sell Now!
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sale Post Listings */}
            <SaleListing />



            {/* Anousment Section  */}
            <section className='bg-brand-blue'>
                <div
                    className="mx-auto max-w-screen-xl  space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8"
                >
                    <div className="anoucement grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-3 ">
                        <h2 className='font-oswald uppercase text-3xl text-center sm:text-left sm:text-3xl text-white  font-bold'>Ready to rent your dream property?</h2>
                        <div className="btn_container flex items-center sm:justify-end justify-center">
                            <button
                                className="group relative inline-flex items-center overflow-hidden rounded bg-white font-heading  px-8 py-3 text-brand-blue "
                                onClick={() => navigate('/search')}
                            >
                                <span className="absolute -end-full transition-all group-hover:end-4">
                                    <svg
                                        className="h-5 w-5 rtl:rotate-180"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </span>

                                <span className="text-sm font-medium transition-all  group-hover:me-4">
                                    Let's Take Rent!
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            {/* Rent Post Listings */}
            <RentListing />



            {/* // Footer section code here */}
            <Footer />
        </>


    )
}

export default Home