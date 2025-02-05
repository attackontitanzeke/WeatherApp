import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react';
import "./Weather.css"


export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"Mumbai",
        feelsLike:24.04,
        humidity:24.04,
        maxTemp:24.04,
        minTemp:24.04,
        temp:25.05,
        weather:"fog",
    });

    const updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    };

    return(
        <div style={{textAlign:"center"}} className='weather-app'>
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}