// ProgressCreation.tsx
import React from 'react';
import "./RecapPanel.scss";
import { useAtom } from 'jotai'
import {characterInfos} from "../atoms.ts";

const RecapPanel : React.FC = () => {
    const [atom] = useAtom(characterInfos);
    const factor = Math.round((atom.adjectives.PHYSICAL.length + atom.adjectives.SOCIAL.length + atom.adjectives.MENTAL.length) / 3 - 0.5)
    const physicalResistance = atom.adjectives.PHYSICAL.length * factor;
    const mentalResistance = atom.adjectives.MENTAL.length * factor;
    const socialResistance = atom.adjectives.SOCIAL.length * factor;
    const heroPoints = physicalResistance + mentalResistance + socialResistance;
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