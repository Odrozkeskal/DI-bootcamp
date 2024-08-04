import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(storedFavorites);
  }, []);

  const handleRemoveFromFavorites = (cityId) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== cityId);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div>
      {favorites.map((fav) => (
        <Card key={fav.id} sx={{ marginTop: 2 }}>
          <CardContent>
            <Typography variant="h5">{fav.name}</Typography>
            <Typography variant="h6">{fav.main.temp} °C</Typography>
            <Typography>{fav.weather[0].description}</Typography>
            <Button variant="contained" onClick={() => handleRemoveFromFavorites(fav.id)}>Remove from Favorites</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default FavoritesPage;