import React from 'react'
import ChatBox from './ChatBox'
import SendMessage from './SendMessage'

const ChatRoom = ({messages,onformSubmission}) => {
  return (
    <div className=' '>
        <ChatBox messages={messages} />
        <SendMessage handleSubmission={onformSubmission} />
    </div>
  )
}

export default ChatRoom