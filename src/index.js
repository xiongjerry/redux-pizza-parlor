import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import logger from 'redux-logger';

// Reducers: 
const pizzaList = (state =[], action) => {
  switch (action.type) {
    case 'GET_PIZZA':
      return state;
    default: 
      return state;
  } // End switch
} // End pizzaList reducer

const store = createStore(
    combineReducers({

    }), applyMiddleware(logger)
);

ReactDOM.render(<Provider store = {store}> <App /> </Provider>, document.getElementById('root'));
