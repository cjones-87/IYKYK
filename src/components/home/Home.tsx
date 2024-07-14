import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className='centered' id='homeContainer'>
      <div id='homeHeader1'>
        Welcome, Quiz Enthusiasts, to All I Know Is, IYKYK!
      </div>
      <div id='homeHeader2'>Get Ready to Quiz! IYKYK!</div>
      <div id='homeHeader3'>
        Discover an array of mind-bending quizzes across diverse categories.
        Brace yourself for a collection of thrilling multiple-choice challenges
        that will keep you entertained for hours!
        <h6>Our Quiz Categories Await!</h6>
      </div>
      <div id='section'>
        <div id='section1'>
          <NavLink to='/entertainment'>Entertainment</NavLink>
        </div>
        <div id='section2'>
          <NavLink to='/environment'>Environment</NavLink>
        </div>
        <div id='section1'>
          <NavLink to='/misc'>Misc</NavLink>
        </div>
      </div>

      <div id='section'>
        <div id='section2'></div>
        <div id='section1'></div>
        <div id='section2'></div>
      </div>

      <div id='section'>
        <div id='section1'>
          <NavLink to='/pop_culture'>Pop Culture</NavLink>
        </div>
        <div id='section2'>
          <NavLink to='/science'>Science</NavLink>
        </div>
        <div id='section1'>
          <NavLink to='/social_science'>Social Science</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
