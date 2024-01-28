import logo from './logo.jpg';
import './App.css';
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function App() {
  

  return (
    <div className="App">
      <h2 class="text-8xl font-extrabold dark:text-white p-5">☀️Productivi-Day☀️</h2>
      
      <div class="flex border-8 columns-2 gap-7 flex-auto justify-between p-10 border-sky-400" >
      <p class="my-4 text-lg text-gray-300">Activity log:</p>
        <div class="w-full flex border-8 grid grid-cols-2 gap-2 p-5 flex-nowrap text-gray-600 border-sky-400	">
         <form class="bg-white shadow-md rounded px-8 pt-6 pb-6 mb-4"> 
            <input size="20" placeholder='12 A.M.'></input>
          </form>  
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"> 
            <input size="10" placeholder='12 P.M.'></input>
          </form> 
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" >
            <input size="10" placeholder='1 A.M.'></input>
          </form>  
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"> 
            <input size="10" placeholder='1 P.M.'></input>
          </form>  
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"> 
            <input size="10" placeholder='2 A.M.'></input>
          </form>  
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"> 
            <input size="10" placeholder='2 P.M.'></input>
          </form>  
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"> 
            <input size="10" placeholder='3 A.M.'></input>
          </form>  
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"> 
            <input size="10" placeholder='3 P.M.'></input>
          </form>  
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">  
            <input size="10" placeholder='4 A.M.'></input>
          </form>  
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"> 
            <input size="10" placeholder='4 P.M.'></input>
          </form>  
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"> 
            <input size="10" placeholder='5 A.M.'></input>
          </form>  
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"> 
            <input size="10" placeholder='5 P.M.'></input>
          </form>  
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"> 
            <input size="10" placeholder='6 A.M.'></input>
          </form>  
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"> 
            <input size="10" placeholder='6 P.M.'></input>
          </form>  
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"> 
            <input size="10" placeholder='7 A.M.'></input>
          </form>  
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"> 
            <input size="10" placeholder='7 P.M.'></input>
          </form>  
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"> 
            <input size="10" placeholder='8 A.M.'></input>
          </form>  
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"> 
            <input size="10" placeholder='8 P.M.'></input>
          </form>  
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"> 
            <input size="10" placeholder='9 A.M.'></input>
          </form>  
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"> 
            <input size="10" placeholder='9 P.M.'></input>
          </form>  
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"> 
            <input size="10" placeholder='10 A.M.'></input>
          </form>  
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"> 
            <input size="10" placeholder='10 P.M.'></input>
          </form>  
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">  
            <input size="10" placeholder='11 A.M.'></input>
          </form>  
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"> 
            <input size="10" placeholder='11 P.M.'></input>
          </form >  
        </div>
        <div class='p-10'>
          <h1>Output</h1>
          <p class='border-8 p-7 border-sky-400	'>
            dafhuloutpuut
            <br></br>
            yapyapyapyap
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
