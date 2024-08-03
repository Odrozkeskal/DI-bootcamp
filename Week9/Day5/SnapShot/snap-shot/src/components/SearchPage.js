import React, { useState } from 'react';
import axios from 'axios';
import ImageCard from './ImageCard';
import Pagination from './Pagination';

const API_KEY = 'YOUR_PEXELS_API_KEY';
const PER_PAGE = 30;

function SearchPage() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  const handleSearch = async () => {
    const response = await axios.get(`https://api.pexels.com/v1/search`, {
      headers: { Authorization: API_KEY },
      params: {
        query: query,
        per_page: PER_PAGE,
        page: page,
      },
    });
    setImages(response.data.photos);
  };

  return (
    <div>
      <h1>Search Images</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for images"
      />
      <button onClick={handleSearch}>Search</button>
      <div className="image-gallery">
        {images.map((image) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
      <Pagination currentPage={page} onPageChange={setPage} />
    </div>
  );
}

export default SearchPage;