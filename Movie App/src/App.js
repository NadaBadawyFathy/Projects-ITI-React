import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import MovieDetail from './Components/MovieDetails';
import Navbar from './Components/Navbar';
import Movies from './Components/Movies';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
