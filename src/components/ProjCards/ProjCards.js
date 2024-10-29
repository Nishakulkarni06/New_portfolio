import React from 'react'
import './ProjCards.css'
import { Icon } from '@iconify/react'; 
import arrowTopRight from '@iconify/icons-mdi/arrow-top-right';

const ProjCards = ({image,text,link}) => {
    const handleIconClick = () => {
        window.open(link, '_blank'); // Opens link in a new tab
      };
  return (
    <div className='ProjCards'>
        <img src={image}></img>
        <div className="ProjText">
        <p>{text}</p>
        <Icon onClick={handleIconClick} className='arrow' icon={arrowTopRight} style={{ fontSize: '24px' } } />
        </div>
     
    </div>
  )
}

export default ProjCards;
