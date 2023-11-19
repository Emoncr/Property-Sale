import React, { useEffect, useState } from 'react'
import { BsFillSendFill, BsImage } from "react-icons/bs";



const Chat = ({ conversationInfo }) => {
    const [messageText, setMessageText] = useState([])

    const { trackConversation, setTrackConversation } = conversationInfo;
    console.log(trackConversation);

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`/api/message?sender=${trackConversation.sender}&receiver=${trackConversation.receiver}`)
                const getMessages = await res.json();
                console.log(getMessages);
                if (getMessages.success === false) {
                    console.log(getMessages.message);
                }
                else {
                    setMessageText(getMessages)
                }
            } catch (error) {
                console.log(error);
            }
        })()
    }, [trackConversation])


    console.log(messageText);

    return (
        <div className="conversation_container bg-white  ">
            <div className="chat_person_container  grid grid-cols-2 bg-white shadow-sm items-center px-5 py-3 border-b border-">
                <div className="chat_user flex items-center justify-center sm:justify-start sm:flex-row sm:gap-4 gap-1 duration-300    ">
                    <img
                        className='h-8 w-8 sm:h-10 sm:w-10 rounded-full border border-brand-blue'
                        src="https://lh3.googleusercontent.com/a/ACg8ocLrm3vLXH0YaepS5lAPDLeQYh6emkaUGtXfRoH6cwPfUCE=s96-c"
                        alt="user image" />
                    <p className=' sm:block text-black font-semibold font-heading text-sm truncate'>Biplob hasan Emon</p>

                </div>


                <div className="show_user_listing flex items-center justify-end">
                    <button className='font-heading  rounded-sm py-2 px-5 text-brand-blue'>
                        !
                    </button>
                </div>
            </div>



            <div className='textbar_message'>
                <div className="message_container flex items-end flex-col justify-end overflow-y-scroll px-5 py-0 ">
                    <h1 className='text-7xl'>hfhakh</h1>
                </div>


                <div className="textbar_container  w-full px-5 py-3 flex items-center gap-2">
                    <div className="attachment_container">
                        <BsImage />
                    </div>
                    <div className="input_container w-full">
                        <input type="text" placeholder="Aa" className="w-full px-4 py-1 rounded-full border  placeholder:font-content placeholder:text-sm caret-h-2  bg-[#F0F2F5] caret-brand-blue border-brand-blue focus:outline-none" />
                    </div>
                    <div className="send_btn ">
                        <button className='p-2 rounded-full hover:bg-gray-200 duration-300'>
                            <BsFillSendFill className='text-brand-blue' />
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Chat