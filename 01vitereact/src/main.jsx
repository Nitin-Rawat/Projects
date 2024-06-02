import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'



const reactElement = React.createElement(
  'a',
  {href : 'https://google.com' , target : '_blank'},
  'visit google'
)

const anotherElement =(
  <a href="https://google.com" target='_blank'> visit google</a>
)
ReactDOM.createRoot(document.getElementById('root')).render(
/* <>
<h1>Hi There! </h1> 

  <br /> <b>in React always name your first latter in uppercase </b>
  <br /> When there is HTML in your <b>.JS</b> file always Rename it to <b>.jsx</b>

</> */
// reactElement
// anotherElement
<App />

)
