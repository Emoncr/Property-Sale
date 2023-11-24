import React from 'react'
import { useSelector } from 'react-redux'

const Conversations = ({ conversationInfo }) => {
    const { conversation,
        trackConversation,
        setTrackConversation,
        setSocketMessages,
    } = conversationInfo

    const { currentUser } = useSelector(state => state.user)




    return (
        <>
            {
                conversation.participantId && conversation.participantId === currentUser._id
                    ?
                    // When current user is in participent role 
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
                            setSocketMessages([]))
                        }
                        className={`chat_user flex items-center justify-center sm:justify-start sm:flex-row sm:gap-4 hover:bg-brand-blue/90 active:bg-brand-blue  group w-full p-2 sm:p-3 duration-300  cursor-pointer ${trackConversation.conversationActive === conversation.chatCreator._id ? "bg-brand-blue text-white" : "bg-gray-200 text-brand-blue"}`}
                    >
                        <img
                            className='h-8 w-8 sm:h-12 sm:w-12 rounded-full border-2 border-brand-blue duration-400 ease-in-out'
                            src={conversation.chatCreator.avatar}
                            alt="user image" />
                        <p className='hidden sm:block  font-semibold font-content text-sm truncate duration-400 ease-in-out group-hover:text-white'>{conversation.chatCreator.username}</p>
                    </div>
                    :


                    // When current user is in creator role 
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
                            setSocketMessages([])
                        )
                        }
                        className={`chat_user flex items-center justify-center sm:justify-start sm:flex-row sm:gap-4 hover:bg-brand-blue/90 active:bg-brand-blue group w-full p-2 sm:p-3 duration-300  cursor-pointer
                        ${trackConversation.conversationActive === conversation.chatPartner._id ? "bg-brand-blue text-white" : "bg-gray-200 text-brand-blue"}
                        `}
                    >
                        <img
                            className='h-8 w-8 sm:h-12 sm:w-12 rounded-full border-2 border-brand-blue duration-400 ease-in-out'
                            src={conversation.chatPartner.avatar}
                            alt="user image" />
                        <p className='hidden sm:block  font-semibold font-content text-sm truncate duration-400 ease-in-out group-hover:text-white '>{conversation.chatPartner.username}</p>
                    </div>
            }

        </>
    )
}

export default Conversations