import React, { useState, useLayoutEffect } from "react";


function App() {
  const [count, setCount] = useState(0);


  //close to the useEffect, but not async
  useLayoutEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <>
      <div>
        <button onClick={() => setCount((c) => c + 1)}>Increment</button>
        <div>{count}</div>
      </div>
    </>
  );
}

export default App;
