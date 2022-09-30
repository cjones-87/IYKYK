import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Anime from './components/anime/Anime';
import Comics from './components/comics/Comics';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/anime" element={<Anime />} />
        <Route path="/comics" element={<Comics />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
