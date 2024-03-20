import React, { useState } from 'react';
import ProgressCreation from "../components/progressCreation/ProgressCreation.tsx";
import AdjectivePanel from "../components/adjectivePanel/AdjectivePanel.tsx";
import "./PlayerSelection.scss";
import StatDetail from "../components/statDetail/StatDetail.tsx";
import StatPanel from "../components/statPanel/StatPanel.tsx";
import RecapPanel from "../components/recapPanel/RecapPanel.tsx";
import Model3D from "../components/Model3D.tsx";
import SideBar from "../components/SideBar/SideBar.tsx";
import { api } from '../services/api.ts';
import { useAtom } from 'jotai/index';
import { characterInfos } from '../components/atoms.ts';
import Player from '../models/Player.tsx';




const PlayerSelection: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(1);
  const [character] = useAtom(characterInfos);
    const handleNextStep = async () => {
      if(currentStep === 3){
        const player: Player = {
          name: character.infos.name,
          profession: character.infos.profession,
          clearance: character.infos.clearance,
          physical: character.adjectives.PHYSICAL,
          mental: character.adjectives.MENTAL,
          social: character.adjectives.SOCIAL
        }
        await api.post('/characters', player)
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
        <div className="playerSelection-container ">
            <div className="side-bar-container">
                <SideBar pagesName="Player Creation"/>
            </div>
            <ProgressCreation currentStep={currentStep}/>
            <ComponentToRender/>
            {currentStep !== 3 && <StatDetail/>}
            <Model3D/>
            <button className="playerSelection__nextButton" onClick={handleNextStep}>{currentStep < 3 ? 'Next step' : 'Create'}</button>
            <button className="playerSelection__prevButton" onClick={handlePrevStep}>Prev step</button>
        </div>
    );
};

export default PlayerSelection;