import React from 'react'

import './search-box.styles.css'

export const SearchBox = ({ placeholder, handleChange }) => 
    <input 
        className='search' 
        type='search' 
        name='search' 
        onChange={handleChange} 
        placeholder={placeholder}
    />
