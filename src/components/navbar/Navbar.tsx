import { useCallback, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import NavbarData from './data/NavbarData';
import NavbarLogo from './NavbarLogo';

const Navbar = () => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const [burgerActive, setBurgerActive] = useState(false);

  const handleBurgerClick = useCallback(() => {
    setBurgerActive((current) => !current);
  }, []);

  const handleNavLinkClick = useCallback(() => {
    setBurgerActive((current) => !current);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767) setBurgerActive(false);

      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [dimensions.height, dimensions.width]);

  return (
    <div style={{ width: dimensions.width }}>
      <nav className="navbar">
        <NavLink className="navbarLogo" to="/">
          <NavbarLogo />
        </NavLink>

        <ul className={`navMenu ${burgerActive ? 'active' : ''}`}>
          {NavbarData.map((data, index) => (
            <li className="navItem" key={index}>
              <NavLink to={data.href} onClick={handleNavLinkClick}>
                <button className="navLink button">{data.content}</button>
              </NavLink>
            </li>
          ))}
        </ul>
        <div
          className={`navBurger ${burgerActive ? 'active' : ''}`}
          onClick={handleBurgerClick}
        >
          <div className="barGroup">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
