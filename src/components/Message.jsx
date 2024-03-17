import React from 'react'
// import logo from '../assets/logo.png'
import photo from '../assets/photo.jpg'

const Message = ({sender,data}) => {
  return (
    <div className=''>
      <div className={`chat ${sender === 'Human' ? "chat-end" : "chat-start"}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src={photo} alt='avatar' />
          </div>
        </div>
        <div className="chat-header">
          {sender}
        </div>
        <div className="chat-bubble bg-gray-800 text-gray-100">{data}</div>
      </div>
    </div>
  )
}

export default Message