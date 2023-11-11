import React from 'react'
import { useSelector } from 'react-redux'
import ListingCard from '../components/ListingCard'
import { FaArrowRight } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const SaveListing = () => {
    const { saveListings } = useSelector(state => state.savedListing)
    const navigate = useNavigate()
    return (
        <section>
            <div className="container py-5 ">
                <div className="heading_cotainer  border-b-2 pb-5 border-brand-blue flex items-center justify-between">
                    <h1 className='font-heading text-2xl text-left '>Your saved Listing</h1>
                    <button
                        onClick={() => navigate("/search")}

                        className='font-heading text-sm text-white bg-brand-blue px-5 py-2 rounded-sm flex items-center hover:bg-brand-blue/90  '>
                        <span className='mr-1'>Explore more</span>
                        <FaArrowRight className=' mt-1 ' />
                    </button>
                </div>
                <div className="listings pt-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 px-5 gap-y-8">
                        {
                            saveListings && saveListings.map(listing => <ListingCard key={listing._id} listing={listing} />)
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SaveListing