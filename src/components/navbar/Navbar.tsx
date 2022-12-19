import React, { useEffect, useState } from 'react';

import { NavLink } from 'react-router-dom';

import IYKYK from '../../images/AIKI-IYKYK.png';

const Navbar: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    const handleResize = () =>
      setDimensions({ height: window.innerHeight, width: window.innerWidth });

    window.addEventListener('resize', handleResize);
  }, [dimensions.width, dimensions.height]);
  return (
    <>
      <nav className="navbar" style={{ width: dimensions.width }}>
        <div className="nav-container">
          <NavLink to="/home" className="nav-logo">
            <img
              alt="site logo"
              height="70vh"
              src={IYKYK}
              style={{
                borderRadius: '50%',
                display: 'flex',
                position: 'static',
              }}
            />
          </NavLink>
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
