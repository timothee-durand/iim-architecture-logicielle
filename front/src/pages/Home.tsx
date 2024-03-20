import React from 'react';
import { Link } from 'react-router-dom';
import RightArrow from '../assets/RightArrow.png'; // Make sure the path is correct

/**
 * Home component is the landing page of the application.
 * It provides navigation to the player creation, scenario creation, and game start pages.
 * @returns {React.FC} The rendered component
 */
const Home: React.FC = () => {
  return (
      // Use a React fragment to wrap all your elements
      <>
        <div className='HPcontainer '>
          <div className='cardcontainer'>
            {/* Link to the player creation page */}
            <Link to="/player" className='cards card1'>
              <div className='cardcontainercontent'>
                <h3 className='cardstitle'> player creation</h3>
                <p>Create your character and choose its skills & initiative</p>
              </div>
            </Link>
            {/* Link to the scenario creation page */}
            <Link to="/scenario" className='cards card2'>
              <div className='cardcontainercontent'>
                <h3 className='cardstitle'> scenario creation </h3>
                <p>Create your scenario using AI, based on the AFP dispatch</p>
              </div>
            </Link>
            {/* Link to the game start page */}
            <Link to="/" className='cards card3'>
              <div className='cardcontainercontent'>
                <img src={RightArrow} alt="Start the game" />
                <h3 className='cardstitle'>start the game</h3>
              </div>
            </Link>
          </div>
        </div>
      </>
  );
};

export default Home;