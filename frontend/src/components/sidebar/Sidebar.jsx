import Account from "./Account";
import Users from "./Users";

function Sidebar() {
    return (
      <div className="conversation-list">
        <Users />
        <Account />
      </div>
    );
  }
  
export default Sidebar;