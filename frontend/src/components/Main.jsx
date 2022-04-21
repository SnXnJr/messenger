import ChatContainer from "./chat/ChatContainer";
import Sidebar from "./sidebar/Sidebar";

function Main() {
  return (
    <div className="window-area">
        <Sidebar />
        <ChatContainer />
    </div>
  );
}

export default Main;
