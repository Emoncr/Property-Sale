import React  from 'react'
import { FaBookmark, FaHome,  FaSignInAlt, FaSignOutAlt, FaUser, FaUsers } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom'
import { signoutFailed, signoutSuccess } from '../redux/user/userSlice';
import { ToastContainer, toast } from 'react-toastify';
import { clearSavedListing } from '../redux/saveListing/saveListingSlice';

const MobileMenu = ({ menuStatus }) => {
    const { currentUser } = useSelector(state => state.user)
    const { setisActiveMoblie, isActiveMoblie } = menuStatus;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogOut = async () => {
        try {
            const res = await fetch('api/auth/signout');
            const data = await res.json();
            if (data.success === false) {
                useDispatch(signoutFailed(data.message))
                toast.error(data.message, {
                    autoClose: 2000,
                })
            }
            else {
                dispatch(signoutSuccess())
                dispatch(clearSavedListing())
            }
        } catch (error) {
            dispatch(signoutFailed(error.message))
            toast.error(error.message, {
                autoClose: 2000,
            })
        }
    }


    return (

        <menu
            className=' absolute  right-0  bg-white h-72 py-5 px-5 text-brand-blue font-semibold  w-full !z-50 shadow-lg shadow-brand-blue/40'
        >


            <ul className=' '>
                <li
                    onClick={() => {
                        navigate('/home'),
                            setisActiveMoblie(!isActiveMoblie)
                    }}
                    className='p-2 cursor-pointer rounded-sm mb-3  font-heading hover:bg-brand-blue/40 duration-300'
                >
                    <p className='flex items-center gap-2'>
                        <FaHome /> Home
                    </p>
                </li>
                {
                    currentUser && currentUser.email
                        ?
                        <>
                            <li
                                onClick={() => {
                                    navigate('/profile'),
                                        setisActiveMoblie(!isActiveMoblie)
                                }}

                                className='p-2 cursor-pointer rounded-sm mb-3  font-heading hover:bg-brand-blue/40 duration-300'>
                                <p to='/profile' className='flex items-center gap-2'>
                                    <FaUser className='text-green-600' /> Profile
                                </p>
                            </li>
                            <li
                                onClick={() => {
                                    navigate('/saved_listing'),
                                        setisActiveMoblie(!isActiveMoblie)
                                }}

                                className='p-2 cursor-pointer rounded-sm mb-3  font-heading hover:bg-brand-blue/40 duration-300'
                            >
                                <p to='/saved_listing' className='flex items-center gap-2'>
                                    <FaBookmark className='text-amber-600' /> Saved Listings
                                </p>
                            </li>
                            <li
                                onClick={handleLogOut}
                                className='p-2  rounded-sm mb-3  cursor-pointer font-heading hover:bg-brand-blue/40 duration-300'>
                                <p className='flex items-center gap-2'>
                                    <FaSignOutAlt className='text-red-500' /> Log Out
                                </p>
                            </li>
                        </>
                        :
                        <li
                            onClick={() => {
                                navigate('/login'),
                                    setisActiveMoblie(!isActiveMoblie)
                            }}
                            className='p-2  rounded-sm mb-3 cursor-pointer font-heading hover:bg-brand-blue/40 duration-300'>
                            <p to='/login' className='flex items-center gap-2'>
                                <FaSignInAlt className='text-green-600' /> Login
                            </p>
                        </li>
                }

            </ul>
            <ToastContainer />
        </menu>
    )
}

export default MobileMenu