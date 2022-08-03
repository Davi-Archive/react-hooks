import { Provider } from 'react-redux';

const INCREMENT = 'INCREMENT'; // Defina uma constante para os tipos de ação de incremento
const DECREMENT = "DECREMENT"; // Defina uma constante para os tipos de ação de decremento

// Defina o redutor do contador que incrementará ou decrementará o estado com base na ação que ele recebe

const counterReducer = (state = 0, action) => {
  switch (action.type){
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

// Defina um criador de ação para incrementar

const incAction = () => {
  return {
    type: INCREMENT
  };
};
// Defina um criador de ação para decrementar
const decAction = () => {
  return {
    type: DECREMENT
  };
};
// Defina a store do Redux aqui, passando para ela os redutores

const store = Redux.createStore(counterReducer);