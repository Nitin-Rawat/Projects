import { useState } from 'react' // importing Hooks
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
let [counter , setCounter] = useState(15)

// let counter = 15
const addValue = ()=>{
  if(counter < 20){
    setCounter(counter + 1)
  }else{console.log("maximum value Reached !");}
 
  console.log("Value addded ", counter);
}

const RemoveValue = ()=>{
  if(counter > 0){
    setCounter(counter - 1)
  }else{console.log("minimum value Reached !");}
}
  return (
    <>
      <h1>React project 2_!</h1>
      <h2>Counter Value : {counter} </h2>

      <button 
      onClick={addValue}
      
      >Add Value : {counter}</button>
      <br />
      <button
      onClick={RemoveValue}
      >Remove Value : {counter} </button>
    </>
  )
}

export default App
