import { React, useState } from 'react'
import { BsJustifyRight, BsSearch } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import MobileMenu from './mobileMenu'





const Header = () => {
    const [isActiveMoblie, setisActiveMoblie] = useState(false)

    return (
        <div className="navbar pt-3 pb-3 bg-slate-300 flex items-center justify-between shadow-md">
            <div className="contaier w-full max-w-7xl mx-auto">
                <div className="w-full max-w-[100px] sm:max-w-[200px]">
                    <h1 className="font-blach sm:text-xl text-sm text-left hover:bg-transparent uppercase text-brand-blue tracking-tighter w-full font-heading ">
                        <span>Property Sell</span>
                    </h1>
                </div>
                <div className="form_contaienr w-full">
                    <div className="form-control w-full max-w-[170px]   sm:max-w-sm  flex flex-row mx-auto items-center justify-center relative">
                        <input type="text" placeholder="Search..." className="search" />
                        <button className='search_btn'>
                            <i className='text-center text-white font-bold'><BsSearch /></i>
                        </button>
                    </div>

                </div>

                {/*========= After login ======== */}
                {/* <div className="flex-none gap-2">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-7 rounded-full">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div> */}

                <div className="">
                    <ul className=" hidden sm:ml-5 sm:flex items-center justify-end  pr-4 font-semibold text-brand-blue font-content ">

                        <li className='mr-6 capitalize'>
                            <Link to='/home'>Home</Link>
                        </li>
                        <li className='mr-6 capitalize'>
                            <Link to='/about'>About</Link>
                        </li>
                        <li className='mr-6 capitalize'>
                            <Link to='/login'>Login</Link>
                        </li>
                    </ul>
                    <div className="nav_mobile sm:hidden">
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