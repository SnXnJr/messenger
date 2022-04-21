import React from 'react';
import Input from './Input';

export default function InputContainer() {
  return (
    <div className='input-area'>
        <Input />
        <input type="button" value="Ввод" className="send-btn"/>
    </div>
  )
}
