import React from 'react'
import { useAuthContext} from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation';
import extractTime from '../../utils/extractTime';

const Message = ({message}) => {
  
    const {authUser} = useAuthContext();
     const {selectedConversation} = useConversation();
     const fromMe = message.senderId === authUser._id;
    //  chat-end and chat-start comes from daisy ui
     const chatClassName = fromMe ? 'chat-end' : 'chat-start';
     const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
     const bubbleBgColor =fromMe ? 'bg-blue-500' : "";
        const p=10;
     const formattedTime = extractTime(message.createdAt);
     const shakeClass = message.shouldShake ? "shake" : "";
  return (
    <div className= {`chat ${chatClassName}`}>
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img src={profilePic} 
                  alt="profilepic" 
                 />
            </div>
        </div>
        <div className={`chat-bubble text-white pb-2 ${bubbleBgColor} ${shakeClass} `}>{message.message}</div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center text-gray-50">{formattedTime}</div>
    </div>
  )
}

export default Message