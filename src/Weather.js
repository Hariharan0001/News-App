import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function Weather() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          setLatitude(latitude);
          setLongitude(longitude);
          setError(null);
          getWeather(); 
        },
        error => {
          setError(error.message);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  };
  
  const getWeather = async () => {
    try {
      if (latitude !== null && longitude !== null) {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=8c24f0c7d84b6e351bcb94ece31eacca`);
        if (!res.ok) {
          throw new Error('Failed to fetch weather data. Response status: ' + res.status);
        }
        const data = await res.json();
        setResponse(data);
      }
    } catch (error) {
      setError('Error fetching weather data: ' + error.message);
    }
  };
  
  useEffect(() => {
    getLocation();
  }, [latitude,longitude]);
  if(response){
    console.log(response)
  return (
    <div id="weatherdiv" className="weather-container">
      <h2>{response.name} ⛅</h2>
      <p>Temperature: {response.main.temp}°C</p>
      <p>Weather: {response.weather[0].description}</p>
    </div>
  );
  }
  else{
    <>
    <h1>Loading...</h1>
    </>
  }
  };

export default Weather;
