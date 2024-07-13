import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import LightDarkThemeContext from './context/LightDarkThemeContext';
import QuizContext from './context/QuizContext';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <LightDarkThemeContext>
      <QuizContext>
        <App />
      </QuizContext>
    </LightDarkThemeContext>
  </StrictMode>
);
