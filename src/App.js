import './App.css';
import { useState, useEffect } from 'react'
import Textbox from './components/Textbox'

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
    setActivity()
  }

  return (
    
    <div className="App">
      <div class="h-14 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
      <h2 class="text-8xl font-extrabold dark:text-white p-5">☀️Productivi-Day☀️</h2>
      
      <div class="flex border-8 columns-2 gap-7 rounded-3xl flex-auto justify-between p-10 border-indigo-50	" >
      <p class="my-4 bold text-5xl font-bold text-gray-300">Activity log:</p>
        <div class="w-full flex border-8 grid grid-cols-2 gap-2 p-5 rounded-3xl flex-balance text-gray-600 border-indigo-50	">
         <Textbox name='12am' time="12 A.M." handleChange={handleActivityChange} activity={activity}/>
         <Textbox name='12pm' time="12 P.M." handleChange={handleActivityChange} activity={activity}/>
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
      <div class="flex justify-center items-center h-screen">
        <img src="./productivi-day.jpg" alt="Your Image" class="rounded-lg shadow-lg">
          </img>
    </div>
    </div>
  );
}

export default App;
