import React, { useState } from 'react';
import ProgressCreation from '../../components/progressCreation/ProgressCreation.tsx';
import AdjectivePanel from '../../components/adjectivePanel/AdjectivePanel.tsx';
import './PlayerSelection.scss';
import StatDetail from '../../components/statDetail/StatDetail.tsx';
import StatPanel from '../../components/statPanel/StatPanel.tsx';
import RecapPanel from '../../components/recapPanel/RecapPanel.tsx';
import Model3D from '../../components/Model3D.tsx';
import SideBar from '../../components/SideBar/SideBar.tsx';
import { PlayerCreateCta } from './PlayerCreateCta/PlayerCreateCta.tsx';

import SidebarImg from "../../assets/CardsHP3.jpeg"
const PlayerSelection: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const handleNextStep = async () => {
    if (currentStep === 3) {

      return;
    }
    setCurrentStep(currentStep + 1);
  };
  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  let ComponentToRender;
  if (currentStep === 1) {
    ComponentToRender = AdjectivePanel;
  } else if (currentStep === 2) {
    ComponentToRender = StatPanel;
  } else {
    ComponentToRender = RecapPanel;
  }

  return (
    <div className="playerSelection-container">
      <div className="side-bar-container">
        <SideBar pagesName="Player Creation" imgUrl={SidebarImg} />
      </div>
      <ProgressCreation currentStep={currentStep} />
      <ComponentToRender />
      {currentStep !== 3 && <StatDetail />}
      <Model3D />

      {currentStep === 3 ?
        <PlayerCreateCta /> :
        <>
          <button className="playerSelection__nextButton"
                  onClick={handleNextStep}>Next step</button>
          <button className="playerSelection__prevButton" onClick={handlePrevStep}>Prev step</button>
        </>}
    </div>
  );
};

export default PlayerSelection;