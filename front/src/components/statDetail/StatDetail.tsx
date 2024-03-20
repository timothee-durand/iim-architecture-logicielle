// ProgressCreation.tsx
import React from 'react';
import "./StatDetail.scss";
import { useAtom } from 'jotai';
import { characterInfos } from '../atoms';


const StatDetail: React.FC = () => {
    const [atom] = useAtom(characterInfos);

    return (
        <div className="statDetail-container">
            <div>
            <img className="statDetail__circles" src="stat-circle.svg" alt="statistic"/>

            <p className="p-count">{atom.adjectives.PHYSICAL.length}</p>
            <p className="m-count">{atom.adjectives.MENTAL.length}</p>
            <p className="s-count">{atom.adjectives.SOCIAL.length}</p>
            <p className="ps-count">{Math.round((atom.adjectives.PHYSICAL.length + atom.adjectives.SOCIAL.length) / 2 - 0.5)}</p>
            <p className="sm-count">{Math.round((atom.adjectives.SOCIAL.length + atom.adjectives.MENTAL.length) / 2 - 0.5)}</p>
            <p className="mp-count">{Math.round((atom.adjectives.MENTAL.length + atom.adjectives.PHYSICAL.length) / 2 - 0.5)}</p>
            <p className="pms-count">{Math.round((atom.adjectives.PHYSICAL.length + atom.adjectives.SOCIAL.length + atom.adjectives.MENTAL.length) / 3 - 0.5)}</p>
            </div>
        </div>
    );
};

export default StatDetail;