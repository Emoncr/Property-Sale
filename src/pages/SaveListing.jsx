import React from 'react'
import { useSelector } from 'react-redux'
import ListingCard from '../components/ListingCard'
import { FaArrowRight } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

const SaveListing = () => {
    const { saveListings } = useSelector(state => state.savedListing)
    const navigate = useNavigate()
    return (
        <>
            <section>
                <div className="container py-10 ">
                    <div className="heading_cotainer  border-b-2 pb-5 border-brand-blue flex items-center justify-center sm:justify-between flex-col sm:flex-row gap-3">
                        <h1 className='font-heading text-2xl text-left '>Your saved Listing</h1>
                        <button
                            className="group relative inline-flex items-center overflow-hidden rounded bg-brand-blue px-6 py-2 text-white "
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
                                Explore More
                            </span>
                        </button>
                    </div>
                    <div className="listings pt-5">
                        {
                            saveListings.length === 0 ?
                                <div className='py-20'>

                                    <p className='bg-white text-center text-sm sm:text-2xl font-heading font-bold flex flex-col items-center justify-center max-w-3xl mx-auto py-10 text-black px-5 rounded shadow-md'>
                                        <span>Your saved listings are currently empty.</span>
                                    </p>

                                </div>
                                :
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 px-5 gap-y-8 pb-20">
                                    {
                                        saveListings && saveListings.map(listing => <ListingCard key={listing._id} listing={listing} />)
                                    }
                                </div>
                        }

                    </div>
                </div>
            </section>
            <>
                <Footer />
            </>
        </>
    )
}

export default SaveListing