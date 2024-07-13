import useTheme from '../../customHooks/useTheme';

const DarkModeToggle = () => {
  const { darkTheme, toggleDarkTheme } = useTheme();

  return (
    <label className='switch' title={darkTheme ? 'light mode' : 'dark mode'}>
      <input checked={darkTheme} type='checkbox' onChange={toggleDarkTheme} />
      <span className='slider round'></span>
    </label>
  );
};

export default DarkModeToggle;
