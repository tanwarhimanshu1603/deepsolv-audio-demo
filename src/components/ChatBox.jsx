import React from 'react'
import Message from './Message'

const ChatBox = ({messages}) => {
    
  return (
    <div className="pb-44 pt-20 containerWrap">
        {
            messages.map(msg => <Message key={msg.id} sender={msg.sender} data={msg.data} />) 
        }
        
    </div>
  )
}

export default ChatBox