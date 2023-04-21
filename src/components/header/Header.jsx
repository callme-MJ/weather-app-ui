import React from 'react'
import './header.css'

function Header({setQuery}) {
  const cities = [
    {
      id: 1,
      title: "London",
    },
    {
      id: 2,
      title: "Sydney",
    },
    {
      id: 3,
      title: "Tokyo",
    },
    {
      id: 4,
      title: "Toronto",
    },
    {
      id: 5,
      title: "Paris",
    },
  ];
  return (
    <div className='header'>
      <div className="headerButtons">
        {cities.map((city) => (
          <button
            key={city.id}
            className="navButton"
            onClick={() => setQuery(city.title)}
          >
            {city.title}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Header