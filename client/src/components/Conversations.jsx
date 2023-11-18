import React from 'react'
import { useSelector } from 'react-redux'

const Conversations = ({ conversationInfo }) => {
    const { currentUser } = useSelector(state => state.user)
    return (
        <>
            {
                conversationInfo.participantId && conversationInfo.participantId === currentUser._id
                    ?
                    // When current user is in participent role 
                    <div className="chat_user flex items-center justify-center sm:justify-start sm:flex-row sm:gap-4 hover:bg-brand-blue/70 bg-gray-200 group w-full p-2 sm:p-3 duration-300  cursor-pointer">
                        <img
                            className='h-8 w-8 sm:h-12 sm:w-12 rounded-full border-2 border-brand-blue duration-400 ease-in-out'
                            src={conversationInfo.chatCreator.avatar}
                            alt="user image" />
                        <p className='hidden sm:block text-brand-blue font-semibold font-content text-sm truncate duration-400 ease-in-out group-hover:text-white'>{conversationInfo.chatCreator.username}</p>
                    </div>
                    :

                    // When current user is in creator role 
                    <div className="chat_user flex items-center justify-center sm:justify-start sm:flex-row sm:gap-4 hover:bg-brand-blue/70 bg-gray-200 group w-full p-2 sm:p-3 duration-300  cursor-pointer">
                        <img
                            className='h-8 w-8 sm:h-12 sm:w-12 rounded-full border-2 border-brand-blue duration-400 ease-in-out'
                            src={conversationInfo.chatPartner.avatar}
                            alt="user image" />
                        <p className='hidden sm:block text-brand-blue font-semibold font-content text-sm truncate duration-400 ease-in-out group-hover:text-white'>{conversationInfo.chatPartner.username}</p>
                    </div>
            }


        </>
    )
}

export default Conversations