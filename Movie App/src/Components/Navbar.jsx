import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='d-flex bg-info'>
      <ul className='list-unstyled d-flex'>
        <li className='mt-3 me-3 ms-2'><Link to="/">Home</Link></li>
        <li className='mt-3 me-3'><Link to="/movies">Movies</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
