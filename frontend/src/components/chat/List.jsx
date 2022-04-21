import React from 'react'

export default function List(props) {
  const fullName = (props) => {
    return props.name + ' ' + props.lastName;
  }
  return (
    <li className="me">
        <div className="name">
            <span>{fullName(props)}</span>
        </div>
        <div className="message">
            <p>{props.message}</p>
            <span className="msg-time">5:00 pm</span>
        </div>
    </li>
  )
}
