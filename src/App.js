import './App.css';
import { useState, useEffect, updateState } from 'react'
import Textbox from './components/Textbox'
import schedule_changer from './schedule_changer.mjs'
import React from 'react'
import main from './openai.mjs'
function App() {
  const times_list = ['12AM', '1AM', '2AM', '3AM', '4AM', '5AM', '6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM', '10PM', '11PM'];

  const [activity, setActivity] = useState({})
  const [newActivity, setNewActivity] = useState('')
  const [time, setTime] = useState('')

  const handleActivityChange = (event) => {
    setNewActivity(event.target.value)
    setActivity(prevState => ({ ...prevState, [event.target.name]: event.target.value }))
    console.log(activity)
  }

  async function handleClick(event) {
    let open_ai_output = await schedule_changer(activity);
    let short_summary = await main("A person's typicaly daily schedule is as follows: " + open_ai_output + ". Return, in AT MOST 2 sentences, a short summary describing the unhealthy activities in the schedule and how to change them.");
    console.log('ai output', open_ai_output)
    console.log('short summary', short_summary)
    

    setActivity(open_ai_output)

    Object.entries(open_ai_output).map((eachTimeSet) => {
      document.getElementById(`input-${eachTimeSet[0]}`).value = eachTimeSet[1]
    })
    document.getElementById("text").textContent = short_summary
    console.log('check new activity has been set', activity)
  }

  useEffect(() => {
    console.log('activity changed', activity)
  }, [activity])

  return (
    
    <div className="App">
      <div className="h-14 bg-gradient-to-r rounded-3xl from-cyan-500 to-blue-500"></div>
      <h2 className="text-8xl font-extrabold p-5">Productivi-Day</h2>
      
      <div className="flex border-t-4 columns-2 gap-7 flex-auto justify-between p-10 border-blue-200	" >
      
        <div>
          <p className="my-4 bold text-5xl font-bold" id="activity"> activity log</p>
          <div className="w-full flex border-t-2 p-5 flex-balance text-gray-600 border-blue-200	">
            
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
            {
              times_list.map((entry) => (
                
                    <Textbox name={entry} key={entry} time={entry} handleChange={handleActivityChange} activity={activity[entry]}/>
                
              ))
            }
          </div>
        </div>
        </div>
        <div class='flex p-10 flex-col justify-center'>
          <p className="my-4 bold text-5xl font-bold" id="output">summary</p>
          <p class='border-y-2 p-7 border-blue-200	m-5 max-w-80' id="text">
            Enter a schedule!
            <ul id='summary-list'> </ul>
          </p>
          <button class="hover:bg-gray-400 font-bold py-9 px-4 rounded-xl h-10 m-3" onClick={handleClick}>
            <span>Optimize day</span>
          </button> 
        </div>
         
      </div>

    </div>
  );
}

export default App;