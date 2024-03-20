import React from 'react';
import "./SideBar.scss";

/**
 * Interface for the props of the SideBar component.
 * @interface
 * @property {string} pagesName - The name of the page.
 */
interface pagesNameProps {
  pagesName: string;
  imgUrl:string
}

const SideBar: React.FC<pagesNameProps> = ({ pagesName, imgUrl }) => {
/**
 * SideBar component is responsible for rendering a sidebar that displays the name of the page.
 * The page's name is passed as a prop.
 * The component adds a classname depending on the page's name.
 * If the page's name is "Edit Scenario", the classname is "side-bar-scenario".
 * If the page's name is "Edit Character", the classname is "side-bar-character".
 * @param {pagesNameProps} props - The props of the SideBar component.
 * @returns {React.FC} The rendered component
 */
  // Render the SideBar component
  return (
    <div className='side-bar' style={{backgroundImage: `url(${imgUrl})`}}>
      <h1>{pagesName}</h1>
    </div>
  );
};

export default SideBar;