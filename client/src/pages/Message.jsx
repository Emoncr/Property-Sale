import React, { useEffect, useState } from 'react'
import Chat from '../components/Chat';
import { useSelector } from 'react-redux';
import Conversations from '../components/Conversations';





const Message = () => {
    const { currentUser } = useSelector(state => state.user)
    const [conversations, setConversation] = useState([])
    const [socketMessages, setSocketMessages] = useState([])
    const [trackConversation, setTrackConversation] = useState({
        sender: "",
        receiver: "",
        conversationActive: null,
    })




    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`/api/conversation/${currentUser._id}`)
                const getConversations = await res.json();
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

                        <h3 className='font-heading  px-2 mb-3 sm:px-3 text-sm sm:text-3xl text-black'>Chats...</h3>
                        {
                            conversations && conversations.map((conversation, index) =>
                                <Conversations
                                    conversationInfo={
                                        {
                                            conversation,
                                            trackConversation,
                                            setTrackConversation,
                                            socketMessages,
                                            setSocketMessages,
                                        }
                                    } key={index}
                                />
                            )
                        }
                    </div>

                    {
                        trackConversation.conversationActive
                            ?
                            <div className="conversation_container col-span-9 ">
                                <Chat conversationInfo={{
                                    trackConversation,
                                    setTrackConversation,
                                    socketMessages,
                                    setSocketMessages,

                                }} />
                            </div>
                            :
                            <div className="conversation_container col-span-9 ">

                                <p className='mt-20 text-sm sm:text-2xl text-center font-heading '>No Conversation is Selected 	&#128580;</p>
                            </div>
                    }
                </div>
            </section>


        </>
    )
}

export default Message