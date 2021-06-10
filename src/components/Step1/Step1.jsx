//#region ⬇⬇ Document setup below: 
// ⬇ React/Redux functionality:
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// ⬇ Server functionality: 
import axios from 'axios';
// ⬇ Other files: 
import PizzaItem from '../PizzaItem/PizzaItem';
//#endregion ⬆⬆ Document setup above. 

function Step1() {
  //#region ⬇⬇ State variables and page load below:
  // ⬇ State variables:
  const dispatch = useDispatch();
  const pizzaList = useSelector(store => store.pizzaList);
  // ⬇ Getting pizzas on page load:
  useEffect(() => {
    getPizzas();
  }, []) // Empty array  means run only once at load!
  //#endregion ⬆⬆ State variables and page load above. 


  //#region ⬇⬇ CRUD functionality below:
  // ⬇ GET request to refresh data:
  const getPizzas = () => {
    console.log('In getPizzas');
    // ⬇ Axios GET call to DB:
    axios.get('/api/pizza')
      .then(response => {
        console.log('In GET /api/pizza:', response.data);
        // ⬇ Sending DB data to Redux to update our array:
        dispatch({
          type: 'GET_PIZZA',
          payload: response.data
        }) // End dispatch
      }) // End .then
      .catch(error => {
        console.log('In GET /api/pizza:', error);
      }); // End .catch
  } // End getPizzas
  //#endregion ⬆⬆ CRUD functionality above. 


  // ⬇ Rendering:
  return (
    <>
      <h2>Step 1: Select Your Pizza</h2>
      <div>
        {/* ⬇ Loops through and iterates each pizza from the DB to DOM: */}
        {pizzaList.map(pizza => {
          return (
            <PizzaItem getPizzas={getPizzas} key={pizza.id} pizza={pizza} />
          )
        })}
      </div>
    </>
  ) // End return
} // End Step1


export default Step1;