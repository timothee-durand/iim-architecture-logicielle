// Home.tsx

import { Link } from "react-router-dom";

const Home: React.FC = () => {

  return (
    <div className='HPcontainer'>

      <div className='cardcontainer'>
        <Link to="/player" className='cards card1'>
          <div className='cardcontainercontent'>
            <h3 className='cardstitle'> player creation</h3>
            <p>Create your character and choose its skills & initiative</p>
          </div>
        </Link>
        <Link to ="/scenario" className='cards card2'>
          <div className='cardcontainercontent'>
          <h3 className='cardstitle'> scenario creation </h3>
          <p>Create your scenario using AI, based on the AFP dispatch</p>
          </div>
        </Link>
        <Link to ="/" className='cards card3'>
          <div className='cardcontainercontent'>
          <h3 className='cardstitle'>start the game</h3>
          </div>
        </Link>
        
      </div>

    </div>
  );
}

export default Home;
