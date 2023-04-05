import React from 'react';
import {Routes, Route} from 'react-router-dom'

import Navbar from './components/Navbar'

import Todofunc from './views/Todofunc'


function App() {


  return (
    <div className="App">

    <Navbar />

    <div className='container'>

      <Routes>
        <Route path='/' element ={<Todofunc />}/>
        <Route path='/pokestats' />


      </Routes>

      </div>


    </div>
  );
}

export default App;
