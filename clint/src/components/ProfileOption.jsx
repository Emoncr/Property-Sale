import React from 'react'
import { Link } from 'react-router-dom'

const ProfileOption = ({ user }) => {


    return (
        <div className="flex-none gap-2">
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar hover:outline-0 hover:border-0">
                    <div className="w-7 rounded-full">
                        <img className='rounded-full h-8 w-8 object-cover' src={user.avatar} alt="profile image" />
                    </div>
                </label>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-md w-52 ">
                    <li>
                        <Link to={'profile'} className="justify-between">
                            Profile
                        </Link>
                    </li>
                    <li><Link>Settings</Link></li>
                    <li><Link>Logout</Link></li>
                </ul>
            </div>
        </div>
    )
};

export default ProfileOption;