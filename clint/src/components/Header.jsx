import { React, useState } from 'react'
import { BsJustifyRight, BsSearch } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import MobileMenu from './mobileMenu'
import { useDispatch, useSelector } from 'react-redux'
import Profile from './ProfileOption'
import { setSearchTermState } from '../redux/search/searchSlice'






const Header = () => {
    const [isActiveMoblie, setisActiveMoblie] = useState(false)
    const { currentUser } = useSelector((state) => state.user)
    const { searchTermState } = useSelector((state) => state.search)
    const [searchValue, setSearchValue] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/search`)
        setSearchValue("")
    }







    return (
        <>
            <div className="navbar pl-0 pr-0 pt-3 pb-3 bg-slate-300 flex items-center justify-between shadow-md">
                <div className="px-5 w-full !mx-auto grid grid-cols-12 gap-1">

                    {/* Logo container  */}
                    <div className="col-span-3 sm:col-span-4">

                        <h1 className="font-blach sm:text-xl text-sm text-left hover:bg-transparent uppercase text-brand-blue tracking-tighter w-full font-heading font-bold flex items-center justify-start">
                            <Link to={'/home'}>
                                <img className='w-8 h-8' src="https://img.icons8.com/sf-black-filled/64/313a67/home.png" alt="logo" />
                                <span className='hidden sm:block'>Property Sell</span>
                            </Link>
                        </h1>

                    </div>

                    {/* search Form  */}
                    <div className="col-span-6 sm:col-span-3  md:col-span-4">
                        <form onSubmit={handleSubmit}>
                            <div className="form-control w-full max-w-full   sm:max-w-sm  flex flex-row mx-auto items-center justify-center relative">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="search"
                                    onChange={(e) => {
                                        dispatch(setSearchTermState(e.target.value)),
                                            setSearchValue(e.target.value)
                                    }}
                                    value={searchValue}
                                />
                                <button type='submit' className='search_btn bg-brand-blue'>
                                    <i className='text-center text-white font-bold'><BsSearch /></i>
                                </button>
                            </div>
                        </form>
                    </div>

                    {/*========= when user login ======== */}
                    <div className="col-span-3 sm:col-span-5  md:col-span-4 flex items-center justify-end">
                        <ul className="hidden sm:ml-5 sm:flex items-center justify-end  pr-4 font-semibold text-brand-blue font-content ">
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
        </>

    )
}

export default Header