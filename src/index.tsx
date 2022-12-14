import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Navbar from './components/navbar/Navbar';
import LandingPage from './components/landingPage/LandingPage';
import Home from './components/home/Home';
import Anime from './components/anime/Anime';
import Cartoons from './components/cartoons/Cartoons';
import Comics from './components/comics/Comics';
import Computers from './components/computers/Computers';
import Mathematics from './components/mathematics/Mathematics';
import Music from './components/music/Music';
import Vehicles from './components/vehicles/Vehicles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/anime" element={<Anime />} />
        <Route path="/cartoons" element={<Cartoons />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/computers" element={<Computers />} />
        <Route path="/mathematics" element={<Mathematics />} />
        <Route path="/music" element={<Music />} />
        <Route path="/vehicles" element={<Vehicles />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
