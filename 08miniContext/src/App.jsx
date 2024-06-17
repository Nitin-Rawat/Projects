import './App.css'
import Login from './compotnents/Login'
import Profile from './compotnents/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  
  return (
    <UserContextProvider>
      <h1>React MiniProject </h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
