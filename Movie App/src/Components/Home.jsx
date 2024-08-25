import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const apiKey = '7a1c19ea3c361a4d3cc53eb70ef8298c';

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${page}`)
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, [page, apiKey]);

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div className='bg-light' style={{padding:'20px 0'}}>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={handlePrevPage} disabled={page === 1} style={{
        outline:'0',
        cursor:'pointer',
        padding:'10px 15px',
        marginRight:'15px',
        marginLeft:'15px',
        color:'black'
      }}>
        Previous
      </button>
      <button onClick={handleNextPage} style={{
        outline:'0',
        cursor:'pointer',
        padding:'10px 15px',
        color:'black'
      }}>Next</button>
    </div>
  );
}
