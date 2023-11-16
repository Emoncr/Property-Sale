import React from 'react'
import { io } from "socket.io-client"



const server = io("http://localhost:3000/")

const Message = () => {
    server.on("message", "This is message")
    server.emit("hello", "This message is from emon");



    return (
        <div>
            <h1>Hello this is from message</h1>
        </div>
    )
}

export default Message