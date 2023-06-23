import { lazy, Fragment, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Spinner = lazy(() => import('./utils/Spinner'));
const Navbar = lazy(() => import('./components/navbar/Navbar'));
const LandingPage = lazy(() => import('./components/landingPage/LandingPage'));
const Home = lazy(() => import('./components/home/Home'));
const Anime = lazy(() => import('./components/anime/Anime'));
const Cartoons = lazy(() => import('./components/cartoons/Cartoons'));
const Comics = lazy(() => import('./components/comics/Comics'));
const Computers = lazy(() => import('./components/computers/Computers'));
const Mathematics = lazy(() => import('./components/mathematics/Mathematics'));
const Music = lazy(() => import('./components/music/Music'));
const Vehicles = lazy(() => import('./components/vehicles/Vehicles'));

export const Loading = () => (
  <div
    style={{
      left: '50%',
      position: 'fixed',
      top: '50%',
      transform: 'translate(-50%, -50%)',
    }}
  >
    <Spinner />
  </div>
);

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
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
        </Suspense>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
