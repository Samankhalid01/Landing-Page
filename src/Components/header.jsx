import React from 'react';
import Navbar from './navbar'; 

function Header() {
  return (
    <div id='main'>
      <Navbar />
      <div className='name'>
      <h1>It's a<span> ReactJS</span>website.</h1>
      <p className='details'>
        This website is desgined for freelancers
      </p>
      <div className='header-btns'>
        <a href='#'className='cv-btn'>Hire me</a>
        <a href='#'className='cv-btn1'>Download App</a>
      </div>
    </div>
    <div className='arrow'></div>
    </div>
  );
}

export default Header;