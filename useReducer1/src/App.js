import "./App.css";

import React, { useReducer } from "react";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  PLUSTHREE: "plusthree",
  MINUSTHREE: "minusthree",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    case ACTIONS.PLUSTHREE:
      return { count: state.count + 3 };
    case ACTIONS.MINUSTHREE:
      return { count: state.count - 3 };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function increment() {
    dispatch({ type: ACTIONS.INCREMENT });
  }
  function decrement() {
    dispatch({ type: ACTIONS.DECREMENT });
  }
  function plusThree() {
    dispatch({ type: ACTIONS.PLUSTHREE });
  }
  function minusThree() {
    dispatch({ type: ACTIONS.MINUSTHREE });
  }

  return (
    <>
      <div className="App">
        <button onClick={minusThree}>
          <h1>-3</h1>
        </button>
        <button onClick={decrement}>
          <h1>-</h1>
        </button>
        <span>
          <h1>{state.count}</h1>
        </span>
        <button onClick={increment}>
          <h1>+</h1>
        </button>
        <button onClick={plusThree}>
          <h1>+3</h1>
        </button>
      </div>
    </>
  );
}

export default App;
