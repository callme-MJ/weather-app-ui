import React from 'react'
import './tempDetails.css'
import {
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
} from "@iconscout/react-unicons";

function TempDetails() {
    return (
        <div>
            <div className="tempContainer">
                <div className='tempDesc'>
                    <p className='tempDesc'>Cloudy</p>
                </div>
                <div className="tempDetails">
                    <img src='http://openweathermap.org/img/wn/01d@2x.png' alt='imga' className='tempImg' />
                    <p className='temp'>32°</p>
                    <div className="tempDts">
                        <p className='tempDt' > <UilTemperature size={18}/> Humidity: 32°</p>   
                        <p className='tempDt' ><UilTear size={18}/> Feels like: 32°</p>
                        <p className='tempDt' ><UilWind size={18}/>Wind: 32/Kmph</p>
                    </div>
                </div>
                <div className="moreDt">
                    <p className='moreDt' ><UilSun size={18}/>Sunrise:<span className='value'>  6:15 AM </span>|</p>
                    <p className='moreDt' ><UilSunset size={18}/>Sunrise:<span className='value'>  6:15 AM </span>|</p>
                    <p className='moreDt' ><UilSun size={18}/>High: <span className='value'>  42°  </span>|</p>
                    <p className='moreDt' ><UilSun size={18}/>Low: <span className='value'>  22° </span> </p>

                </div>
            </div>
        </div>
    )
}

export default TempDetails