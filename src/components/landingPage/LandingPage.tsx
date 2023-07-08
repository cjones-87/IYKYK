import { useNavigate } from 'react-router-dom';
import useWindowDimensions from '../../customHooks/useWindowDimensions';
import OpenUp from '../../audio/OpenUp.mp3';
import AccessGrantedComputerVoice from '../../audio/AccessGrantedComputerVoice.mp3';
import LandingPageLogo from './LandingPageLogo';

const LandingPage: React.FC = () => {
  const { width } = useWindowDimensions();
  const navigate = useNavigate();

  const onLandingPageButtonClick = () => {
    setTimeout(() => navigate('./home'), 2000);

    const audio = new Audio(OpenUp);
    const audio2 = new Audio(AccessGrantedComputerVoice);

    const playAudio = () => {
      audio.play();
    };
    const playAudio2 = () => {
      setTimeout(() => audio2.play(), 500);
    };
    playAudio();
    playAudio2();
  };

  return (
    <div
      className="landingPageContainer centered"
      id="landingPageContainer"
      style={{ width: width / 2 }}
    >
      <div className="landingPageTextContainer">
        <h1 className="welcomeText">
          Get Your Brain Poppin' with Trivia Quizzes! Unlock Your Genius with
          All I Know Is, If You Know, You Know Quiz Game. Cuz IYKYK!
        </h1>
        <h2 className="welcomeText2">
          Ignite your brainpower and conquer the trivia universe! Join the
          ultimate mind-melding adventure that's both fun and free. Boost your
          knowledge, sharpen those ninja skills, and let's dive into the wild
          world of trivia together!
        </h2>
        <button
          id="landingPageButton"
          className="button"
          onClick={onLandingPageButtonClick}
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
