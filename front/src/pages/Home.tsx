import React from 'react';
import { Link } from 'react-router-dom';
import RightArrow from '../assets/RightArrow.png'; // Assurez-vous que le chemin est correct
import Model3D from '../components/Model3D';

const Home: React.FC = () => {
  return (
    // Utilisez un fragment React pour englober tous vos éléments
    <>
      <div className='HPcontainer'>
        <div className='cardcontainer'>
          <Link to="/player" className='cards card1'>
            <div className='cardcontainercontent'>
              <h3 className='cardstitle'> player creation</h3>
              <p>Create your character and choose its skills & initiative</p>
            </div>
          </Link>
          <Link to="/scenario" className='cards card2'>
            <div className='cardcontainercontent'>
              <h3 className='cardstitle'> scenario creation </h3>
              <p>Create your scenario using AI, based on the AFP dispatch</p>
            </div>
          </Link>
          <Link to="/" className='cards card3'>
            <div className='cardcontainercontent'>
              <img src={RightArrow} alt="Start the game" />
              <h3 className='cardstitle'>start the game</h3>
            </div>
          </Link>
        </div>
      </div>

      {/* Placez Model3D à l'extérieur de la div principale mais à l'intérieur du fragment */}
      <Model3D />
    </>
  );
};

export default Home;
