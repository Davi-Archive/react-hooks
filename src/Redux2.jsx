import Redux from 'redux'
import React from 'react'

export default function Redux2(){
// Defina ADD, addMessage(), messageReducer() e a store aqui:
const ADD = 'ADD'

const addMessage = message => {
  return {
    type: ADD,
    message: ''
  }
}

const messageReducer = (previousState = [], action) => {
  switch (action.type){
   case ADD:
   return [...previousState, action.message];

   default:
   return previousState;
  }
}

const store = Redux.configureStore(messageReducer);
return (
      <div>
          <h2>Type in a new Message:</h2>
          { /* render an input, button, and ul here */ }
          <input onChange={this.handleChange.bind(this)} value={this.state.input}/>
          <button onClick={this.submitMessage.bind(this)}>Submit</button>
          <ul>
            {this.state.messages.map((x, i)=>{
              return <li key={i}>{x}</li>
            })}
          </ul>
          { /* change code above this line */ }
        </div>
)};