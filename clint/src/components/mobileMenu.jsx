import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom'
const MobileMenu = ({ menuStatus }) => {
    const { isActiveMoblie, setisActiveMoblie } = menuStatus;
    return (
        <menu className='absolute right-0 bottom-0 bg-slate-300 h-full p-3 text-brand-blue font-semibold  w-full max-w-[150px]'>
            <div className="crossBtn">
                <button onClick={() => setisActiveMoblie(!isActiveMoblie)}>
                    <RxCross2 className='text-brand-blue font-bold text-xl' />
                </button>
            </div>
            <ul className='flex items-center justify-center flex-col '>
                <Link path='/home'>Home</Link>
                <Link path='/about'>About</Link>
                <Link path='/login'>Login</Link>
            </ul>
        </menu>
    )
}

export default MobileMenu