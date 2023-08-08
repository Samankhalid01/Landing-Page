import React from 'react';
import Header from './Components/header'; 
import Features from './Components/Features';
import Services from './Components/Services';
import Subscribe from './Components/Subscribe';

function App() {
  return (
    <div className="App">
    <Header />
    
    <div className='f-heading'>
    <h1>FEATURES</h1>
    <p>
      here are some features of software.
    </p>
    </div>
      
      <Features/>
      <Services/>
      <Subscribe/>
    </div>
  );
}

export default App;
