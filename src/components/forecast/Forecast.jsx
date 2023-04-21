import React from 'react'
import './forecast.css'

function Forecast({title,data}) {
  return (
    <div>
        <div className="fContainer">
            <p className='fTitle'>{title}</p>
        </div>
        <hr/>
        <div className="fDetails">
           {data?.map((item,index)=>(

              <div className="fColumn" key={index}>
               <p className='fTime'>{item.title}</p>
               <img src={`http://openweathermap.org/img/wn/${item.icon}.png`} alt="icon" className='fImg' /> 
               <p className='fTemp'>{item.temp}</p>
            </div>
               ))}
        </div>

    </div>
  )
}

export default Forecast