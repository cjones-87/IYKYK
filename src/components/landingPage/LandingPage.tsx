import React, { useCallback } from 'react';
import useWindowDimensions from '../../customHooks/useWindowDimensions';
import LandingPageLogo from './LandingPageLogo';

interface LandingPageProps {
  setShowHomePage: React.Dispatch<React.SetStateAction<boolean>>;
}

const LandingPage: React.FC<LandingPageProps> = ({ setShowHomePage }) => {
  const { width } = useWindowDimensions();

  const handleButtonClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      setShowHomePage(true);
    },
    [setShowHomePage]
  );

  return (
    <div
      className='landingPageContainer centered'
      id='landingPageContainer'
      style={{ width: width / 2 }}
    >
      <div className='landingPageTextContainer'>
        <h1 className='welcomeText'>
          Get Your Brain Poppin' with Trivia Quizzes! Unlock Your Genius with
          All I Know Is, If You Know, You Know Quiz Game. Cuz IYKYK!
        </h1>
        <h2 className='welcomeText2'>
          Ignite your brainpower and conquer the trivia universe! Join the
          ultimate mind-melding adventure that's both fun and free. Boost your
          knowledge, sharpen those ninja skills, and let's dive into the wild
          world of trivia together!
        </h2>
        <button
          id='landingPageButton'
          className='button'
          onClick={handleButtonClick}
        >
          Get Your Quiz On!
        </button>
      </div>

      <div style={{ width: width + 20 }}>
        <LandingPageLogo />
      </div>
    </div>
  );
};

export default LandingPage;
