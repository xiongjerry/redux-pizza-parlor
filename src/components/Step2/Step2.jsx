import React, { useState } from 'react';
import { useDispatch } from 'react-redux';


function Step2() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [delivery, setDelivery] = useState('');


  const handleSubmit = () => {
    
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

        <input type = "radio"
          id =" pickup"
          name = {delivery}
          value = "pickup" />
            <label for ="pickup">Pickup</label>

          <input type = "radio"
          id =" delivery"
          name = {delivery}
          value = "delivery" />
            <label for ="delivery">Delivery</label>
          


        <button type = "submit" >
          Next
        </button>
        
          </form>
        
      </>
    );
}

export default Step2;