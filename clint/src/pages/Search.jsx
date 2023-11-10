import React, { useEffect, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { FaSearch } from 'react-icons/fa'
import ListingCard from '../components/ListingCard'
import { useNavigate, } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchQuery, setSearchTermState } from '../redux/search/searchSlice'

const Search = () => {
    const [listings, setListings] = useState([])
    const [formState, setFormState] = useState({})
    const { searchQueryState, searchTermState } = useSelector(state => state.search)
    const dispatch = useDispatch()


    const handleSubmit = (e) => {
        e.preventDefault()
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set('searchTerm', searchTermState);
        urlParams.set('type', formState.type);
        urlParams.set('parking', formState.parking);
        urlParams.set('furnished', formState.furnished);
        const searchQueryTerm = urlParams.get('searchTerm')
        const searchQuery = urlParams.toString();
        if (searchQueryTerm) {
            dispatch(setSearchQuery(searchQuery.slice((10 + searchQueryTerm.length + 1))))
        }
        else {
            dispatch(setSearchQuery(searchQuery.slice((11))))
        }
    }

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const searchQuery = urlParams.toString();
        const searchQueryTerm = urlParams.get('searchTerm')
        //===Set Search Term State===//
        dispatch(setSearchTermState(searchQueryTerm))


        //===Set Search Query State WITHOUT SEARCH TERM====//
        if (searchQueryTerm) {
            dispatch(setSearchQuery(searchQuery.slice((10 + searchQueryTerm.length + 1))))
        }
        else {
            dispatch(setSearchQuery(searchQuery.slice((11))))
        }
    }, [location.search])


    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`/api/posts?${searchTermState ? `searchTerm=${searchTermState}` : ""}${searchQueryState}`)
                const json = await res.json()
                setListings(json)
            } catch (error) {
                console.log(error);
            }
        })()
    }, [searchQueryState, searchTermState])


    const handleChange = (name, value) => {
        setFormState({
            ...formState,
            [name]: value
        })
    }
    console.log(`/api/posts?searchTerm=${searchTermState}${searchQueryState}`);
    console.log(listings);



    return (
        <main>
            <section >
                <div >
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:max-h-full lg:min-h-screen">
                        <div className="option_contaienr md:col-span-3 mt-1 bg-white lg:max-h-full lg:min-h-screen">
                            <div className="items_cotainer p-5 py-8 ">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-control w-full max-w-full   sm:max-w-full relative">
                                        <input
                                            type="text"
                                            placeholder="Search..."
                                            className="search sm:max-w-full"
                                            onChange={(e) => dispatch(setSearchTermState(e.target.value))}
                                            defaultValue={searchTermState}
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
                                                        <input
                                                            className='h-4 w-4 mr-1 accent-brand-blue' type="radio"
                                                            name="type"
                                                            value={"all"}
                                                            onChange={(e) => handleChange(e.target.name, e.target.value)}
                                                        />
                                                        All
                                                    </label>
                                                </div>
                                                <div>
                                                    <label className="flex items-center justify-start text-lg font-heading">
                                                        <input
                                                            className='h-4 w-4 mr-1 accent-brand-blue' type="radio"
                                                            name="type"
                                                            value={"sale"}
                                                            onChange={(e) => handleChange(e.target.name, e.target.value)}
                                                        />
                                                        For Sale
                                                    </label>
                                                </div>
                                                <div>
                                                    <label className="flex items-center justify-start text-lg font-heading">
                                                        <input
                                                            className='h-4 w-4 mr-1 accent-brand-blue' type="radio"
                                                            name="type"
                                                            value={"rent"}
                                                            onChange={(e) => handleChange(e.target.name, e.target.value)}
                                                        />
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
                                                            <input
                                                                className='h-4 w-4 mr-1 accent-brand-blue' type="checkbox"
                                                                name="parking"
                                                                onChange={(e) => handleChange(e.target.name, e.target.checked)}
                                                            />
                                                            Parking
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <label className="flex items-center justify-start text-lg font-heading">
                                                            <input
                                                                className='h-4 w-4 mr-1 accent-brand-blue' type="checkbox"
                                                                name="furnished"
                                                                onChange={(e) => handleChange(e.target.name, e.target.checked)}
                                                            />
                                                            Furnished
                                                        </label>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className="offer_container mt-8 ">
                                                <div>
                                                    <label className="flex items-center justify-start text-lg font-heading">
                                                        <input
                                                            className='h-4 w-4 mr-1  accent-brand-blue' type="checkbox"
                                                            name="offer"
                                                            value={true || false}
                                                            onChange={(e) => handleChange(e.target.name, e.target.checked)}
                                                        />
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
                        <div className="listing_container  md:col-span-9 pb-10 pt-2">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 px-5 gap-y-8">
                                {
                                    listings && listings.map(listing => <ListingCard key={listing._id} listing={listing} />)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Search