import logo from './logo.svg';
import './App.css';
import Profile from './mission14';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          정수현 <code>코로나</code> 수고링
        </p>
        <div>
          {Profile()}
      </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
