import React, { useEffect, useState } from 'react'
import { io } from "socket.io-client"
import Chat from '../components/Chat';
import { useSelector } from 'react-redux';





const Message = () => {
    const { currentUser } = useSelector(state => state.user)


    const [conversations, setConversation] = useState([])
    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`/api/conversation/${currentUser._id}`)
                const getJson = await res.json();
                console.log(getJson);
                setConversation(getJson)
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
                            conversations && conversations.map(conversation =>
                                <div className="chat_user flex items-center justify-center sm:justify-start sm:flex-row sm:gap-4 hover:bg-brand-blue/70 bg-gray-200 group w-full p-2 sm:p-3 duration-300  cursor-pointer">
                                    <img
                                        className='h-8 w-8 sm:h-12 sm:w-12 rounded-full border-2 border-brand-blue duration-400 ease-in-out'
                                        src="https://lh3.googleusercontent.com/a/ACg8ocLrm3vLXH0YaepS5lAPDLeQYh6emkaUGtXfRoH6cwPfUCE=s96-c"
                                        alt="user image" />
                                    <p className='hidden sm:block text-brand-blue font-semibold font-content text-sm truncate duration-400 ease-in-out group-hover:text-white'>Biplob hasan Emon</p>

                                </div>
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