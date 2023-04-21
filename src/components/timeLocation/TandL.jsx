import React from 'react'
import './tandl.css'

function TandL({data}) {
  return (
    <div className='tlContainer'>
        <div className="tlCDate">
            <p>{data?.date}<span className='localTime'>  (local Time)</span></p>
        </div>
        <div className="tlLocation">
            <p>{data?.weatherData?.name}, {data?.weatherData?.country}</p>
        </div>
    </div>
  )
}

export default TandL