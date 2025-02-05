import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import ThermostatIcon from '@mui/icons-material/Thermostat';

export default function InfoBox({info}){

    
    const weatherImages = {
        sunny: "https://plus.unsplash.com/premium_photo-1667076649924-d784d205cbba?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rainy: "https://images.unsplash.com/photo-1513172128806-2d00531a9f20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHJhaW55JTIwY2l0eXNjYXBlfGVufDB8fDB8fHww",
        snowy: "https://plus.unsplash.com/premium_photo-1671727048351-e33d73b271d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHNub3d5JTIwY2l0eXNjYXBlfGVufDB8fDB8fHww",
        Default: "https://plus.unsplash.com/premium_photo-1681079525383-f0b5bed4b343?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Fallback image
    };
    
    const weatherImage = 
    info.humidity > 80 
        ? weatherImages["rainy"] 
        : info.temp > 15 
        ? weatherImages["sunny"] 
        : weatherImages["snowy"] || weatherImages["Default"];

    
        

    return(
        <div className="infobox">
            <div className='container'>
            <Card sx={{ maxWidth: 400 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={weatherImage}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" >
                    <div className='city'>{info.city} : {info.temp}&deg;C&nbsp;
                    {info.humidity > 80 
                        ? <ThunderstormIcon/>
                        : info.temp > 15 
                        ? <WbSunnyIcon/>
                        : <AcUnitIcon/> || <ThermostatIcon/>} <br /></div>
                    </Typography>
                    <div className='feels'>
                    RealFeel {info.feelsLike}&nbsp;&nbsp;&nbsp;&#x25CF;&nbsp;Weather : {info.weather}
                    </div>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                    <div className='details'>
                        <p className='p1'>Temp : {info.temp}&deg;C</p>
                        <p className='p2'>Min : {info.minTemp}&deg;C &nbsp; Max : {info.maxTemp}&deg;C</p>
                        <p className='p3'>Humidity : {info.humidity}%</p>
                    </div>
                    </Typography>
                </CardContent>
            </Card>
            </div>
        </div>
    );
}