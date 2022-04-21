import React, {useContext} from 'react';
import List from './List';
import InputContainer from './InputContainer';
import context from '../../context';

export default function ChatContainer() {

  const state = {
    0:{"id": 1, "name" : "Иван", "lastName": "Иванов", "message": "Hey, do you like the new interface? It's done with Font Awesome."},
    1:{"id": 2, "name" : "Дмитрий", "lastName": "Дмитриев", "message": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A voluptatibus numquam blanditiis excepturi iusto, odio tenetur possimus maxime nemo labore, repudiandae repellendus dolor non fuga nesciunt cumque alias aut itaque."},
    2:{"id": 3, "name" : "Вячеслав", "lastName": "Вячеславов", "message": "Че как?"},
    3:{"id": 4, "name" : "Глеб", "lastName": "Глебов", "message": "Hello World!"},
  }

  const { chatId } = useContext(context);  

  const list = Object.values(state).map(i => {
    if (i.id === chatId){
      return <List key={i.id} name={i.name} lastName={i.lastName} message={i.message}/>
    }
  })

  if (chatId){
    return (
      <div className='chat-area'>
        <div>
          <div className="title"><b>Переписка</b><i className="fa fa-search"></i></div>
          <div className="chat-list">
            <ul>
              {list}
            </ul>
          </div>
        </div>
        <InputContainer />
    </div>
    )
  } else {
    return (
      <div className='chat-area'>
      </div>
    )
  }
}
