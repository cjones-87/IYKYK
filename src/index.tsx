import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Anime from './components/anime/Anime';
import Comics from './components/comics/Comics';
import Music from './components/music/Music';
import Vehicles from './components/vehicles/Vehicles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/anime" element={<Anime />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/music" element={<Music />} />
        <Route path="/vehicles" element={<Vehicles />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
