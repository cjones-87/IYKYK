import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <>
      <nav className="navbar">
        <NavLink to="/" className="nav-logo">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;All I Know Is, IYKYK &nbsp;&nbsp;
          <i className="fas fa-gamepad"></i>
        </NavLink>
        <div className="nav-container">
          <ul className={isClicked ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive ? 'nav-links active' : 'nav-links'
                }
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/anime"
                className={({ isActive }) =>
                  isActive ? 'nav-links active' : 'nav-links'
                }
                onClick={handleClick}
              >
                Anime
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/cartoons"
                className={({ isActive }) =>
                  isActive ? 'nav-links active' : 'nav-links'
                }
                onClick={handleClick}
              >
                Cartoons
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/comics"
                className={({ isActive }) =>
                  isActive ? 'nav-links active' : 'nav-links'
                }
                onClick={handleClick}
              >
                Comics
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/computers"
                className={({ isActive }) =>
                  isActive ? 'nav-links active' : 'nav-links'
                }
                onClick={handleClick}
              >
                Computers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/mathematics"
                className={({ isActive }) =>
                  isActive ? 'nav-links active' : 'nav-links'
                }
                onClick={handleClick}
              >
                Mathematics
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/music"
                className={({ isActive }) =>
                  isActive ? 'nav-links active' : 'nav-links'
                }
                onClick={handleClick}
              >
                Music
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/vehicles"
                className={({ isActive }) =>
                  isActive ? 'nav-links active' : 'nav-links'
                }
                onClick={handleClick}
              >
                Vehicles
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={isClicked ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
