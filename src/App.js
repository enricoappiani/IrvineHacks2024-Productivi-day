import { useState, useEffect } from 'react';
import logo from './logo.jpg';
import './App.css';
import schedule_changer from './userin.mjs'

//this is just to test, replace activites_list with real user list
const activities_list = ['smoke', 'drugs', 'alcohol', 'bang head', 'eat bad food', 'sing', 'paint', 'code', 'swim', 'hike', 'meditate', 'yoga', 'draw', 'play', 'study', 'explore', 'travel', 'volunteer', 'garden', 'cycle', 'photograph', 'listen', 'learn', 'create'];
//remove above for real

function App() {
  const [new_schedule, setMsg ] = useState("")
  const [bad_habits, setMsg2 ] = useState("")
  useEffect(() => {
    schedule_changer(activities_list).then((res) => {
      const [msg1, msg2] = res;
      setMsg(msg1);
      //setMsg2(msg2);
    });
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {new_schedule}
          
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