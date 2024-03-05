import { useDispatch, useSelector } from 'react-redux'
import { signal } from '@preact/signals-react'
import { notifySignal } from './SocketConnection'
import { setNotification } from '../redux/notifications/notificationSlice'

export const activeChatId = signal({
    chatId: ""
})

const Conversations = ({ conversationInfo }) => {
    const { conversation,
        trackConversation,
        setTrackConversation,
    } = conversationInfo
    const dispatch = useDispatch();
    let notifications = notifySignal.value.notifications;

    const { currentUser } = useSelector(state => state.user)
    const { notificationsDB } = useSelector(state => state.notification)


    const isNotify = notificationsDB.some(notify => notify.chatId === conversation._id);

    const handleNotificationClick = (conversationId) => {
        const notificationIndex = notifications.some(notify => notify.chatId === conversationId);

        if (notificationIndex) {
            const restNotifications = notifications.filter(notify => notify.chatId !== conversationId)
            notifySignal.value.notifications = restNotifications;
            dispatch(setNotification(restNotifications));
        }
    };



    //===== Delete Notification From DB========//
    const notifyDeleteFromDB = async (notify_from) => {
        const isNotifyExistDB = notifications.some(notify => notify.from === notify_from);
        if (isNotifyExistDB) {
            try {
                const dltNotify = await fetch(`/api/notification/delete/${notify_from}`, {
                    method: 'DELETE'
                })
                const res = await dltNotify.json();
                if (res.success === false) {
                    console.log(res.error);
                }
            } catch (error) {
                console.log(error);
            }
        }
    }


    return (
        <>
            {
                conversation.participantId && conversation.participantId === currentUser._id
                    ?
                    // When current user is in participent role 
                    <>
                        <div
                            onClick={() => (

                                setTrackConversation(

                                    {
                                        ...trackConversation,
                                        conversationActive: conversation.chatCreator._id,
                                        sender: conversation.chatPartner._id,
                                        receiver: conversation.chatCreator._id,
                                        conversation,
                                        chatId: conversation._id

                                    }
                                ),
                                notifyDeleteFromDB(conversation.chatCreator._id),
                                handleNotificationClick(conversation._id),
                                activeChatId.value.chatId = conversation._id

                            )
                            }
                            className={`chat_user flex items-center justify-center sm:justify-start sm:flex-row sm:gap-4 hover:bg-brand-blue/90 active:bg-brand-blue  group w-full p-2 sm:p-3 gap-1 duration-300  cursor-pointer ${trackConversation.conversationActive === conversation.chatCreator._id ? "bg-brand-blue text-white" : "bg-gray-200 text-brand-blue"}`}
                        >
                            <div className='relative rounded-full'>
                                <img
                                    className='h-8 w-8 sm:h-12 sm:w-12 rounded-full border-2 border-brand-blue duration-400 ease-in-out'
                                    src={conversation.chatCreator.avatar}
                                    alt="user image" />
                                <div className='absolute h-3 w-3 bottom-0 right-0 rounded-full bg-green-600 border-[.1px] border-black'>
                                </div>
                            </div>
                            <p className='hidden sm:block  font-semibold font-content text-sm truncate duration-400 ease-in-out group-hover:text-white'>{conversation.chatCreator.username}</p>
                            {isNotify && <p className=' hidden md:block font-heading px-2 py-[2px] rounded-md capitalize  text-xs text-white bg-red-600'>new!</p>}

                            {isNotify && <p className='text-red-600 md:hidden font-heading  rounded-md capitalize  text-lg '>!</p>}
                        </div>
                    </>
                    :

                    // When current user is in creator role 
                    <>
                        <div
                            onClick={() => (
                                setTrackConversation({
                                    ...trackConversation,
                                    conversationActive: conversation.chatPartner._id,
                                    sender: conversation.chatCreator._id,
                                    receiver: conversation.chatPartner._id,
                                    conversation,
                                    chatId: conversation._id
                                }),
                                // setSocketMessages([]),
                                notifyDeleteFromDB(conversation.chatPartner._id),
                                handleNotificationClick(conversation._id),
                                activeChatId.value.chatId = conversation._id
                            )
                            }
                            className={`chat_user flex items-center justify-center sm:justify-start sm:flex-row sm:gap-4 hover:bg-brand-blue/90 active:bg-brand-blue group w-full p-2 sm:p-3 gap-1 duration-300  cursor-pointer 
                        ${trackConversation.conversationActive === conversation.chatPartner._id ? "bg-brand-blue text-white" : "bg-gray-200 text-brand-blue"}
                        `}
                        >
                            <div className='relative rounded-full'>
                                <img
                                    className='h-8 w-8 sm:h-12 sm:w-12 rounded-full border-2 border-brand-blue duration-400 ease-in-out '
                                    src={conversation.chatPartner.avatar}
                                    alt="user image"
                                />
                                <div className='absolute h-3 w-3 bottom-0 right-0 rounded-full bg-green-600 border-[.1px] border-black'></div>
                            </div>

                            <p className='hidden sm:block  font-semibold font-content text-sm truncate duration-400 ease-in-out group-hover:text-white '>{conversation.chatPartner.username}</p>
                            {isNotify && <p className='bg-red-600 hidden md:block font-heading px-2 py-[2px] rounded-md capitalize  text-xs text-white'>new!</p>}

                            {isNotify && <p className='text-red-600 md:hidden font-heading  rounded-md capitalize  text-lg '>!</p>}
                        </div>

                    </>
            }

        </>
    )
}

export default Conversations