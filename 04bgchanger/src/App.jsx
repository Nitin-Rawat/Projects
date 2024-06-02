import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <div
      className=" w-full h-screen duration-100"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2">
        <div className=" bg-white flex flex-wrap justify-center rounded-xl  p-1 gap-5">
          <button onClick={()=> setColor("Red")} className="bg-red-600 w-14 rounded-xl  p-1"> Red</button>
          <button onClick={()=> setColor("Green")} className="bg-green-600 w-14 rounded-xl  p-1"> Green</button>
          <button onClick={()=> setColor("Yellow")} className="bg-yellow-400 w-14 rounded-xl  p-1"> Yellow</button>
          <button onClick={()=> setColor("Blue")}
          className="bg-blue-600 w-14 rounded-xl  p-1"> Blue</button>
          <button onClick={()=> setColor("Purple")} className="bg-purple-600 w-14 rounded-xl  p-1"> Purple</button>
        </div>
      </div> 
    </div>
  );
}

export default App;
