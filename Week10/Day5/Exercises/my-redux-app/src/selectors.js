import { createSelector } from '@reduxjs/toolkit';

const selectBooks = (state) => state.books.books;
const selectBooksByGenre = (genre) =>
  createSelector(
    [selectBooks],
    (books) => books.filter((book) => book.genre === genre)
  );

export const selectHorrorBooks = selectBooksByGenre('Horror');
export const selectFantasyBooks = selectBooksByGenre('Fantasy');
export const selectScienceFictionBooks = selectBooksByGenre('Science Fiction');