import React from 'react';

const Home = () => {
  return (
    <div className="centered">
      <h1>
        <big>
          <b>All I Know Is, IYKYK: Quiz Website</b>
        </big>
      </h1>
      <p>
        Welcome to <b>All I Know Is, IYKYK</b>!
      </p>

      <p>
        We have a variety of quizzes spanning multiple categories. Here you will
        find a collection of multiple choice quizzes to choose from.
      </p>
      <h2>Our Quiz Categories</h2>
      <div id="section">
        <div id="section-1">Anime</div>
        <div id="section-2">Cartoons</div>
        <div id="section-1">Comics</div>
      </div>
      <div id="section">
        <div id="section-2">Computers</div>
        <div id="section-1">Mathematics</div>
        <div id="section-2">Music</div>
      </div>
      <div id="section">
        <div id="section-1"></div>
        <div id="section-2">Vehicles</div>
        <div id="section-1"></div>
      </div>
    </div>
  );
};

export default Home;
