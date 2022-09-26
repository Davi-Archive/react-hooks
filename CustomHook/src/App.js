import React, { useState } from "react";
import useLocalStorage from "./useLocalStorage";
import useUpdateLogger from "./useUpdateLogger";

function App() {
  const [name, setName] = useLocalStorage('name','')
  useUpdateLogger(name)
  return (
    <div>
      <input
        type="text"
        value={name}
        style={{fontSize: '40px'}}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default App;
