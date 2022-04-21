import Account from "./Account";
import Users from "./Users";

function Sidebar() {

    const state = {
        0:{"id": 1, "name" : "Иван", "lastName": "Иванов"},
        1:{"id": 2, "name" : "Дмитрий", "lastName": "Дмитриев"},
        2:{"id": 3, "name" : "Вячеслав", "lastName": "Вячеславов"},
        3:{"id": 4, "name" : "Глеб", "lastName": "Глебов"},
    }


    const userList = Object.values(state).map(e => <Users key={e.id} id={e.id} name={e.name} lastName={e.lastName}/> )

    return (
      <div className="conversation-list">
        <ul>
          {userList}
        </ul>
        <Account />
      </div>
    );
  }
  
export default Sidebar;