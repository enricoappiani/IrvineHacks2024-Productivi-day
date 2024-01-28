import './App.css';
import productivity from './images/productivi-day.jpg'
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
      <div class="h-14 bg-gradient-to-r rounded-4xl from-cyan-500 to-blue-500"></div>
      <h2 class="text-8xl font-extrabold dark:text-white p-5">☀️Productivi-Day☀️</h2>
      
      <div class="flex border-8 columns-2 gap-7 rounded-4xl flex-auto justify-between p-10 border-indigo-50	" >
      <p class="my-4 bold text-5xl font-bold text-gray-300">Activity log:</p>
        <div class="w-full flex border-8 grid grid-cols-2 gap-2 p-5 rounded-3xl flex-balance text-gray-600 border-indigo-50	">
         <Textbox name='12am' time="12 A.M." handleChange={handleActivityChange} activity={activity}/>
         <Textbox name='12pm' time="12 P.M." handleChange={handleActivityChange} activity={activity}/>
         <Textbox name='1am' time="1 A.M." handleChange={handleActivityChange} activity={activity}/>
         <Textbox name='1pm' time="1 P.M." handleChange={handleActivityChange} activity={activity}/>
         <Textbox name='2am' time="2 A.M." handleChange={handleActivityChange} activity={activity}/>
         <Textbox name='2pm' time="2 P.M." handleChange={handleActivityChange} activity={activity}/>
         <Textbox name='3am' time="3 A.M." handleChange={handleActivityChange} activity={activity}/>
         <Textbox name='3pm' time="3 P.M." handleChange={handleActivityChange} activity={activity}/>
         <Textbox name='4am' time="4 A.M." handleChange={handleActivityChange} activity={activity}/>
         <Textbox name='4pm' time="4 P.M." handleChange={handleActivityChange} activity={activity}/>
         <Textbox name='5am' time="5 A.M." handleChange={handleActivityChange} activity={activity}/>
         <Textbox name='5pm' time="5 P.M." handleChange={handleActivityChange} activity={activity}/>
         <Textbox name='6am' time="6 A.M." handleChange={handleActivityChange} activity={activity}/>
         <Textbox name='6pm' time="6 P.M." handleChange={handleActivityChange} activity={activity}/>
         <Textbox name='7am' time="7 A.M." handleChange={handleActivityChange} activity={activity}/>
         <Textbox name='7pm' time="7 P.M." handleChange={handleActivityChange} activity={activity}/>
         <Textbox name='8am' time="8 A.M." handleChange={handleActivityChange} activity={activity}/>
         <Textbox name='8pm' time="8 P.M." handleChange={handleActivityChange} activity={activity}/>
         <Textbox name='9am' time="9 A.M." handleChange={handleActivityChange} activity={activity}/>
         <Textbox name='9pm' time="9 P.M." handleChange={handleActivityChange} activity={activity}/>
         <Textbox name='10am' time="10 A.M." handleChange={handleActivityChange} activity={activity}/>
         <Textbox name='10pm' time="10 P.M." handleChange={handleActivityChange} activity={activity}/>
         <Textbox name='11am' time="11 A.M." handleChange={handleActivityChange} activity={activity}/>
         <Textbox name='11pm' time="11 P.M." handleChange={handleActivityChange} activity={activity}/>
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