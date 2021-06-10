import React from 'react';
import axios from 'axios';
import './App.css';
import { Route, HashRouter as Router, Link } from 'react-router-dom';
import Step1 from '../Step1/Step1';
import Step2 from '../Step2/Step2';
import Step3 from '../Step3/Step3';
import Admin from '../Admin/Admin';

function App() {

  return (

    <Router>
      <div className='App'>

        <header className='App-header'>
          <h1 className='App-title'>Prime Pizza</h1>
        </header>

        <Route path='/' exact>
          <Step1 />
        </Route >

        <Route path='/step2'>
          <Step2 />
        </Route >

        <Route path='/step3'>
          <Step3 />
        </Route >

        <Route path='/admin'>
          <Admin />
        </Route >

        <img src='images/pizza_photo.png' />
        <p>Pizza is great.</p>

      </div >
    </Router>
  );
}

export default App;
