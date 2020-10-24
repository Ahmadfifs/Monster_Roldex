import React from 'react'
import './search.css'

export const SearchBox = ({ handleChange }) =>  (
     <input
        className='search'
        type="search"
        placeholder='Search monster' 
        onChange={ handleChange }
      />
);