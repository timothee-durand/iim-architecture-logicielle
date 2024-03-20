// this component is a sidebar and will display the page's name
// which will be passed as a prop
// should add a classname depending onthe page's name
// if Edit Scenario, the classname should be side-bar-scenario
// if Edit Character, the classname should be side-bar-character

import "./SideBar.scss";

interface pagesNameProps {
  pagesName: string;
  imgUrl:string
}

const SideBar: React.FC<pagesNameProps> = ({ pagesName, imgUrl }) => {
  return (
    <div className='side-bar' style={{backgroundImage: `url(${imgUrl})`}}>
      <h1>{pagesName}</h1>
    </div>
  );
};

export default SideBar;
