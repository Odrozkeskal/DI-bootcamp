import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CategoryPage from './components/CategoryPage';
import SearchPage from './components/SearchPage';
import './App.css';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:category" element={<CategoryPage />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  </Router>
  );
}

export default App;
