import React from 'react'
import { io } from "socket.io-client"
import { BsFillSendFill, BsImage } from "react-icons/bs";

const server = io("http://localhost:3000/")

const Message = () => {
    server.on("message", "This is message")
    server.emit("hello", "This message is from emon");



    return (
        <>
            <section className="main_container">
                <div className="chats_container custom_scrollbar grid grid-cols-12 ">
                    <div className="chat_people_container bg-white col-span-3  py-4 sm:py-5 flex sm:items-start items-center justify-start flex-col gap-2 overflow-y-scroll ">

                        <h3 className='font-heading text-black px-2 mb-3 sm:px-3 text-sm sm:text-3xl'>Chats...</h3>










                        <div className="chat_user flex items-center justify-center sm:justify-start sm:flex-row sm:gap-4 hover:bg-brand-blue/70 bg-gray-200 group w-full p-2 sm:p-3 duration-300  cursor-pointer">
                            <img
                                className='h-8 w-8 sm:h-12 sm:w-12 rounded-full border-2 border-brand-blue duration-400 ease-in-out'
                                src="https://lh3.googleusercontent.com/a/ACg8ocLrm3vLXH0YaepS5lAPDLeQYh6emkaUGtXfRoH6cwPfUCE=s96-c"
                                alt="user image" />
                            <p className='hidden sm:block text-brand-blue font-semibold font-content text-sm truncate duration-400 ease-in-out group-hover:text-white'>Biplob hasan Emon</p>

                        </div>

                        <div className="chat_user flex items-center justify-center sm:justify-start sm:flex-row sm:gap-4 hover:bg-brand-blue/70 bg-gray-200 group w-full p-2 sm:p-3 duration-300  cursor-pointer">
                            <img
                                className='h-8 w-8 sm:h-12 sm:w-12 rounded-full border-2 border-brand-blue duration-400 ease-in-out'
                                src="https://lh3.googleusercontent.com/a/ACg8ocLrm3vLXH0YaepS5lAPDLeQYh6emkaUGtXfRoH6cwPfUCE=s96-c"
                                alt="user image" />
                            <p className='hidden sm:block text-brand-blue font-semibold font-content text-sm truncate duration-400 ease-in-out group-hover:text-white'>Biplob hasan Emon</p>

                        </div>

                        <div className="chat_user flex items-center justify-center sm:justify-start sm:flex-row sm:gap-4 hover:bg-brand-blue/70 bg-gray-200 group w-full p-2 sm:p-3 duration-300  cursor-pointer">
                            <img
                                className='h-8 w-8 sm:h-12 sm:w-12 rounded-full border-2 border-brand-blue duration-400 ease-in-out'
                                src="https://lh3.googleusercontent.com/a/ACg8ocLrm3vLXH0YaepS5lAPDLeQYh6emkaUGtXfRoH6cwPfUCE=s96-c"
                                alt="user image" />
                            <p className='hidden sm:block text-brand-blue font-semibold font-content text-sm truncate duration-400 ease-in-out group-hover:text-white'>Biplob hasan Emon</p>

                        </div>

                        <div className="chat_user flex items-center justify-center sm:justify-start sm:flex-row sm:gap-4 hover:bg-brand-blue/70 bg-gray-200 group w-full p-2 sm:p-3 duration-300  cursor-pointer">
                            <img
                                className='h-8 w-8 sm:h-12 sm:w-12 rounded-full border-2 border-brand-blue duration-400 ease-in-out'
                                src="https://lh3.googleusercontent.com/a/ACg8ocLrm3vLXH0YaepS5lAPDLeQYh6emkaUGtXfRoH6cwPfUCE=s96-c"
                                alt="user image" />
                            <p className='hidden sm:block text-brand-blue font-semibold font-content text-sm truncate duration-400 ease-in-out group-hover:text-white'>Biplob hasan Emon</p>

                        </div>




























                    </div>









                    <div className="  conversation_container col-span-9 ">
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
                    </div>
                </div>
            </section>


        </>
    )
}

export default Message