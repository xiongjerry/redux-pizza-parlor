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


//#region ⬇⬇ All reducers below: 
// ⬇ Pizza list reducer: 
const pizzaList = (state = [], action) => {
  switch (action.type) {
    case 'GET_PIZZA':
      return action.payload;
    default:
      return state;
  } // End switch
} // End pizzaList reducer

// ⬇ Shopping cart reducer: 
const shoppingCart = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload];
    case 'REMOVE_FROM_CART':
      return state.filter(pizza => pizza.id !== action.payload.id);  
    default:
      return state;
  } // End switch
} // End shoppingCart reducer

// ⬇ NON-FUNCTIONAL & NON-USED: Total cost reducer:
const totalCost = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_TOTAL':
      const pizzaCost = (sum, pizza) => sum + Number(pizza.price);
      const totalPrice = action.payload.reduce(pizzaCost, 0);
      return totalPrice;    
    default:
      return state;
  } // End switch
} // End totalCost reducer

// ⬇ Customer list reducer:
const customerList = (state = [], action) => {
  switch (action.type) {
    case 'CUSTOMER_INFO':
      return [...state, action.payload];
    case 'EMPTY_ORDER' :
      return [];
    default:
      return state;
  } // End switch
}
//#endregion ⬆⬆ All reducers above. 


// ⬇ Store:
const store = createStore(
  combineReducers({
    pizzaList, customerList, shoppingCart, totalCost
  }), applyMiddleware(logger)
);


// ⬇ Render: 
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
