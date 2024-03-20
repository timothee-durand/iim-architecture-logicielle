// ProgressCreation.tsx
import React from 'react';
import "./StatDetail.scss";
import { useAtom } from 'jotai';
import { adjectivesAtom } from '../atoms';


const StatDetail: React.FC = () => {
    const [adjectives] = useAtom(adjectivesAtom);

    return (
        <div className="statDetail-container">
            <div>
            <img className="statDetail__circles" src="stat-circle.svg" alt="statistic"/>

            <p className="p-count">{adjectives.PHYSICAL.length}</p>
            <p className="m-count">{adjectives.MENTAL.length}</p>
            <p className="s-count">{adjectives.SOCIAL.length}</p>
            <p className="ps-count">{Math.round((adjectives.PHYSICAL.length + adjectives.SOCIAL.length) / 2 - 0.5)}</p>
            <p className="sm-count">{Math.round((adjectives.SOCIAL.length + adjectives.MENTAL.length) / 2 - 0.5)}</p>
            <p className="mp-count">{Math.round((adjectives.MENTAL.length + adjectives.PHYSICAL.length) / 2 - 0.5)}</p>
            <p className="pms-count">{Math.round((adjectives.PHYSICAL.length + adjectives.SOCIAL.length + adjectives.MENTAL.length) / 3 - 0.5)}</p>
            </div>
        </div>
    );
};

export default StatDetail;