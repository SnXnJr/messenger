import React, { useContext } from 'react'
import context from '../../context';

function Users(props) {
  const fullName = (props) => {
    return props.name + ' ' + props.lastName;
  }

  const { setChatId } = useContext(context);

  const onClickChat = () => {
    setChatId(props.id);
  }


  return (
      <li>
        <button className='link' onClick={onClickChat}>
            <i className="fa fa-circle-o online"></i>
            <span>{fullName(props)}</span>
        </button>
      </li>
  );
}
  
export default Users;