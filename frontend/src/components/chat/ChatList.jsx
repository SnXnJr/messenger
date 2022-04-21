import React from 'react'
import List from './List'

export default function ChatList() {
  return (
    <div>
        <div className="title"><b>Переписка</b><i className="fa fa-search"></i></div>
        <div className="chat-list">
            <ul>
                <List />
            </ul>
        </div>
    </div>
  )
}
