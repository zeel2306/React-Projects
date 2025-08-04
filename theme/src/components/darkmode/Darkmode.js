import React, { useState, useEffect } from 'react';
import sun from './sun.jpg';
import moon from './moon.jpg';
import './Darkmode.css';


const Darkmode = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="dark_mode">
      {theme === 'light' ? (
        <img
          src={moon}
          alt="Switch to Dark Mode"
          onClick={() => setTheme('dark')}
          className="theme_icon"
        />
      ) : (
        <img
          src={sun}
          alt="Switch to Light Mode"
          onClick={() => setTheme('light')}
          className="theme_icon"
        />
      )}
    </div>
  );
};

export default Darkmode;
