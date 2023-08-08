import React from 'react'


function Box(props) {
  return (
    <div className='s-box'>
    <div className='s-b-img'>
        <img src ={props.image} alt={props.alte}/>
    </div>
      <div className='s-b-text'>
        <p>
    Python is a friendly programming language🐍. React is a JS library used for powerful UI.
        <br></br>
        </p>
        <a href='#' className='cv-btn'>{props.button}</a>
      </div>
    </div>
  )
}

export default Box
