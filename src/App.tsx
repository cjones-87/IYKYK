import { lazy, Suspense } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import ErrorBoundary from './errorHandling/ErrorBoundary';
import useTheme from './customHooks/useTheme';
import NavbarData from './components/navbar/data/NavbarData';

const DarkModeToggle = lazy(() => import('./components/navbar/DarkModeToggle'));
const NavbarLogo = lazy(() => import('./components/navbar/NavbarLogo'));
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
const Footer = lazy(() => import('./components/footer/Footer'));

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

const ErrorFallback = () => (
  <div
    style={{
      color: 'black',
      left: '50%',
      position: 'fixed',
      top: '50%',
      transform: 'translate(-50%, -50%)',
    }}
  >
    <h1>Oops! Something went wrong.</h1>
    <p>Please try again later.</p>
    <button onClick={window.location.reload}>Refresh Page</button>
  </div>
);

const end = (
  <div id='navbarEnd'>
    <ErrorBoundary fallback={<ErrorFallback />}>
      <Suspense fallback={<Loading />}>
        <DarkModeToggle />
      </Suspense>
    </ErrorBoundary>
  </div>
);

const start = (
  <NavLink to='/'>
    <ErrorBoundary fallback={<ErrorFallback />}>
      <Suspense fallback={<Loading />}>
        <NavbarLogo />
      </Suspense>
    </ErrorBoundary>
  </NavLink>
);

const App = () => {
  const { darkTheme } = useTheme();

  return (
    <BrowserRouter>
      <div
        style={{
          background: darkTheme
            ? 'radial-gradient(rgba(0, 128, 0, 1), rgba(0, 0, 0, 1))'
            : 'radial-gradient(rgba(238, 245, 24, 1), rgba(64, 130, 109, 1))',
          color: darkTheme ? '#eef518' : 'whitesmoke',
          height: '100vh',
        }}
      >
        <ErrorBoundary fallback={<ErrorFallback />}>
          <Suspense fallback={<Loading />}>
            <Navbar end={end} navLinks={NavbarData} start={start} />
          </Suspense>
        </ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route
              path='/'
              element={
                <ErrorBoundary fallback={<ErrorFallback />}>
                  <Suspense fallback={<Loading />}>
                    <LandingPage />
                  </Suspense>
                </ErrorBoundary>
              }
            />

            <Route
              path='/home'
              element={
                <ErrorBoundary fallback={<ErrorFallback />}>
                  <Suspense fallback={<Loading />}>
                    <Home />
                  </Suspense>
                </ErrorBoundary>
              }
            />

            <Route
              path='/anime'
              element={
                <ErrorBoundary fallback={<ErrorFallback />}>
                  <Suspense fallback={<Loading />}>
                    <Anime />
                  </Suspense>
                </ErrorBoundary>
              }
            />

            <Route
              path='/cartoons'
              element={
                <ErrorBoundary fallback={<ErrorFallback />}>
                  <Suspense fallback={<Loading />}>
                    <Cartoons />
                  </Suspense>
                </ErrorBoundary>
              }
            />

            <Route
              path='/comics'
              element={
                <ErrorBoundary fallback={<ErrorFallback />}>
                  <Suspense fallback={<Loading />}>
                    <Comics />
                  </Suspense>
                </ErrorBoundary>
              }
            />

            <Route
              path='/computers'
              element={
                <ErrorBoundary fallback={<ErrorFallback />}>
                  <Suspense fallback={<Loading />}>
                    <Computers />
                  </Suspense>
                </ErrorBoundary>
              }
            />

            <Route
              path='/mathematics'
              element={
                <ErrorBoundary fallback={<ErrorFallback />}>
                  <Suspense fallback={<Loading />}>
                    <Mathematics />
                  </Suspense>
                </ErrorBoundary>
              }
            />

            <Route
              path='/music'
              element={
                <ErrorBoundary fallback={<ErrorFallback />}>
                  <Suspense fallback={<Loading />}>
                    <Music />
                  </Suspense>
                </ErrorBoundary>
              }
            />

            <Route
              path='/vehicles'
              element={
                <ErrorBoundary fallback={<ErrorFallback />}>
                  <Suspense fallback={<Loading />}>
                    <Vehicles />
                  </Suspense>
                </ErrorBoundary>
              }
            />
          </Routes>
        </Suspense>

        <ErrorBoundary fallback={<ErrorFallback />}>
          <Suspense fallback={<Loading />}>
            <Footer />
          </Suspense>
        </ErrorBoundary>
      </div>
    </BrowserRouter>
  );
};

export default App;
