import axios from "axios";
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import {useHistory} from 'react-router-dom'


function Step3() {

  const [total, setTotal]= useState(0);
  const pizzaList = useSelector(store => store.pizzaList);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleTotal = () => {
    setTotal(pizzaList.reduce((a, b) => a = a + b.cost, 0));
    return total
  }

  const handleCheckout = event => {
    event.preventDefault();
    console.log('Checkout button clicked');

    //console.log('Getting Order and customer info')
    //POST Order to corresponding table on server
    axios.post('/api/order')
    .then(response => {
      
      history.push('/');
      dispatchEvent({type: 'EMPTY_ORDER'})
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <>
      <h2>Step 3: Checkout</h2>
      <div>PERSONS ADDRESS GOES HERE</div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cost</th>
          </tr>
          {pizzaList.map((index, name, cost) =>
            <tr>
              <td key={index}>{name}</td>
              <td>{cost}</td>
            </tr>
          )}

        </thead>
      </table>
      <h2>{total}</h2>
      <button onClick={handleCheckout}>Checkout</button>
    </>
  )
} // End Step3


export default Step3;