import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { io } from "socket.io-client"
import { setNotification } from "../redux/notifications/notificationSlice"
export const socket = io("http://localhost:3000")


const SocketConnection = () => {
    const { currentUser } = useSelector(state => state.user)

    const dispatch = useDispatch();



    //======= Getting Unseened messages from DB ========//
    useEffect(() => {
        (async () => {
            try {
                const unseenNotificaton = await fetch(`/api/notification/${currentUser._id}`)
                const res = await unseenNotificaton.json();
                if (res.success !== false) {
                    console.log(res);
                    dispatch(setNotification(res))
                }
            } catch (error) {
                console.log(error);
            }
        })()
    }, [])





    return (
        <> </>
    )
}

export default SocketConnection