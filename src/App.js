import logo from './logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          test4321
        </p>
        <a
          className="App-link"
          href="https://chat.openai.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here
        </a>
      </header>
    </div>
  );
}

export default App;
