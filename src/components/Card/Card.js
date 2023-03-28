import React from 'react'
import './Card.css';

const Card = ({title,contents,count}) => {
  return (
    <div className='card'>
        <div className='title'>
            <h2>{title}</h2>
        </div>
        <div className='body'>{contents}</div>
        <div className='count'>{count}</div>
    </div>
  )
}

export default Card