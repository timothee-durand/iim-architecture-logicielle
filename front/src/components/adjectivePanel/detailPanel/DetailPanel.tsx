// ProgressCreation.tsx
import React from 'react';
import "./DetailPanel.scss"
import { useAtom, useSetAtom } from 'jotai'
import { characterInfos } from '../../atoms';

interface DetailPanelProps {
    name: string;
    adjectiveList: string[];
    svgPath?: string;
}

const DetailPanel: React.FC<DetailPanelProps> = ({ name, adjectiveList, svgPath }) => {    const [selectedAdjectives, setSelectedAdjectives] = React.useState<string[]>([]);
    const [counter, setCounter] = React.useState<number>(0);
    const setAdjectives = useSetAtom(characterInfos);
    const [atom] = useAtom(characterInfos);
    const handleAdjectiveClick = (adjective: string) => {
        let newSelectedAdjectives = [...selectedAdjectives];
        const totalAdjectives = atom.adjectives.PHYSICAL.length + atom.adjectives.MENTAL.length + atom.adjectives.SOCIAL.length;

        if (selectedAdjectives.includes(adjective)) {
            newSelectedAdjectives = selectedAdjectives.filter(a => a !== adjective);
            setCounter(counter - 1);
        } else if (counter < 5 && totalAdjectives < 9) {
            newSelectedAdjectives.push(adjective);
            setCounter(counter + 1);
        }
        setSelectedAdjectives(newSelectedAdjectives);
        setAdjectives(prevState => ({ ...prevState, adjectives: { ...prevState.adjectives, [name]: newSelectedAdjectives }}));

    };

    return (
        <div className="detailPanel-container">
            <div className="detailPanel-header">
                <img className="detailPanel-header__icon" src={svgPath} alt="svg"/>
                <div className="detailPanel-header-count" >
                    <p className="detailPanel-header-count__name" >{name}</p>
                    <p className="detailPanel-header-count__counter">{counter}/5</p>
                </div>
            </div>
            <div className="detailPanel-body">
                {adjectiveList.map((adjective, index) => (
                    <p
                        key={index}
                        className={`adjective ${selectedAdjectives.includes(adjective) ? 'selected' : ''}`}
                        onClick={() => handleAdjectiveClick(adjective)}
                    >
                        {adjective}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default DetailPanel;