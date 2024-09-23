import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'

function App() {

  let divRef = useRef(null);

  let [color, setColor] = useState("")

  function handleChangeColor(){
    
      if (divRef.current) {
        divRef.current.style.backgroundColor = color; // Set the color from input
      
    };
  }

  return (
    <>
    
      <input type="text" value={color}   onChange={(e) => setColor(e.target.value)} placeholder='Enter your color'/>
      <input type="submit" onClick={handleChangeColor} placeholder='Change BackGround Color'/>
    <div ref={divRef} 
  
    style={{height: "300px", width: "300px",margin: "50px", border: "1px solid green"}}
    >
     color Box
    </div>
   </>
  )
}

export default App
