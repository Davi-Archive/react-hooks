import "./App.css";

import React, { useState, useEffect } from "react";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(()=>{
    window.addEventListener('resize', handleResize)
  },[])

  return (
    <>
      <div className="App">
      <h1>{windowWidth}</h1> 
      </div>
    </>
  );
}

export default App;
