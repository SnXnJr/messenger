import React, {useState} from 'react'
import { Link } from "react-router-dom"

export default function Register() {

  const [name, setName] = useState('');
  const [password, setpassword] = useState('');
  const [repeatPassword, setrepeatPassword] = useState('');

  const inputChange = (e) => {
      if (e.currentTarget.name === "name"){
          setName(e.currentTarget.value);
      } else if (e.currentTarget.name === "password") {
          setpassword(e.currentTarget.value);
      } else if (e.currentTarget.name === 'repeatPassword') {
        setrepeatPassword(e.currentTarget.value);
      }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(name + ";" + password);
    
  }

  return (
    <div className='form'>
        <h1>Регистрация</h1>
        <form onSubmit={onSubmit}>
            <label>
                Имя
                <input type="text" name='name' onChange={inputChange} value={name}/>
            </label>
            <label>
                Пароль
                <input type="password" name="password" onChange={inputChange} value={password} />
            </label>
            <label>
                Повторите пароль
                <input type="password" name="repeatPassword" onChange={inputChange} value={repeatPassword} />
            </label>
            <button type="submit">Зарегистрироваться</button>
        </form>
        <Link className='link' to="/">Вход</Link>
    </div>
  )
}
