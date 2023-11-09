import { React, useEffect, useState } from 'react'
import { BsJustifyRight, BsSearch } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import MobileMenu from './mobileMenu'
import { useDispatch, useSelector } from 'react-redux'
import Profile from './ProfileOption'
import { setSearchQuery, setSearchTermState } from '../redux/search/searchSlice'





const Header = () => {
    const [isActiveMoblie, setisActiveMoblie] = useState(false)
    const { currentUser } = useSelector((state) => state.user)
    const { searchQueryState, searchTermState } = useSelector((state) => state.search)

    const navigate = useNavigate()
    const dispatch = useDispatch()


    const handleSubmit = (e) => {
        e.preventDefault()
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set('searchTerm', searchTermState);
        const searchQuery = urlParams.toString();
        dispatch(setSearchQuery(searchQuery))
        navigate(`/search?${searchQuery}`)
    }


    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const searchQueryUrl = urlParams.get('searchTerm')
        dispatch(setSearchTermState(searchQueryUrl))
    }, [])




    return (
        <div className="navbar pl-0 pr-0 pt-3 pb-3 bg-slate-300 flex items-center justify-between shadow-md">
            <div className="container flex items-center justify-between">
                <div className="w-full mr-2 max-w-[100px] sm:max-w-[200px]">
                    <Link to={'/home'}>
                        <h1 className="font-blach sm:text-xl text-sm text-left hover:bg-transparent uppercase text-brand-blue tracking-tighter w-full font-heading ">
                            <span>Property Sell</span>
                        </h1>
                    </Link>
                </div>
                <div className="form_contaienr max-w-[50%]  w-full  sm:max-w-full">
                    <form onSubmit={handleSubmit}>
                        <div className="form-control w-full max-w-full   sm:max-w-sm  flex flex-row mx-auto items-center justify-center relative">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="search"
                                onChange={(e) => dispatch(setSearchTermState(e.target.value))}
                                defaultValue={searchTermState}
                            />
                            <button type='submit' className='search_btn bg-brand-blue'>
                                <i className='text-center text-white font-bold'><BsSearch /></i>
                            </button>
                        </div>
                    </form>
                </div>

                {/*========= when user login ======== */}
                <div className="">
                    <ul className=" hidden sm:ml-5 sm:flex items-center justify-end  pr-4 font-semibold text-brand-blue font-content ">
                        <li className='mr-6 capitalize'>
                            <Link to='/home'>Home</Link>
                        </li>
                        <li className='mr-6 capitalize'>
                            <Link to='/about'>About</Link>
                        </li>
                        {
                            currentUser ?
                                <Profile user={currentUser} />
                                :
                                <li className='mr-6 capitalize'>
                                    <Link to='/login'>Login</Link>
                                </li>
                        }

                    </ul>
                    <div className="nav_mobile flex items-center justify-center sm:hidden">
                        {/* User Profile Image  */}
                        {currentUser && <Profile user={currentUser} />}
                        <button
                            className="btn btn-ghost p-1 hover:bg-transparent text-lg"
                            onClick={() => setisActiveMoblie(!isActiveMoblie)}
                        >
                            <BsJustifyRight className='text-brand-blue' />
                        </button>
                    </div>
                    {
                        isActiveMoblie && <MobileMenu menuStatus={{ isActiveMoblie, setisActiveMoblie }} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Header