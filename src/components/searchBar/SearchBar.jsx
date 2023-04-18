import React from 'react'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'
import './searchBar.css'

function SearchBar() {
  return (
    <div className='SearchBar'>
        <div className="sbLeft">
            <input type="text"
            value={"sdf"}
            placeholder='Search for city..'
            className='sInput' />
            <UilSearch size={25} className="icons"/>
            <UilLocationPoint size={25} className="icons"/>
        </div>
        <div className="sbRight">
            <button className="sbButton" name='metric'>°C</button>
            <p>|</p>
            <button className="sbButton" name='imperial'>°F</button>
        </div>
    </div>
  )
}

export default SearchBar