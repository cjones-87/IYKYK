import useTheme from '../../customHooks/useTheme';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const DarkModeToggle = () => {
  const { darkTheme, toggleDarkTheme } = useTheme();

  return (
    <button
      id="darkModeToggleButton"
      onClick={toggleDarkTheme}
      style={{
        backgroundColor: darkTheme ? 'whitesmoke' : 'indigo',
        color: darkTheme ? 'indigo' : 'whitesmoke',
      }}
    >
      {darkTheme ? (
        <MdLightMode size={'1.5rem'} />
      ) : (
        <MdDarkMode size={'1.5rem'} />
      )}
    </button>
  );
};

export default DarkModeToggle;
