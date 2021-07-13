import React from 'react';
import ReactDOM from 'react-dom';
import { actionDecrement, actionIncrement, actionReset } from './actions/index.js';
import { store } from './Store';

const App = () => {
  return (
    <div>
      <h1>Usando Redux</h1>
      {store.getState()}
      <br></br>
      <button onClick={() => store.dispatch(actionDecrement)}>-</button>
      <button onClick={() => store.dispatch(actionIncrement)}>+</button>
      <button onClick={() => store.dispatch(actionReset)}>reset</button>
    </div>
  )
}

const rendeApp = () => {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}

rendeApp()
store.subscribe(rendeApp)