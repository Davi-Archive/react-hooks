import React, { useState, useCallback } from "react";
import "./App.css";
import List from "./List";

function App() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);


  //Update only when variable NUMBER change CHECK CONSOLE.LOG

  //Very similar to useMemo but accepts attributes, and return the function
  const getItems = useCallback((incrementor) => {
    return [
      number + incrementor,
      number + 1 + incrementor,
      number + 2 + incrementor,
    ];
  },[number]);

  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
  };

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Toggle Theme
      </button>
      <List getItems={getItems} />
    </div>
  );
}

export default App;
