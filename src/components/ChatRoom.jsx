import React from 'react'
import ChatBox from './ChatBox'
import SendMessage from './SendMessage'

const ChatRoom = ({messages,onformSubmission,loader}) => {
  return (
    <div>
        <ChatBox messages={messages} loader={loader}/>
        <SendMessage handleSubmission={onformSubmission} />
    </div>
  )
}

export default ChatRoom