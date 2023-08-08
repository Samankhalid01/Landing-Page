import React from 'react'
import featureimage from '../images/Frame 19.png';
function Features() {
  return (
    <div id='features'>
    <div className='features-model'>
      <img src={featureimage} alt='feature-image'/>
      <div className='features-text'>
        <h1>FEATURES</h1>
        <h3>This application is a piece of <span>Art.</span></h3>
        <p>
         hey there thank you accessing  my features . i am here to guide you.
         You will find alot of features here let's start with our newly launched featurs of getting offers of working with multinational companies.Click below for accessing that features and many more features here we go!!!
        </p>
        <button> View more features</button>
      </div>
    </div>
    </div>
  )
}

export default Features

