import React from 'react';

import OpenUp from '../../audio/OpenUp.mp3';
import AccessGrantedComputerVoice from '../../audio/AccessGrantedComputerVoice.mp3';

const LandingPage: React.FC = () => {
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setTimeout(() => (window.location.href = './home'), 2000);

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
    <div className="centered">
      <p>Welcome!</p>
      <p>All I Know Is!</p>
      <p>IYKYK!</p>
      <div>
        <button className="button" onClick={onClick}>
          Get Your Quiz On!
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
