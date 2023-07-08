import { useCallback, useState, FC, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavbarObject } from '../../utils/utils';
import useTheme from '../../customHooks/useTheme';
import useWindowDimensions from '../../customHooks/useWindowDimensions';

interface NavbarProps {
  end: ReactNode;
  navLinks: Array<NavbarObject>;
  start: ReactNode;
}

const Navbar: FC<NavbarProps> = ({ end, navLinks, start }) => {
  const { darkTheme } = useTheme();
  const { width } = useWindowDimensions();

  const navigate = useNavigate();

  const [burgerActive, setBurgerActive] = useState(false);

  const handleBurgerClick = useCallback(() => {
    setBurgerActive((current) => !current);
  }, []);

  const handleNavLinkClick = useCallback(
    (href: string) => {
      navigate(href);
      setBurgerActive((current) => !current);
    },
    [navigate]
  );

  return (
    <nav
      className="navbar"
      style={{
        background: !darkTheme
          ? `radial-gradient(rgba(0, 128, 0, 1), rgba(0, 0, 0, 1))`
          : `radial-gradient(#eef518, rgba(64, 130, 109, 1))`,
        width,
      }}
    >
      <div id="navbarStart">
        {start}
        <ul className={`navMenu ${burgerActive ? 'active' : ''}`}>
          {navLinks.map((data, index) => (
            <li className="navItem" key={index}>
              <button
                className="navLink button"
                onClick={() => handleNavLinkClick(data.href)}
              >
                {data.content}
              </button>
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
      </div>

      <div>{end}</div>
    </nav>
  );
};

export default Navbar;
