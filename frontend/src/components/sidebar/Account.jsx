import avatar from '../../avatar.jpg';

function Account() {
    return (
      <div className="my-account">
        <div className="image">
            <img src={avatar} alt="avatar"/>
            <i className="fa fa-circle online"></i>
        </div>
        <div className="name">
            <span>Сивуха Егор</span>
            <i className="fa fa-angle-down"></i>
            <span className="availability">В сети</span>
        </div>
      </div>
    );
  }
  
export default Account;