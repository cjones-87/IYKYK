import useTheme from '../../customHooks/useTheme';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const DarkModeToggle = () => {
  const { darkTheme, toggleDarkTheme } = useTheme();

  return (
    <button
      id="darkModeToggleButton"
      onClick={toggleDarkTheme}
      style={{
        backgroundColor: darkTheme ? 'rgba(0, 128, 0, 1)' : '#eef518',
        color: darkTheme ? '#eef518' : 'rgba(0, 128, 0, 1)',
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
