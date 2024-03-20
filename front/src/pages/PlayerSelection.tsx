import React, { useState } from 'react';
import ProgressCreation from "../components/progressCreation/ProgressCreation.tsx";
import AdjectivePanel from "../components/adjectivePanel/AdjectivePanel.tsx";
import "./PlayerSelection.scss";
import StatDetail from "../components/statDetail/StatDetail.tsx";
import StatPanel from "../components/statPanel/StatPanel.tsx";
import RecapPanel from "../components/recapPanel/RecapPanel.tsx";
import Model3D from "../components/Model3D.tsx";
import SideBar from "../components/SideBar/SideBar.tsx";

/**
 * PlayerSelection component is responsible for rendering the player creation process.
 * It manages the current step of the process and renders the appropriate component for each step.
 * @returns {React.FC} The rendered component
 */
const PlayerSelection: React.FC = () => {
    // State to manage the current step in the player creation process
    const [currentStep, setCurrentStep] = useState(1);

    /**
     * Function to handle the transition to the next step in the player creation process.
     */
    const handleNextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    /**
     * Function to handle the transition to the previous step in the player creation process.
     */
    const handlePrevStep = () => {
        setCurrentStep(currentStep - 1);
    };

    // Determine the component to render based on the current step
    let ComponentToRender;
    if (currentStep === 1) {
        ComponentToRender = AdjectivePanel;
    } else if (currentStep === 2) {
        ComponentToRender = StatPanel;
    } else {
        ComponentToRender = RecapPanel;
    }

    // Render the player selection interface
    return (
        <div className="playerSelection-container ">
            <div className="side-bar-container">
                <SideBar pagesName="Player Creation"/>
            </div>
            <ProgressCreation currentStep={currentStep}/>
            <ComponentToRender/>
            {currentStep !== 3 && <StatDetail/>}
            <Model3D/>
            <button className="playerSelection__nextButton" onClick={handleNextStep}>Next step</button>
            <button className="playerSelection__prevButton" onClick={handlePrevStep}>Prev step</button>
        </div>
    );
};

export default PlayerSelection;
