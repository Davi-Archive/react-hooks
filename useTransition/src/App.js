import React, { useState, useTransition } from "react";

function App() {
  //isPending is loading DATA
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const LIST_SIZE = 15000;

  function handleChange(e) {
    //High priority input
    setInput(e.target.value);

    //Lower priority input
    startTransition(() => {
      const l = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        l.push(e.target.value);
      }
      setList(l);
    });
  }

  return (
    <>
      <div>
        <input type="text" value={input} onChange={handleChange} />
        {isPending
          ? "Loading..."
          : list.map((item, index) => {
              return <div key={index}>{item}</div>;
            })}
      </div>
    </>
  );
}

export default App;
