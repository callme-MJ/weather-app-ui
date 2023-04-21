import React from 'react'
import './tempDetails.css'
import {
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
} from "@iconscout/react-unicons";

function TempDetails({data}) {
    const icon = data?.weather[0].icon
    return (
        <div>
            <div className="tempContainer">
                <div className='tempDesc'>
                    <p className='tempDesc'>{data?.weather[0].main}</p>
                    <p className='tempDesc2'>{data?.weather[0].description}</p>
                </div>
                <div className="tempDetails">
                    <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt='imga' className='tempImg' />
                    <p className='temp'>{data?.main.temp}°</p>
                    <div className="tempDts">
                        <p className='tempDt' > <UilTemperature size={18}/> Humidity: {data?.main.humidity}°</p>   
                        <p className='tempDt' ><UilTear size={18}/> Feels like: {data?.main.feels_like}°</p>
                        <p className='tempDt' ><UilWind size={18}/>wind: {data?.wind.speed}/Kmph</p>
                    </div>
                </div>
                <div className="moreDt">
                    <p className='moreDt' ><UilSun size={18}/>Sunrise:<span className='value'> {data?.sunriseTime}</span>|</p>
                    <p className='moreDt' ><UilSunset size={18}/>Sunset:<span className='value'>  {data?.sunsetTime} </span>|</p>
                    <p className='moreDt' ><UilSun size={18}/>High: <span className='value'>  {data?.main.temp_max}°  </span>|</p>
                    <p className='moreDt' ><UilSun size={18}/>Low: <span className='value'>  {data?.main.temp_min}° </span> </p>

                </div>
            </div>
        </div>
    )
}

export default TempDetails