//#region ⬇⬇ Document setup below: 
// ⬇ index.js & App.js setup: 
import './index.css';
import App from './components/App/App';
// ⬇ React/Redux functionality:
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import logger from 'redux-logger';
//#endregion ⬆⬆ Document setup above. 


// ⬇ Reducers: 
const pizzaList = (state =[], action) => {
  switch (action.type) {
    case 'GET_PIZZA':
      return action.payload;
    default: 
      return state;
  } // End switch
} // End pizzaList reducer

//Total cost reducer
  const handleTotal = (state = 0, action) => {
    if(action.type === 'TOTAL') {
    }// state = {pizzaList.reduce((a, b) => a = a + b.cost, 0)};
    return state;
  }

// ⬇ Store:
const store = createStore(
    combineReducers({
      pizzaList, handleTotal
    }), applyMiddleware(logger)
);


// ⬇ Render: 
ReactDOM.render(
  <Provider store = {store}> 
    <App /> 
  </Provider>
  , document.getElementById('root'));
