import React, { useState, useMemo } from "react";
function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  //use slow code when it changes
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  const themeStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };
  return (
    <>
      <div>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
        <br />
        <button onClick={() => setDark((prevDark) => !prevDark)}>
          Change Theme
        </button>
        <div style={themeStyles}>{doubleNumber}</div>
      </div>
    </>
  );
}

export default App;

function slowFunction(num) {
  console.log("Call Slow Function");
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
}
