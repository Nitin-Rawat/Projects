import { useState } from 'react'
import Card from './components/Card';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-green-400  text-3xl font-bold underline mb-5 rounded-xl"> TailWind CSS !</h1>

      <Card username="React Props " btnTxt="Wow"/>
      <Card username= "bala"/>
    </>
  );
}

export default App