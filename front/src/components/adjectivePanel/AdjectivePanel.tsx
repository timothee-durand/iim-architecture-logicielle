// AdjectivePanel.tsx
import React from 'react';
import DetailPanel from "./detailPanel/DetailPanel.tsx";
import "./AdjectivePanel.scss";
import { useAtom } from 'jotai'
import {characterInfos} from "../atoms.ts";

/**
 * AdjectivePanel component is responsible for rendering the adjective selection panel.
 * The panel includes three DetailPanel components for physical, mental, and social adjectives.
 * The user can select up to 9 adjectives in total. The selected adjectives are stored in the characterInfos atom.
 * The total number of selected adjectives is displayed at the bottom of the panel.
 * @returns {React.FC} The rendered component
 */
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