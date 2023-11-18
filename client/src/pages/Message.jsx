import React, { useEffect, useState } from 'react'
import { io } from "socket.io-client"
import Chat from '../components/Chat';
import { useSelector } from 'react-redux';
import Conversations from '../components/Conversations';





const Message = () => {
    const { currentUser } = useSelector(state => state.user)


    const [conversations, setConversation] = useState([])
    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`/api/conversation/${currentUser._id}`)
                const getConversations = await res.json();
                console.log(getConversations);
                if (getConversations.success === false) {
                    console.log(getConversations.message);
                }
                else {
                    setConversation(getConversations)
                }
            } catch (error) {
                console.log(error);
            }
        })()
    }, [])


    return (
        <>
            <section className="main_container">
                <div className="chats_container custom_scrollbar grid grid-cols-12 ">
                    <div className="chat_people_container bg-white col-span-3  py-4 sm:py-5 flex sm:items-start items-center justify-start flex-col gap-2 overflow-y-scroll ">

                        <h3 className='font-heading text-black px-2 mb-3 sm:px-3 text-sm sm:text-3xl'>Chats...</h3>
                        {
                            conversations && conversations.map((conversation, index) =>
                                <Conversations conversationInfo={conversation} key={index} />
                            )
                        }


                    </div>

                    <Chat />

                </div>
            </section>


        </>
    )
}

export default Message