import axios from "axios";
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'


function Step3() {

  const [total, setTotal] = useState(0);
  const pizzaList = useSelector(store => store.pizzaList);
  const totalCost = useSelector(store => store.handleTotal);
  const customerList = useSelector(store => store.customerList)
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'TOTAL' })
    setTotal(totalCost)
  }, [])

  const handleCheckout = event => {
    event.preventDefault();
    console.log('Checkout button clicked');

    //console.log('Getting Order and customer info')
    //POST Pizza Order to corresponding table on server
    axios.post('/api/order',{
      customer_name,
      street_address,
      city,
      zip,
      type,
      total,
      pizzas  
        })
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
    <div>
      {customerList.map( (info, index) => 
      <p key={index}>{info.customer_name}</p>,
      <p key={index}>{info.street_address}</p>,
      <p key={index}>{info.city} {info.zip}</p>,
      <p key={index}>{info.type}</p>
      )}
    </div>
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