import React from 'react';
import Navbar from './components/Navbar'

import Todofunc from './components/Todofunc'

// import handler from './components/Todofunc'


function App() {

  // let form = document.getElementById('todoform');
  // form.addEventListener('submit', handler);


  return (
    <div className="App">
      <Navbar />

      {/* <div className = 'form'>
        <Todoform/>
      </div> */}

      <Todofunc />



    </div>
  );
}

export default App;
