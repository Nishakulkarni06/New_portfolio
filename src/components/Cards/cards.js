import React from 'react'
import './cards.css'

const Cards = ({image,about,desc}) => {
  return (
    <div className='card'>
       <img src={image}></img>
       <h3>{about}</h3>
       <p>{desc}</p>
    </div>
  )
}

export default Cards;
