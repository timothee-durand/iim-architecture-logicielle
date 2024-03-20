// ProgressCreation.tsx
import React from 'react';
import DetailPanel from "./detailPanel/DetailPanel.tsx";
import "./AdjectivePanel.scss";
import { useAtom } from 'jotai'
import {characterInfos} from "../atoms.ts";

const AdjectivePanel : React.FC = () => {
    const [atom] = useAtom(characterInfos);
    return (

        <div className="adjectivePanel-container">
            <DetailPanel name="PHYSICAL" adjectiveList={["Muscular", "Tall", "Fast","Tough","Thin","Skeletal","Corpulent"]} svgPath="muscular.png"/>
            <DetailPanel name="MENTAL" adjectiveList={["Calm", "Intuitive", "Methodical","Hysterical","Thoughtful","Nostalgic","Warm blood","Cold blood"]} svgPath="brain.png"/>
            <DetailPanel name="SOCIAL" adjectiveList={["Intimidating", "Persuasive", "Selfish","Outgoing","Lone Wolf","Shy","Caring","Friendly"]} svgPath="social.png"/>
            <p className="adjectivesCounter">{atom.adjectives.PHYSICAL.length + atom.adjectives.MENTAL.length + atom.adjectives.SOCIAL.length}/9</p>


        </div>
    );
};

export default AdjectivePanel;