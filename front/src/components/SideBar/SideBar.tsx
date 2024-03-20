// this component is a sidebar and will display the page's name
// which will be passed as a prop 

import './SideBar.scss';

interface pagesNameProps {
    pagesName: string;
}

const SideBar: React.FC<pagesNameProps> = ({
    pagesName,
  }) => {
    return (
        <div className="sidebar">
            <h1>{pagesName}</h1>
        </div>
    );
}

export default SideBar;