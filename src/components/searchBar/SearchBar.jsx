import React, { useEffect, useState } from 'react'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'
import './searchBar.css'
import { useDispatch, useSelector } from 'react-redux'
import { updateCity } from '../../redux/citySlice'
import { updateType } from '../../redux/typeSlice'
import { fetchWeather } from '../../redux/weatherSlice'

function SearchBar({setQuery, unit, setUnit}) {

  const [city , setCity] = useState('')
  const dispatch = useDispatch()
  
  
  const handleSearch = (e) => {
    e.preventDefault()
    dispatch(updateCity(city))
    dispatch(fetchWeather(city))
    setQuery(city)
  }
  const handleUnit = (e) => {
    e.preventDefault()
    const selectedUnit = e.target.name
    if (unit !== selectedUnit) {
      setUnit(selectedUnit)
    }
    dispatch(updateType(selectedUnit))
  }
  const handleLocation = (e) => {
    e.preventDefault()
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude
      const lon = position.coords.longitude
      setQuery(lat, lon)
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5b61522c47c162cbedbecc5b128a1ccf&units=metric`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(updateCity(data.name))
        setQuery(data.name)
      })
    })
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch(event)
    }}
  

  return (
    <div className='SearchBar'>
        <div className="sbLeft">
            <input type="text"
            placeholder='Type a  city..'
            className='sInput'
            onKeyDown={handleKeyDown}
            onChange={(e)=>{setCity(e.target.value)}}
            />
            <UilSearch size={25} onClick={handleSearch}  className="icons"/>
            <UilLocationPoint size={25} onClick={handleLocation} className="icons"/>
        </div>
        <div className="sbRight">
            <button className="sbButton" name='metric' onClick={handleUnit}>°C</button>
            <p>|</p>
            <button className="sbButton" name='imperial' onClick={handleUnit}>°F</button>
        </div>
    </div>
  )
}

export default SearchBar