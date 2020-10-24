import React from 'react'

import './card.css'

export const Card = ({ id , name }) => (
    <div className='card-container'>
        <img 
            alt='monsters'
            src={`https://robohash.org/${id}?set=set2`}
        />
        <h2 className='card-container'>{name}</h2>
    </div>
)