import React from 'react'
import Message from './Message'
import Loader from './Loader'

const ChatBox = ({messages,loader}) => {
    
  return (
    <div className="pb-44 pt-20 containerWrap">
        {
            messages.map(msg => <Message key={msg.id} sender={msg.sender} data={msg.data} />) 
        }
        {
            loader && <Loader />
        }
        
    </div>
  )
}

export default ChatBox