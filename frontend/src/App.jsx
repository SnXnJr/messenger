import './App.css';
import AuthContainer from './components/Auth/AuthContainer';
import Main from './components/Main';

function App() {
  const name = false;
  if (!name){
    return (
      <div className="window-wrapper">
        <AuthContainer />
      </div>
    )
  } else {
    return (
      <div className="window-wrapper">
        <Main />
      </div>
    );
  }
}

export default App;
