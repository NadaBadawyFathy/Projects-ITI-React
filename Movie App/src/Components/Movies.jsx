import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const apiKey = '52bbcddeda849047525b51d6f8a12361';

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${page}`);
      const data = await response.json();
      setMovies(data.results);
      console.log(data.results);
    };

    fetchMovies();
  }, [page]);

  return (
    <div className='bg-light'>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={() => setPage(prev => prev + 1)} style={{
        outline:'0',
        cursor:'pointer',
        padding:'10px 15px',
        marginRight:'15px',
        marginLeft:'15px',
        color:'black'
      }}>Next</button>
    </div>
  );
}
