import axios from "axios";
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'


function Step3() {

  const customerList = useSelector(store => store.customerList)
  const shoppingCart = useSelector(store => store.shoppingCart);

  const history = useHistory();
  const dispatch = useDispatch();

  const totalCost = (shoppingCart) => {
    const pizzaCost = (sum, pizza) => sum + Number(pizza.price);
    const totalPrice = shoppingCart.reduce(pizzaCost, 0);
    return totalPrice;
  } // End totalCost

  const totalPrice = totalCost(shoppingCart);


  const handleCheckout = event => {
    event.preventDefault();
    console.log('Checkout button clicked');
    console.log('Total price is:', totalPrice);

    const dataToSend = {
      customer_name: customerList[0].name,
      street_address: customerList[0].address,
      city: customerList[0].city,
      zip: customerList[0].zip,
      type: customerList[0].delivery,
      total: totalPrice,
      pizzas: shoppingCart
    };

    //console.log('Getting Order and customer info')
    //POST Pizza Order to corresponding table on server
    axios.post('/api/order', dataToSend )
      .then(response => {
        history.push('/');
        // implement to index reducer to complete clear
        dispatch({ type: 'EMPTY_ORDER' })
      }).catch(err => {
        console.log(err)
      })

  }

  return (
    <>
      <h2>Step 3: Checkout</h2>
      <p>Customer Name: {customerList[0].name}</p>
      <p>Customer Address: {customerList[0].address}</p>
      <p>Customer City: {customerList[0].city}</p>
      <p>Customer Zip: {customerList[0].zip}</p>
      <p>Delivery type: {customerList[0].delivery}</p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cost</th>
          </tr>
          {shoppingCart.map((pizza) =>
            <tr key={pizza.id}>
              <td >{pizza.name}</td>
              <td>{pizza.price}</td>
            </tr>
          )}

        </thead>
      </table>
      <button onClick={handleCheckout}>Checkout</button>
    </>
  )
} // End Step3


export default Step3;