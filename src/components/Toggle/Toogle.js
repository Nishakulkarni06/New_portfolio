import React from 'react'
import "./Toogle.css"
import Sun from '@iconscout/react-unicons/icons/uil-sun';
import Moon from '@iconscout/react-unicons/icons/uil-moon';
import { useContext } from "react";
import { themeContext } from "../../Context";
const Toogle = () => {
  const theme = useContext(themeContext);
const darkMode = theme.state.darkMode; 
  return (
    <div className='toogle'>
       <Sun/>
       <Moon/> 
       <div className="t-button" style={darkMode ?  {left:'2px'} : {right : '2px'}}  
       onClick={() => theme.dispatch({ type:"toggle" 
       })}>
       </div>
    </div>
  )
}

export default Toogle;
