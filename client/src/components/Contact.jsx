import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';



const Contact = ({ listing }) => {
    const [ownerInfo, setOwnerInfo] = useState({})
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')


    
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


    const handleChange = (e) => {
        setMessage(e.target.value)
    }

    return (
        <>
            {
                loading
                    ?
                    "Loading..."
                    :
                    <div className="contact_component">

                        <div className="property_owner mt-10">
                            <div className="image_container flex items-center justify-start gap-2">
                                <img
                                    src={ownerInfo.avatar}
                                    alt="Property Owner"
                                    className='h-16 w-16 rounded-full border-[1px] shadow-lg border-brand-blue'
                                />
                                <div className="tittle">
                                    <h3 className='text-lg font-heading capitalize truncate'>{ownerInfo.username}</h3>
                                    <p className='font-content font-bold ,text-sm text-gray-500'>Property Owner</p>
                                </div>
                            </div>
                        </div>
                        <div className="contact_form mt-5">
                            <textarea
                                id='message'
                                type="text"
                                placeholder='Write your message...'
                                name='message'
                                className='form_input border-[1px] border-gray-400  focus:border-brand-blue h-44 rounded-md placeholder:text-sm mt-3'
                                onChange={handleChange}
                            />


                            <Link to={`mailto:${ownerInfo.email}?subject=Regarding ${listing.title}&body=${message}`}>
                                <button
                                    className='w-full px-2 py-3 text-lg font-heading text-white bg-brand-blue'>
                                    Send Messages
                                </button>
                            </Link>
                        </div>
                    </div>
            }
        </>
    )
}

export default Contact