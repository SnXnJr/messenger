import React from 'react';
import ChatList from './ChatList';
import InputContainer from './InputContainer';

export default function ChatContainer() {
  return (
    <div className='chat-area'>
        <ChatList />
        <InputContainer />
    </div>
  )
}
