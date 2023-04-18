import React from 'react'
import './forecast.css'

function Forecast({title}) {
  return (
    <div>
        <div className="fContainer">
            <p className='fTitle'>{title}</p>
        </div>
        <hr/>
        <div className="fDetails">
            <div className="fColumn">
               <p className='fTime'>11 : 50 PM</p>
               <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="icon" className='fImg' /> 
               <p className='fTemp'>25°</p>
            </div>
            <div className="fColumn">
               <p className='fTime'>11 : 50 PM</p>
               <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="icon" className='fImg' /> 
               <p className='fTemp'>25°</p>
            </div>
            <div className="fColumn">
               <p className='fTime'>11 : 50 PM</p>
               <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="icon" className='fImg' /> 
               <p className='fTemp'>25°</p>
            </div>
            <div className="fColumn">
               <p className='fTime'>11 : 50 PM</p>
               <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="icon" className='fImg' /> 
               <p className='fTemp'>25°</p>
            </div>
            <div className="fColumn">
               <p className='fTime'>11 : 50 PM</p>
               <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="icon" className='fImg' /> 
               <p className='fTemp'>25°</p>
            </div>
        </div>

    </div>
  )
}

export default Forecast