// src/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ textAlign: 'center', paddingTop: '50px' }}>
      <h1>🏠 Welcome to the User Home Page</h1>
      <Link to="/admin">
        <button>Go to Admin Dashboard</button>
      </Link>
    </div>
  );
}

export default Home;
