// DetailPanel.tsx
import React from 'react';
import "./DetailPanel.scss"
import { useAtom, useSetAtom } from 'jotai'
import { characterInfos } from '../../atoms';

/**
 * Interface for the props of the DetailPanel component.
 * @interface
 * @property {string} name - The name of the detail panel.
 * @property {string[]} adjectiveList - The list of adjectives to be displayed.
 * @property {string} svgPath - The path to the SVG icon to be displayed.
 */
interface DetailPanelProps {
    name: string;
    adjectiveList: string[];
    svgPath?: string;
}

/**
 * DetailPanel component is responsible for rendering a detail panel.
 * The detail panel includes a header with an icon and a counter, and a body with a list of adjectives.
 * The user can select up to 5 adjectives. The selected adjectives are highlighted and the counter is updated.
 * The selected adjectives are stored in the characterInfos atom.
 * @param {DetailPanelProps} props - The props of the DetailPanel component.
 * @returns {React.FC} The rendered component
 */
const DetailPanel: React.FC<DetailPanelProps> = ({ name, adjectiveList, svgPath }) => {
    const setAdjectives = useSetAtom(characterInfos);
    const [atom] = useAtom(characterInfos);
    const currentAdjectives = atom.adjectives[name];
    const [selectedAdjectives, setSelectedAdjectives] = React.useState<string[]>(currentAdjectives);
    const [counter, setCounter] = React.useState<number>(currentAdjectives.length);

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
                        className={`adjective ${selectedAdjectives.includes(adjective) || currentAdjectives.includes(adjective) ? 'selected' : ''}`}
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