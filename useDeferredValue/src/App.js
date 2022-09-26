import { useState } from "react";
import List from "./List";

function App() {
  const [input, setInput] = useState("");
  return (
    <>
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
    <List input={input} />
    </>
  );
}

export default App;
