import './App.css';
import productivity from './images/productivi-day.jpg'
import { useState, useEffect } from 'react'
import Textbox from './components/Textbox'
import schedule_changer from './schedule_changer.mjs'

function App() {
  const [activity, setActivity] = useState({})
  const [newActivity, setNewActivity] = useState('')
  const [time, setTime] = useState('')

  const handleActivityChange = (event) => {
    setNewActivity(event.target.value)
    setActivity(prevState => ({ ...prevState, [event.target.name]: event.target.value }))
    console.log(activity)
  }

  const handleClick = (event) => {
    event.preventDefault()
    const newSchedule = schedule_changer(activity)
    console.log(newSchedule)
    setActivity(newSchedule)
  }

  return (
    
    <div className="App">
      <div class="h-14 bg-gradient-to-r rounded-3xl from-cyan-500 to-blue-500"></div>
      <h2 class="text-8xl font-extrabold dark:text-white p-5">☀️Productivi-Day☀️</h2>
      
      <div class="flex border-8 columns-2 gap-7 rounded-3xl flex-auto justify-between p-10 border-indigo-50	" >
      <p class="my-4 bold text-5xl font-bold text-gray-300">Activity log:</p>
        <div class="w-full flex border-8 grid grid-cols-2 gap-2 p-5 rounded-3xl flex-balance text-gray-600 border-indigo-50	">
         <Textbox name='12AM' time="12 AM" handleChange={handleActivityChange} activity={activity}/>
         <Textbox name='12PM' time="12 PM" handleChange={handleActivityChange} activity={activity}/>
         <Textbox name='1AM' time="1 AM" handleChange={handleActivityChange} activity={activity}/>
         <Textbox name='1PM' time="1 PM" handleChange={handleActivityChange} activity={activity}/>
         <Textbox name='2AM' time="2 AM" handleChange={handleActivityChange} activity={activity}/>
         <Textbox name='2PM' time="2 PM" handleChange={handleActivityChange} activity={activity}/>
         <Textbox name='3AM' time="3 AM" handleChange={handleActivityChange} activity={activity}/>
         <Textbox name='3PM' time="3 PM" handleChange={handleActivityChange} activity={activity}/>
         <Textbox name='4AM' time="4 AM" handleChange={handleActivityChange} activity={activity}/>
         <Textbox name='4PM' time="4 PM" handleChange={handleActivityChange} activity={activity}/>
         <Textbox name='5AM' time="5 AM" handleChange={handleActivityChange} activity={activity}/>
         <Textbox name='5PM' time="5 PM" handleChange={handleActivityChange} activity={activity}/>
         <Textbox name='6AM' time="6 AM" handleChange={handleActivityChange} activity={activity}/>
         <Textbox name='6PM' time="6 PM" handleChange={handleActivityChange} activity={activity}/>
         <Textbox name='7AM' time="7 AM" handleChange={handleActivityChange} activity={activity}/>
         <Textbox name='7PM' time="7 PM" handleChange={handleActivityChange} activity={activity}/>
         <Textbox name='8AM' time="8 AM" handleChange={handleActivityChange} activity={activity}/>
         <Textbox name='8PM' time="8 PM" handleChange={handleActivityChange} activity={activity}/>
         <Textbox name='9AM' time="9 AM" handleChange={handleActivityChange} activity={activity}/>
         <Textbox name='9PM' time="9 PM" handleChange={handleActivityChange} activity={activity}/>
         <Textbox name='10AM' time="10 AM" handleChange={handleActivityChange} activity={activity}/>
         <Textbox name='10PM' time="10 PM" handleChange={handleActivityChange} activity={activity}/>
         <Textbox name='11AM' time="11 AM" handleChange={handleActivityChange} activity={activity}/>
         <Textbox name='11PM' time="11 PM" handleChange={handleActivityChange} activity={activity}/>
        </div>
        <div class='p-10'>
          <h1 class='font-bold'>Output</h1>
          <p class='border-8 p-7 rounded-3xl border-indigo-50	m-5'>
            dafhuloutpuut
            <br></br>
            yapyapyapyap
          </p>
          <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-xl inline-flex items-right-bottom" onClick={handleClick}>
            <span>Optimize day</span>
          </button> 
        </div>
         
      </div>
      <div class='p-10'>
        <img src={productivity} alt="Logo" class='rounded-lg shadow-lg object-scale-down h-48 w-50' id='productivity' />
      </div>  
    </div>
  );
}

export default App;