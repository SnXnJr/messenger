import React, {useState} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom"

export default function Auth() {

    const DOMAIN = 'http://127.0.0.1:8000';

    const [name, setName] = useState('');
    const [password, setpassword] = useState('');

    const inputChange = (e) => {
        if (e.currentTarget.name === "name"){
            setName(e.currentTarget.value);
        } else if (e.currentTarget.name === "password") {
            setpassword(e.currentTarget.value);
        }
    }
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(name + ";" + password);

        axios.get(`${DOMAIN}/users`, 
        {
            'name': name,
            'password': password
        })
            .then(res => {
                console.log(res);
            })
        
    }

  return (
    <div className='form'>
        <h1>Авторизация</h1>
        <form onSubmit={onSubmit}>
            <label>
                Имя
                <input type="text" name='name' onChange={inputChange} value={name}/>
            </label>
            <label>
                Пароль
                <input type="password" name="password" onChange={inputChange} value={password} />
            </label>
            <button type="submit">Войти</button>
        </form>
        <Link className='link' to="register">Регистрация</Link>
    </div>
  )
}
