import React, { useState } from 'react'

export default function Input() {

  const [message, setMessage] = useState('');

  const onChangeMessage = (e) => setMessage(e.currentTarget.value);

  console.log(message);

  return (
    <div className="input-wrapper">
        <input type="text" onChange={onChangeMessage} value={message} />
    </div>
  )
}
