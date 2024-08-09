import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectHorrorBooks, selectFantasyBooks, selectScienceFictionBooks } from '../selectors';

const genres = ['All', 'Horror', 'Fantasy', 'Science Fiction'];

const BookList = () => {
  const [selectedGenre, setSelectedGenre] = useState('All');

  const books = useSelector((state => {
    switch (selectedGenre) {
      case 'Horror':
        return selectHorrorBooks(state);
      case 'Fantasy':
        return selectFantasyBooks(state);
      case 'Science Fiction':
        return selectScienceFictionBooks(state);
      default:
        return state.books.books;
    }
  }));

  return (
    <div>
      <h1>Book Inventory</h1>
      <select onChange={(e) => setSelectedGenre(e.target.value)} value={selectedGenre}>
        {genres.map((genre) => (
          <option key={genre} value={genre}>{genre}</option>
        ))}
      </select>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;