import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    { id: 1, title: 'The Shining', author: 'Stephen King', genre: 'Horror' },
    { id: 2, title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling', genre: 'Fantasy' },
    { id: 3, title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy' },
    { id: 4, title: 'Dune', author: 'Frank Herbert', genre: 'Science Fiction' },
    { id: 5, title: 'Neuromancer', author: 'William Gibson', genre: 'Science Fiction' }
  ]
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {}
});

export const store = configureStore({
  reducer: {
    books: booksSlice.reducer
  }
});
