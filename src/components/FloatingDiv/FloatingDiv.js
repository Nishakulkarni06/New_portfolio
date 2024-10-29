import React from 'react'
import './Floating.css'
const FloatingDiv = ({image,txt1,txt2}) => {
  return (
    <div className='floatingDiv'>
        <img src={image} alt=""></img>
        <div className="text">
        <span> 
        {txt1} 
        <br/>
        {txt2} 
       </span>
        </div>
    </div>
  )
}

export default FloatingDiv;
