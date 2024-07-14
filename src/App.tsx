import { lazy, startTransition, useState, Suspense } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import ErrorBoundary from './errorHandling/ErrorBoundary';
import useTheme from './customHooks/useTheme';
import NavbarData from './components/navbar/data/NavbarData';

const QuizTypeToggle = lazy(() => import('./components/navbar/QuizTypeToggle'));
const DarkModeToggle = lazy(() => import('./components/navbar/DarkModeToggle'));
const NavbarLogo = lazy(() => import('./components/navbar/NavbarLogo'));
const Spinner = lazy(() => import('./utils/Spinner'));
const Navbar = lazy(() => import('./components/navbar/Navbar'));
const LandingPage = lazy(() => import('./components/landingPage/LandingPage'));
const Home = lazy(() => import('./components/home/Home'));

// entertainment
const Entertainment = lazy(
  () => import('./components/gameCategories/entertainment/Entertainment')
);
const Anime = lazy(
  () => import('./components/gameCategories/entertainment/Anime')
);
const BoardGames = lazy(
  () => import('./components/gameCategories/entertainment/BoardGames')
);
const Books = lazy(
  () => import('./components/gameCategories/entertainment/Books')
);
const Cartoons = lazy(
  () => import('./components/gameCategories/entertainment/Cartoons')
);
const Comics = lazy(
  () => import('./components/gameCategories/entertainment/Comics')
);
const Film = lazy(
  () => import('./components/gameCategories/entertainment/Film')
);
const Music = lazy(
  () => import('./components/gameCategories/entertainment/Music')
);
const MusicalsAndTheater = lazy(
  () => import('./components/gameCategories/entertainment/MusicalsAndTheater')
);
const Television = lazy(
  () => import('./components/gameCategories/entertainment/Television')
);
const VideoGames = lazy(
  () => import('./components/gameCategories/entertainment/VideoGames')
);

// environment
const Environment = lazy(
  () => import('./components/gameCategories/environment/Environment')
);
const Animals = lazy(
  () => import('./components/gameCategories/environment/Animals')
);
const Geography = lazy(
  () => import('./components/gameCategories/environment/Geography')
);

// misc
const Misc = lazy(() => import('./components/gameCategories/misc/Misc'));
const Random = lazy(() => import('./components/gameCategories/misc/Random'));
const GeneralKnowledge = lazy(
  () => import('./components/gameCategories/misc/GeneralKnowledge')
);

// pop culture
const PopCulture = lazy(
  () => import('./components/gameCategories/popCulture/PopCulture')
);
const Celebrities = lazy(
  () => import('./components/gameCategories/popCulture/Celebrities')
);
const Sports = lazy(
  () => import('./components/gameCategories/popCulture/Sports')
);
const Vehicles = lazy(
  () => import('./components/gameCategories/popCulture/Vehicles')
);

// science
const Science = lazy(
  () => import('./components/gameCategories/science/Science')
);
const Computers = lazy(
  () => import('./components/gameCategories/science/Computers')
);
const Gadgets = lazy(
  () => import('./components/gameCategories/science/Gadgets')
);
const Mathematics = lazy(
  () => import('./components/gameCategories/science/Mathematics')
);
const ScienceAndNature = lazy(
  () => import('./components/gameCategories/science/ScienceAndNature')
);

// social science
const SocialScience = lazy(
  () => import('./components/gameCategories/socialScience/SocialScience')
);
const Art = lazy(() => import('./components/gameCategories/socialScience/Art'));
const History = lazy(
  () => import('./components/gameCategories/socialScience/History')
);
const Mythology = lazy(
  () => import('./components/gameCategories/socialScience/Mythology')
);
const Politics = lazy(
  () => import('./components/gameCategories/socialScience/Politics')
);

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
    <button onClick={() => window.location.reload()}>Refresh Page</button>
  </div>
);

