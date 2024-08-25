import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const apiKey = '52bbcddeda849047525b51d6f8a12361';

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {setMovie(data)
      console.log(data);});
  }, [id]);
let imgg=`https://image.tmdb.org/t/p/original${movie.poster_path}`
  return (
    <div className='w-25 m-auto  bg-light'>
      <img src={imgg} alt="" className='w-100 border rounded-circle'/>
      <h1 className=' ps-2'>{movie.title}</h1>
      <p className='  align-content-center ps-2 justify-content-center'>{movie.overview}</p>
    </div>
  );
}
