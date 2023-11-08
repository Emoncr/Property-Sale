import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { FaSearch } from 'react-icons/fa'

const Search = () => {
    return (
        <main>
            <section>
                <div >
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                        <div className="option_contaienr md:col-span-3 mt-1 bg-white lg:h-screen">
                            <div className="items_cotainer p-5 py-8 ">
                                <form >
                                    <div className="form-control w-full max-w-full   sm:max-w-full relative">
                                        <input
                                            type="text"
                                            placeholder="Search..."
                                            className="search sm:max-w-full"
                                        />
                                        <button type='submit' className='search_btn   bg-brand-blue'>
                                            <i className='text-center text-white font-bold'><BsSearch /></i>
                                        </button>
                                    </div>
                                    <div className="feilds_cotainer mt-4">
                                        <div className="feilds max-w-xs">
                                            <p className='text-lg font-heading '>Property type:</p>
                                            <div className="control flex flex-row md:flex-col items-center md:items-start xl:flex-row xl:items-center justify-between mt-1">
                                                <div>
                                                    <label className="flex items-center justify-start text-lg font-heading">
                                                        <input className='h-4 w-4 mr-1 accent-brand-blue' type="radio" name="type" />
                                                        All
                                                    </label>
                                                </div>
                                                <div>
                                                    <label className="flex items-center justify-start text-lg font-heading">
                                                        <input className='h-4 w-4 mr-1 accent-brand-blue' type="radio" name="type" />
                                                        For Sale
                                                    </label>
                                                </div>
                                                <div>
                                                    <label className="flex items-center justify-start text-lg font-heading">
                                                        <input className='h-4 w-4 mr-1 accent-brand-blue' type="radio" name="type" />
                                                        For Rent
                                                    </label>
                                                </div>

                                            </div>

                                            {/* // Amenities Section  */}
                                            <div className="aminities_container mt-4">
                                                <p className='text-lg font-heading'>Amenities:</p>
                                                <div className="control flex flex-row md:flex-col items-center md:items-start xl:flex-row xl:items-center justify-start mt-1">
                                                    <div className='mr-5'>
                                                        <label className="flex items-center justify-start text-lg font-heading">
                                                            <input className='h-4 w-4 mr-1 accent-brand-blue' type="checkbox" name="parking" />
                                                            Parking
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <label className="flex items-center justify-start text-lg font-heading">
                                                            <input className='h-4 w-4 mr-1 accent-brand-blue' type="checkbox" name="furnished" />
                                                            Furnished
                                                        </label>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className="offer_container mt-8 ">
                                                <div>
                                                    <label className="flex items-center justify-start text-lg font-heading">
                                                        <input className='h-4 w-4 mr-1  accent-brand-blue' type="checkbox" name="type" />
                                                        Available Offer
                                                    </label>
                                                </div>
                                            </div>


                                        </div>
                                        <div className="btn_cotainer w-full">
                                            <button
                                                className='w-full mt-4 py-2 px-2 bg-brand-blue text-white rounded-sm hover:bg-brand-blue/90'
                                                type='submit'
                                            >
                                                <span className='flex items-center justify-center font-heading text-lg'>
                                                    <FaSearch className='mr-1' />
                                                    Search
                                                </span>
                                            </button>
                                        </div>
                                    </div>


                                </form>

                            </div>
                        </div>
                        <div className="listing_container  md:col-span-9">
                            <h3>fsda</h3>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Search