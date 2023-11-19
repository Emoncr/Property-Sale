import React, { useEffect, useState } from 'react'
import { BsSend } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



const Contact = ({ listing }) => {
    const { currentUser } = useSelector(state => state.user)
    const [ownerInfo, setOwnerInfo] = useState({})
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState(null)
    const [responseMsg, setResponseMsg] = useState("")
    const [sending, setSending] = useState(false)
    const [messageSendSuccess, setMessageSendSuccess] = useState(false)

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


    const handleSendMsg = async () => {
        const conversationApiData = {
            creatorId: currentUser._id,
            participantId: listing.userRef,
            chatPartner: ownerInfo,
            chatCreator: currentUser 
        }

        try {
            setSending(true)
            const res = await fetch("/api/conversation/create", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(conversationApiData)
            });
            const json = await res.json();
            //===checking reqest success or not ===//
            if (json.success === false) {
                setResponseMsg("Message sending failed. Try again!")
                setSending(false)
            }
            else {
                // IF Conversation created successfully
                const resMsg = await fetch("/api/message/create", {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(
                        {
                            sender: currentUser._id,
                            receiver: listing.userRef,
                            message: message,
                        }
                    )
                });
                const msgJson = await resMsg.json();
                //===checking Message request success or not ===//
                if (msgJson.success === false) {
                    setResponseMsg("Message sending failed. Try again!")
                    setSending(false)
                }
                else {
                    setResponseMsg(msgJson)
                    setMessageSendSuccess(true)
                    setSending(false)
                }
            }
        } catch (error) {
            console.log(error);
            setSending(false)
        }
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
                        {
                            sending ?
                                <div >
                                    <p className=' text-amber-600 font-heading text-left
                                        flex items-center justify-start mt-5'>
                                        <BsSend className='mr-2' />Sending...
                                    </p>

                                </div>
                                :
                                <div className="contact_form mt-5">
                                    {
                                        messageSendSuccess
                                            ?
                                            <div>
                                                <p className=' text-green-600 font-heading text-left
                                        '>{responseMsg}</p>
                                                <Link to={"/message"}>
                                                    <button className='text-sm font-heading mt-2 px-5 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 duration-300'>
                                                        Goto Messanger</button>
                                                </Link>
                                            </div>
                                            :
                                            <>
                                                <textarea
                                                    id='message'
                                                    type="text"
                                                    placeholder='Write your message...'
                                                    name='message'
                                                    className='form_input border-[1px] border-gray-400  focus:border-brand-blue h-44 rounded-md placeholder:text-sm mt-3'
                                                    onChange={handleChange}
                                                />
                                                <button
                                                    disabled={!message}
                                                    onClick={handleSendMsg}
                                                    className='w-full px-2 py-3 text-lg font-heading text-white bg-brand-blue disabled:bg-brand-blue/60'>
                                                    Send Messages
                                                </button>
                                                <p className=' text-red-600 font-heading text-left
                                        '>{responseMsg}</p>
                                            </>
                                    }
                                </div>

                        }
                    </div>
            }
        </>
    )
}

export default Contact