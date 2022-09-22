import "./App.css";

import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <button
          style={{ padding: "5px", margin: "5px" }}
          onClick={() => setCount(count + 1)}
        >
          <h1>+</h1>
        </button>
        <span>
          <h1>{count}</h1>
        </span>
        <button
          style={{ padding: "5px", margin: "5px" }}
          onClick={() => setCount(count - 1)}
        >
          <h1>-</h1>
        </button>
      </div>
    </>
  );
}

export default App;
