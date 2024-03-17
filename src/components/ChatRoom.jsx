import React from 'react'
import ChatBox from './ChatBox'
import SendMessage from './SendMessage'

const ChatRoom = ({messages,onformSubmission}) => {
  return (
    <div className=' bg-gray-200'>
        <ChatBox messages={messages} />
        <SendMessage handleSubmission={onformSubmission} />
    </div>
  )
}

export default ChatRoom