import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';



const Contact = ({ listing }) => {
    const [ownerInfo, setOwnerInfo] = useState({})
    const [loading, setLoading] = useState(false)
    // =====Load Property Owner Data =====//
    useEffect(() => {
        (async () => {
            setLoading(true)
            const res = await fetch(`/api/users/${listing.userRef}`)
            const json = await res.json();
            if (json.success === false) {
                setLoading(false)
            }
            else {
                setOwnerInfo(json)
                setLoading(false)
            }
        })()
    }, [])

    console.log(ownerInfo);


    return (
        <div className="contact_component">
            <textarea
                id='message'
                type="text"
                placeholder='Write your message...'
                name='message'
                className='form_input border-[1px] border-gray-400  focus:border-brand-blue h-44 rounded-md placeholder:text-sm mt-3'
            />
            <Link>
                <button
                    className='w-full px-2 py-3 text-lg font-heading text-white bg-brand-blue'>
                    Send Messages
                </button>
            </Link>
        </div>
    )
}

export default Contact