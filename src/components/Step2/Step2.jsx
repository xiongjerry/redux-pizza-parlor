import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'


function Step2() {
  const dispatch = useDispatch();
  const history = useHistory();


  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [delivery, setDelivery] = useState('');

  const customerInfo = [name, address, city, zip, delivery]

  const handleSubmit = () => {

    dispatch({
      type: 'CUSTOMER_INFO',
      payload: customerInfo
    });
    // history.push(/step3)

  }

  return (
      <>

        <form onSubmit={handleSubmit}>
          <input
            required
            placeholder="Name"
            value={name}
            onChange={(event) => setName(event.target.value)} />

          <input
            required
            placeholder="Address"
            value={address}
            onChange={(event) => setAddress(event.target.value)} />

          <input
            required
            placeholder="City"
            value={city}
            onChange={(event) => setCity(event.target.value)} />

          <input
            required
            placeholder="Zip"
            value={zip}
            onChange={(event) => setZip(event.target.value)} />

          <input type="radio"
            id=" pickup"
            name="delivery"
            value={delivery}
            onChange={(event) => setDelivery(event.target.value)} />
          <label htmlFor="pickup">Pickup</label>

          <input type="radio"
            id=" delivery"
            name="delivery"
            value={delivery}
            onChange={(event) => setDelivery(event.target.value)} />
          <label htmlFor="delivery">Delivery</label>



          <button type="submit" >
            Next
        </button>

        </form>

      </>
    );
  } 

export default Step2;