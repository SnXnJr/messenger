import React, {useState} from 'react';
import './App.css';
import AuthContainer from './components/Auth/AuthContainer';
import Main from './components/Main';
import context from './context';

function App() {
  const name = true;
  let view;
  if (!name) {
    view = <AuthContainer />;
  } else {
    view = <Main />;
  }

  const [id, setId] = useState("");
  const [chatId, setChatId] = useState("");

  const contextValue = {
      id,
      setId,
      chatId,
      setChatId
  };

  return (
    <div className="window-wrapper">
      <context.Provider value={contextValue}>
        {view}
      </context.Provider>
    </div>
  );
}

export default App;
