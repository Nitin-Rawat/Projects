import { useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/Theme';
import ThemeBtn from './components/Themebtn';
import Card from './components/Card';
import { useEffect } from 'react';

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme=()=>{
    setThemeMode("light")
  } 
  const darkTheme = () => {
    setThemeMode("dark")
  };

  //Actual change in theme

  useEffect(()=>{
    document.querySelector('html').classList.remove("dark","light")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (

     <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>  
     {/* These valuse are empty but we can define there property here but name should be same  */}
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
           <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto"><Card/></div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App