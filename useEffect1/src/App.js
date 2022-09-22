import "./App.css";

import React, { useState, useEffect } from "react";

function App() {
  const [resourceType, setResourceType] = useState("posts");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((res) => res.json())
      .then((json) => setData(json))
      .then(console.log(data));
  }, [resourceType]);

  return (
    <>
      <div className="App">
        <button
          style={{ padding: "5px", margin: "5px" }}
          onClick={() => setResourceType("posts")}
        >
          <h1>Posts</h1>
        </button>
        <span></span>
        <button
          style={{ padding: "5px", margin: "5px" }}
          onClick={() => setResourceType("users")}
        >
          <h1>Users</h1>
        </button>
        <button
          style={{ padding: "5px", margin: "5px" }}
          onClick={() => setResourceType("comments")}
        >
          <h1>Comment</h1>
        </button>
        <h1>{resourceType}</h1>
        {data.slice(0,5).map((item) => {
          return <pre>{JSON.stringify(item)}</pre>
        })}
      </div>
    </>
  );
}

export default App;
