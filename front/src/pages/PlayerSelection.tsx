import React, { useState } from 'react';
import ProgressCreation from "../components/progressCreation/ProgressCreation.tsx";
import AdjectivePanel from "../components/adjectivePanel/AdjectivePanel.tsx";
import "./PlayerSelection.scss";
import StatDetail from "../components/statDetail/StatDetail.tsx";




const PlayerSelection: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const handleNextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    let ComponentToRender;
    if (currentStep === 1) {
        ComponentToRender = AdjectivePanel;
    } else if (currentStep === 2) {
        ComponentToRender = AdjectivePanel;
    } else {
        ComponentToRender = AdjectivePanel;
    }

    return (
        <div className="playerSelection-container">
            <ProgressCreation currentStep={currentStep} />
            <ComponentToRender />
            <StatDetail />
            <button className="playerSelection__nextButton" onClick={handleNextStep}>Next step</button>
        </div>
    );
};

export default PlayerSelection;