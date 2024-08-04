import React, { useState } from 'react';
import { TextField, Button, Card, CardContent, Typography } from '@mui/material';

const WeatherPage = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    const apiKey = 'a91c77987adf81f5282b4fe3e80eb0ad'; 
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();
    setWeather(data);
  };

  const handleAddToFavorites = () => {
    if (weather) {
      const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
      const newFavorites = [...favorites, weather];
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
    }
  };

  return (
    <div>
      <TextField
        label="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        variant="outlined"
        sx={{ marginRight: 2 }}
      />
      <Button variant="contained" onClick={fetchWeather}>Get Weather</Button>
      {weather && (
        <Card sx={{ marginTop: 2 }}>
          <CardContent>
            <Typography variant="h5">{weather.name}</Typography>
            <Typography variant="h6">{weather.main.temp} °C</Typography>
            <Typography>{weather.weather[0].description}</Typography>
            <Button variant="contained" onClick={handleAddToFavorites}>Add to Favorites</Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default WeatherPage;