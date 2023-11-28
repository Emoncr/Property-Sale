import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { socket } from './SocketConnection'

const Conversations = ({ conversationInfo }) => {
    const [notification, setNotification] = useState([])

    const { conversation,
        trackConversation,
        setTrackConversation,
        setSocketMessages,
    } = conversationInfo

    const { currentUser } = useSelector(state => state.user)




    //======== Received Notification From socket Server ========//
    socket.on(`${currentUser?._id}`, (data) => {
        if (trackConversation.conversationActive === data.from) {
            const restNotification = notification.filter(notify => notify.chatId === conversation._id);
            setNotification(restNotification)
        } else {
            setNotification([...notification, data]);
        }
    })

    const isNotify = notification?.some(notify => notify.chatId === conversation._id);



    const handleNotificationClick = (conversationId) => {
        const restNotification = notification.filter(notify => notify.chatId !== conversationId);
        setNotification(restNotification)
    }


    return (
        <>
            {
                conversation.participantId && conversation.participantId === currentUser._id
                    ?
                    // When current user is in participent role 
                    <>
                        <div
                            onClick={() => (
                                setTrackConversation(
                                    {
                                        ...trackConversation,
                                        conversationActive: conversation.chatCreator._id,
                                        sender: conversation.chatPartner._id,
                                        receiver: conversation.chatCreator._id,
                                        conversation,
                                        chatId: conversation._id

                                    }
                                ),
                                setSocketMessages([]),
                                handleNotificationClick(conversation._id)
                            )
                            }
                            className={`chat_user flex items-center justify-center sm:justify-start sm:flex-row sm:gap-4 hover:bg-brand-blue/90 active:bg-brand-blue  group w-full p-2 sm:p-3 gap-1 duration-300  cursor-pointer ${trackConversation.conversationActive === conversation.chatCreator._id ? "bg-brand-blue text-white" : "bg-gray-200 text-brand-blue"}`}
                        >
                            <div className='relative rounded-full'>
                                <img
                                    className='h-8 w-8 sm:h-12 sm:w-12 rounded-full border-2 border-brand-blue duration-400 ease-in-out'
                                    src={conversation.chatCreator.avatar}
                                    alt="user image" />
                                <div className='absolute h-3 w-3 bottom-0 right-0 rounded-full bg-green-600 border-[.1px] border-black'>
                                </div>
                            </div>
                            <p className='hidden sm:block  font-semibold font-content text-sm truncate duration-400 ease-in-out group-hover:text-white'>{conversation.chatCreator.username}</p>
                            {isNotify && <p className=' hidden md:block font-heading px-2 py-[2px] rounded-md capitalize  text-xs text-white bg-red-600'>new!</p>}

                            {isNotify && <p className='text-red-600 md:hidden font-heading  rounded-md capitalize  text-lg '>!</p>}
                        </div>
                    </>
                    :

                    // When current user is in creator role 
                    <>
                        <div
                            onClick={() => (
                                setTrackConversation({
                                    ...trackConversation,
                                    conversationActive: conversation.chatPartner._id,
                                    sender: conversation.chatCreator._id,
                                    receiver: conversation.chatPartner._id,
                                    conversation,
                                    chatId: conversation._id
                                }),
                                setSocketMessages([]),
                                handleNotificationClick(conversation._id)
                            )
                            }
                            className={`chat_user flex items-center justify-center sm:justify-start sm:flex-row sm:gap-4 hover:bg-brand-blue/90 active:bg-brand-blue group w-full p-2 sm:p-3 gap-1 duration-300  cursor-pointer 
                        ${trackConversation.conversationActive === conversation.chatPartner._id ? "bg-brand-blue text-white" : "bg-gray-200 text-brand-blue"}
                        `}
                        >
                            <div className='relative rounded-full'>
                                <img
                                    className='h-8 w-8 sm:h-12 sm:w-12 rounded-full border-2 border-brand-blue duration-400 ease-in-out '
                                    src={conversation.chatPartner.avatar}
                                    alt="user image"
                                />
                                <div className='absolute h-3 w-3 bottom-0 right-0 rounded-full bg-green-600 border-[.1px] border-black'></div>
                            </div>

                            <p className='hidden sm:block  font-semibold font-content text-sm truncate duration-400 ease-in-out group-hover:text-white '>{conversation.chatPartner.username}</p>
                            {isNotify && <p className='bg-red-600 hidden md:block font-heading px-2 py-[2px] rounded-md capitalize  text-xs text-white'>new!</p>}

                            {isNotify && <p className='text-red-600 md:hidden font-heading  rounded-md capitalize  text-lg '>!</p>}
                        </div>

                    </>
            }

        </>
    )
}

export default Conversations