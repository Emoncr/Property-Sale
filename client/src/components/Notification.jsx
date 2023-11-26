import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { io } from "socket.io-client"

export const socket = io("http://localhost:3000")


const Notification = () => {
    const [notify, setNotify] = useState({})
    const { currentUser } = useSelector(state => state.user)
    socket.on(`${currentUser._id}`, (data) => {
        console.log("notify", data);
        setNotify(data)
    })

    return (
        <>
            {/* <h1>Notify message:{notify.message}</h1> */}
        </>
    )
}

export default Notification