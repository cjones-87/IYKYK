import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="/" style={{ lineHeight: '6rem' }}>
        Home
      </a>
      <a href="/anime" style={{ lineHeight: '6rem' }}>
        Anime
      </a>
      <a href="/comics" style={{ lineHeight: '6rem' }}>
        Comics
      </a>
      <a href="/music" style={{ lineHeight: '6rem' }}>
        Music
      </a>
    </div>
  );
};

export default Navbar;
