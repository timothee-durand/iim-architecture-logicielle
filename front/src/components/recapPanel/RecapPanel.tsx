import React from 'react';
import "./RecapPanel.scss";
import { useAtom } from 'jotai'
import {characterInfos} from "../atoms.ts";

/**
 * RecapPanel component is responsible for rendering a recap of the character's information and statistics.
 * It uses the jotai state management library to manage the state of the character's information.
 * The statistics include the physical, mental, and social resistance, which are calculated by multiplying the number of respective attributes by a factor.
 * The factor is the rounded average of all three types of attributes.
 * The component also calculates the hero points, which is the sum of all three types of resistance.
 * @returns {React.FC} The rendered component
 */
const RecapPanel : React.FC = () => {
    const [atom] = useAtom(characterInfos); // State for the character's information
    const factor = Math.round((atom.adjectives.PHYSICAL.length + atom.adjectives.SOCIAL.length + atom.adjectives.MENTAL.length) / 3 - 0.5)
    const physicalResistance = atom.adjectives.PHYSICAL.length * factor; // Physical resistance
    const mentalResistance = atom.adjectives.MENTAL.length * factor; // Mental resistance
    const socialResistance = atom.adjectives.SOCIAL.length * factor; // Social resistance
    const heroPoints = physicalResistance + mentalResistance + socialResistance; // Hero points

    // Render the RecapPanel component
    return (
        <div className="recapPanel-container">
            <div>
                <div className="recapPanel-header">
                    <img className="recapPanel-header__icon" src="recap.png" alt="svg"/>
                    <div className="recapPanel-header-count">
                        <p className="recapPanel-header-count__name">RECAP</p>
                    </div>
                </div>
                <div className="recapPanel-body">
                    <div className="statPanel-body__info">
                        <label className="statPanel-body__info__name">Name :</label>
                        <p className="statPanel-body__info__value">{atom.infos.name}</p>
                    </div>
                    <div className="statPanel-body__info">
                        <label className="statPanel-body__info__name">Profession :</label>
                        <p className="statPanel-body__info__value">{atom.infos.profession}</p>
                    </div>
                    <div className="statPanel-body__info">
                        <label className="statPanel-body__info__name">Clearance :</label>
                        <p className="statPanel-body__info__value">{atom.infos.clearance}</p>
                    </div>
                </div>
                <div className="recapPanel-body">
                    <div className="statPanel-body__info">
                        <label className="statPanel-body__info__name">Physical resistance :</label>
                        <p className="statPanel-body__info__value">{physicalResistance}</p>
                    </div>
                    <div className="statPanel-body__info">
                        <label className="statPanel-body__info__name">Mental resistance :</label>
                        <p className="statPanel-body__info__value">{mentalResistance}</p>
                    </div>
                    <div className="statPanel-body__info">
                        <label className="statPanel-body__info__name">Social resistance :</label>
                        <p className="statPanel-body__info__value">{socialResistance}</p>
                    </div>
                    <p className="adjectivesCounter">HERO POINTS : {heroPoints}</p>
                </div>
            </div>
        </div>
    );
};

export default RecapPanel;