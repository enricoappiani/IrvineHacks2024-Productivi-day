import { useState, useEffect } from 'react';
import logo from './logo.jpg';
import './App.css';
import main from './openai.mjs'

function App() {
  const [msg, setMsg ] = useState("")
  useEffect(() => {
    const lol = main("My schedule is: wake up 8 am, play league to 12pm, go to class to 1pm, eat lunch which was Jamaican Jerk, do homework from 2pm to 5pm, eat dinner which was Jamaican Jerk (I love Jamaican Jerk), then play league for 5 hours, then homework from 11pm to 3 am, sleep at 3 am. What are some bad habits of my schedule?")
    lol.then((res) => setMsg(res))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {msg}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org/"
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