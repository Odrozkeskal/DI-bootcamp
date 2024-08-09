import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialBooks = [
  { id: 1, title: 'The Shining', author: 'Stephen King', genre: 'Horror' },
  { id: 2, title: 'Dune', author: 'Frank Herbert', genre: 'Science Fiction' },
  { id: 3, title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy' },

];

const booksSlice = createSlice({
  name: 'books',
  initialState: { books: initialBooks },
  reducers: {},
});

export const store = configureStore({
  reducer: {
    books: booksSlice.reducer,
  },
});