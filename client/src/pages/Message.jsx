import React, { useEffect, useState } from 'react'
import Chat from '../components/Chat';
import { useSelector } from 'react-redux';
import Conversations from '../components/Conversations';
import { socket } from '../components/SocketConnection';





const Message = () => {
    const { currentUser } = useSelector(state => state.user)
    const [conversations, setConversation] = useState([])
    const [socketMessages, setSocketMessages] = useState([])
    const [notification, setNotification] = useState([])
    const [trackConversation, setTrackConversation] = useState({
        sender: "",
        receiver: "",
        conversationActive: null,
    })



    // Load Current user Conversations
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


    // Checking Notification Logic

    const sendNotificationToDB = async (notifyInfo) => {
        try {
            const sendNotification = await fetch("/api/notification/create", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(
                    {
                        notification: [notifyInfo],
                        chatID: notifyInfo.chatId,
                        notify_from: notifyInfo.from,
                        notify_To: notifyInfo.to,
                    }
                )
            })
            const response = await sendNotification.json()
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }


    console.log(trackConversation.conversationActive);

    //======== Received Notification From socket Server ========//
    socket.on(`${currentUser?._id}`, (data) => {
        console.log("track", trackConversation.conversationActive);

        console.log("data from", data.from);
        if (trackConversation.conversationActive === data.from) {

            const restNotification = notification.filter(notify => notify.chatId === conversation._id);
            setNotification(restNotification)
        } else {
            setNotification([...notification, data]);
            // sendNotificationToDB(data)
        }
    })








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
                                            notification,
                                            setNotification,
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