const end = (
  <div id='navbarEnd' style={{ color: 'whitesmoke' }}>
    <span style={{ paddingRight: '1rem', textShadow: '2px 2px 2px indigo' }}>
      switch your quiz type
    </span>
    <ErrorBoundary fallback={<ErrorFallback />}>
      <Suspense fallback={<Loading />}>
        <QuizTypeToggle />
      </Suspense>
    </ErrorBoundary>

    <span style={{ paddingRight: '1rem', textShadow: '2px 2px 2px indigo' }}>
      switch light/dark mode
    </span>
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
  const [showHomePage, setShowHomePage] = useState(false);

  const toggleHomePage = () => {
    startTransition(() => {
      setShowHomePage((prev) => !prev);
    });
  };

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
                    {showHomePage ? (
                      <Home />
                    ) : (
                      <LandingPage setShowHomePage={toggleHomePage} />
                    )}
                  </Suspense>
                </ErrorBoundary>
              }
            />

            {/* entertainment */}
            <Route
              path='/entertainment'
              element={
                <ErrorBoundary fallback={<ErrorFallback />}>
                  <Suspense fallback={<Loading />}>
                    <Entertainment />
                  </Suspense>
                </ErrorBoundary>
              }
            />
            <Route
              path='/entertainment/anime_&_manga'
              element={
                <ErrorBoundary fallback={<ErrorFallback />}>
                  <Suspense fallback={<Loading />}>
                    <Anime />
                  </Suspense>
                </ErrorBoundary>
              }
            />
            <Route
              path='/entertainment/board_games'
              element={
                <ErrorBoundary fallback={<ErrorFallback />}>
                  <Suspense fallback={<Loading />}>
                    <BoardGames />
                  </Suspense>
                </ErrorBoundary>
              }
            />
            <Route
              path='/entertainment/books'
              element={
                <ErrorBoundary fallback={<ErrorFallback />}>
                  <Suspense fallback={<Loading />}>
                    <Books />
                  </Suspense>
                </ErrorBoundary>
              }
            />
            <Route
              path='/entertainment/cartoons'
              element={
                <ErrorBoundary fallback={<ErrorFallback />}>
                  <Suspense fallback={<Loading />}>
                    <Cartoons />
                  </Suspense>
                </ErrorBoundary>
              }
            />
            <Route
              path='/entertainment/comics'
              element={
                <ErrorBoundary fallback={<ErrorFallback />}>
                  <Suspense fallback={<Loading />}>
                    <Comics />
                  </Suspense>
                </ErrorBoundary>
              }
            />
            <Route
              path='/entertainment/film'
              element={
                <ErrorBoundary fallback={<ErrorFallback />}>
                  <Suspense fallback={<Loading />}>
                    <Film />
                  </Suspense>
                </ErrorBoundary>
              }
            />
            <Route
              path='/entertainment/music'
              element={
                <ErrorBoundary fallback={<ErrorFallback />}>
                  <Suspense fallback={<Loading />}>
                    <Music />
                  </Suspense>
                </ErrorBoundary>
              }
            />
            <Route
              path='/entertainment/musicals_&_theater'
              element={
                <ErrorBoundary fallback={<ErrorFallback />}>
                  <Suspense fallback={<Loading />}>
                    <MusicalsAndTheater />
                  </Suspense>
                </ErrorBoundary>
              }
            />
            <Route
              path='/entertainment/Television'
              element={
                <ErrorBoundary fallback={<ErrorFallback />}>
                  <Suspense fallback={<Loading />}>
                    <Television />
                  </Suspense>
                </ErrorBoundary>
              }
            />
            <Route
              path='/entertainment/video_games'
              element={
                <ErrorBoundary fallback={<ErrorFallback />}>
                  <Suspense fallback={<Loading />}>
                    <VideoGames />
                  </Suspense>
                </ErrorBoundary>
              }
            />
            {/* environment */}
            <Route
              path='/environment'
              element={
                <ErrorBoundary fallback={<ErrorFallback />}>
                  <Suspense fallback={<Loading />}>
                    <Environment />
                  </Suspense>
                </ErrorBoundary>
              }
            />
            <Route
              path='/environment/Animals'
              element={
                <ErrorBoundary fallback={<ErrorFallback />}>
                  <Suspense fallback={<Loading />}>
                    <Animals />
                  </Suspense>
                </ErrorBoundary>
              }
            />
            <Route
              path='/environment/Geography'
              element={
                <ErrorBoundary fallback={<ErrorFallback />}>
                  <Suspense fallback={<Loading />}>
                    <Geography />
                  </Suspense>
                </ErrorBoundary>
              }
            />
            {/* misc */}
            <Route
              path='/misc'
              element={
                <ErrorBoundary fallback={<ErrorFallback />}>
                  <Suspense fallback={<Loading />}>
                    <Misc />
                  </Suspense>
                </ErrorBoundary>
              }
            />
            <Route
              path='/misc/general_knowledge'
              element={
                <ErrorBoundary fallback={<ErrorFallback />}>
                  <Suspense fallback={<Loading />}>
                    <GeneralKnowledge />
                  </Suspense>
                </ErrorBoundary>
              }
            />
            <Route
              path='/misc/random'
              element={
                <ErrorBoundary fallback={<ErrorFallback />}>
                  <Suspense fallback={<Loading />}>
                    <Random />
                  </Suspense>
                </ErrorBoundary>
              }
            />
            {/* pop culture */}
            <Route
              path='/pop_culture'
              element={
                <ErrorBoundary fallback={<ErrorFallback />}>
                  <Suspense fallback={<Loading />}>
                    <PopCulture />
                  </Suspense>
                </ErrorBoundary>
              }
            />
            <Route
              path='/popular_culture/celebrities'
              element={
                <ErrorBoundary fallback={<ErrorFallback />}>
                  <Suspense fallback={<Loading />}>
                    <Celebrities />
                  </Suspense>
                </ErrorBoundary>
              }
            />
            <Route
              path='/popular_culture/sports'
              element={
                <ErrorBoundary fallback={<ErrorFallback />}>
                  <Suspense fallback={<Loading />}>
                    <Sports />
                  </Suspense>
                </ErrorBoundary>
              }
            />
            <Route
              path='/popular_culture/vehicles'
              element={
                <ErrorBoundary fallback={<ErrorFallback />}>
                  <Suspense fallback={<Loading />}>
                    <Vehicles />
                  </Suspense>
                </ErrorBoundary>
              }
            />
            {/* science */}
            <Route
              path='/science'
              element={
                <ErrorBoundary fallback={<ErrorFallback />}>
                  <Suspense fallback={<Loading />}>
                    <Science />
                  </Suspense>
                </ErrorBoundary>
              }
            />
            <Route
              path='/science/computers'
              element={
                <ErrorBoundary fallback={<ErrorFallback />}>
                  <Suspense fallback={<Loading />}>
                    <Computers />
                  </Suspense>
                </ErrorBoundary>
              }
            />
            <Route
              path='/science/gadgets'
              element={
                <ErrorBoundary fallback={<ErrorFallback />}>
                  <Suspense fallback={<Loading />}>
                    <Gadgets />
                  </Suspense>
                </ErrorBoundary>
              }
            />
            <Route
              path='/science/mathematics'
              element={
                <ErrorBoundary fallback={<ErrorFallback />}>
                  <Suspense fallback={<Loading />}>
                    <Mathematics />
                  </Suspense>
                </ErrorBoundary>
              }
            />
            <Route
              path='/science/science_&_nature'
              element={
                <ErrorBoundary fallback={<ErrorFallback />}>
                  <Suspense fallback={<Loading />}>
                    <ScienceAndNature />
                  </Suspense>
                </ErrorBoundary>
              }
            />
            {/* social science */}
            <Route
              path='/social_science'
              element={
                <ErrorBoundary fallback={<ErrorFallback />}>
                  <Suspense fallback={<Loading />}>
                    <SocialScience />
                  </Suspense>
                </ErrorBoundary>
              }
            />
            <Route
              path='/social_science/art'
              element={
                <ErrorBoundary fallback={<ErrorFallback />}>
                  <Suspense fallback={<Loading />}>
                    <Art />
                  </Suspense>
                </ErrorBoundary>
              }
            />
            <Route
              path='/social_science/history'
              element={
                <ErrorBoundary fallback={<ErrorFallback />}>
                  <Suspense fallback={<Loading />}>
                    <History />
                  </Suspense>
                </ErrorBoundary>
              }
            />
            <Route
              path='/social_science/mythology'
              element={
                <ErrorBoundary fallback={<ErrorFallback />}>
                  <Suspense fallback={<Loading />}>
                    <Mythology />
                  </Suspense>
                </ErrorBoundary>
              }
            />
            <Route
              path='/social_science/politics'
              element={
                <ErrorBoundary fallback={<ErrorFallback />}>
                  <Suspense fallback={<Loading />}>
                    <Politics />
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
