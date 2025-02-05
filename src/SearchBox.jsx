import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox({updateInfo}){

    let [city, setCity] = useState("");
    let [error,setError] = useState(false);
    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "1515859f328e9a6a60e351a5d17660ec";

    const getWeatherInfo = async (city)=>{
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result = {
            city:jsonResponse.name,
            temp:jsonResponse.main.temp,
            minTemp:jsonResponse.main.temp_min,
            maxTemp:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            feelsLike:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description,
        }
        console.log(result)
        return result;
        }catch(err){
            throw err;
        }
    };

    let SearchHandle=(evt)=>{
        setCity(evt.target.value);
    };

    let SubmitHandle = async (evt)=>{
        try {
            evt.preventDefault();
            console.log(city);
            const newInfo = await getWeatherInfo(city);
            updateInfo(newInfo);
            setCity("")
            setError(false)
        } catch (err) {
            setError(true)
        }
    };


    return(
        <div className='searchbox'>
            <form onSubmit={SubmitHandle}>
             <TextField id="city" label="City Name" variant="outlined" value={city} required onChange={SearchHandle} />
             <br />
             <Button variant="outlined" type='submit' id='btt'>
               Search
            </Button>
            
            <div className='atBox'>
             {error && <Alert variant="filled" severity="error" className='alert' component={'span'} > "No Such Place Found!" </Alert>}
             </div>
            
            </form>
        </div>
    );
}