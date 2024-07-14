import React, {
  useCallback,
  useState,
  startTransition,
  ReactNode,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { NavbarObject } from '../../utils/utils';
import useTheme from '../../customHooks/useTheme';

interface NavbarProps {
  end: ReactNode;
  navLinks: Array<NavbarObject>;
  start: ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ end, navLinks, start }) => {
  const { darkTheme } = useTheme();
  const navigate = useNavigate();
  const [burgerActive, setBurgerActive] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  const handleBurgerClick = useCallback(() => {
    setBurgerActive((current) => !current);
  }, []);

  const handleNavLinkClick = useCallback(
    (href: string) => {
      startTransition(() => {
        navigate(href);
        setBurgerActive((current) => !current);
      });
    },
    [navigate]
  );

  const handleSubNavLinkClick = useCallback(
    (href: string, event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
      event.stopPropagation();
      handleNavLinkClick(href);
    },
    [handleNavLinkClick]
  );

  const handleDropdownToggle = (header: string) => {
    setDropdownOpen((current) => (current === header ? null : header));
  };

  return (
    <nav
      className='navbar'
      style={{
        background: !darkTheme
          ? `radial-gradient(rgba(0, 128, 0, 1), rgba(0, 0, 0, 1))`
          : `radial-gradient(#eef518, rgba(64, 130, 109, 1))`,
      }}
    >
      <div id='navbarStart'>
        {start}
        <ul className={`navMenu ${burgerActive ? 'active' : ''}`}>
          {navLinks.map((data, index) => (
            <li
              className='navItem'
              key={index}
              onClick={() => handleNavLinkClick(data.href)}
              onMouseEnter={() => handleDropdownToggle(data.header)}
              onMouseLeave={() => handleDropdownToggle(data.header)}
            >
              <button className='navLink button'>{data.header}</button>
              {data.dropdown && dropdownOpen === data.header && (
                <ul className='dropdownMenu'>
                  {data.options?.map((option, idx) => (
                    <li
                      key={idx}
                      onClick={(event) =>
                        handleSubNavLinkClick(option.href, event)
                      }
                    >
                      {option.content}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <div
          className={`navBurger ${burgerActive ? 'active' : ''}`}
          onClick={handleBurgerClick}
        >
          <div className='barGroup'>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
          </div>
        </div>
      </div>
      <div>{end}</div>
    </nav>
  );
};

export default Navbar;
