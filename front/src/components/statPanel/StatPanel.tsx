import React, { useState } from 'react';
import "./StatPanel.scss";
import { useAtom, useSetAtom } from 'jotai'
import {characterInfos} from "../atoms.ts";

// Mapping of professions to their respective skills
type Profession = "Intelligence Analyst" | "Cryptographer" | "Field Operative" | "Cybersecurity Specialist" | "Counterintelligence Officer" | "Undercover Agent";

const professionToSkills: Record<Profession, string[]> =
    {
        "Intelligence Analyst": ["Analytical Thinking", "Data Interpretation", "Information Gathering", "Critical Reasoning", "Report Writing"],
        "Cryptographer": ["Encryption Techniques", "Code Breaking", "Mathematical Prowess", "Problem-Solving", "Pattern Recognition"],
        "Field Operative": ["Surveillance Techniques", "Combat Training", "Stealth Maneuvers", "Quick Decision Making", "Adaptability"],
        "Cybersecurity Specialist": ["Network Security", "Penetration Testing", "Malware Analysis", "Incident Response", "Digital Forensics"],
        "Counterintelligence Officer": ["Deception Detection", "Interrogation Tactics", "Psychological Profiling", "Risk Assessment", "Counter Surveillance"],
        "Undercover Agent": ["Identity Assumption", "Social Engineering", "Acting Skills", "Blending In", "Information Extraction"]
    };

/**
 * StatPanel component is responsible for rendering the character's information and skills.
 * It uses the jotai state management library to manage the state of the character's information.
 * @returns {React.FC} The rendered component
 */
const StatPanel: React.FC = () => {
     const [atom] = useAtom(characterInfos); // State for the character's information
    const setInfos = useSetAtom(characterInfos); // Function to update the character's information
    const [profession, setProfession] = useState(atom.infos.profession); // State for the selected profession
    const [skills, setSkills] = useState<string[]>(atom.infos.skills); // State for the selected skills

    // Function to handle changes in the name input field
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newName = event.target.value;
        setInfos(prevState => ({ ...prevState, infos: { ...prevState.infos, name: newName }}));
    };

    // Function to handle changes in the profession select field
    const handleProfessionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newProfession = event.target.value;
        setProfession(newProfession);
        const newSkills = professionToSkills[newProfession] || [];
        setSkills(newSkills);
        setInfos(prevState => ({
            ...prevState,
            infos: {
                ...prevState.infos,
                profession: newProfession,
                skills: newSkills
            }
        }));
    };

    // Function to handle changes in the clearance input field
    const handleClearanceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newClearance = event.target.value;
        setInfos(prevState => ({ ...prevState, infos: { ...prevState.infos, clearance: newClearance }}));
    };

    // Render the StatPanel component
    return (
        <div className="statPanel-container">
            <div>
                <div className="statPanel-header">
                    <img className="statPanel-header__icon" src="camera.png" alt="svg"/>
                    <div className="statPanel-header-count">
                        <p className="statPanel-header-count__name">INFOS</p>
                    </div>
                </div>
                <div className="statPanel-body">
                    <div className="statPanel-body__info">
                        <label className="statPanel-body__info__name">Name :</label>
                        <input className="statPanel-body__info__value" type="text" onChange={handleNameChange} value={atom.infos.name}/>
                    </div>
                    <div className="statPanel-body__info">
                        <label className="statPanel-body__info__name">Profession :</label>
                        <select className="statPanel-body__info__value" value={profession} onChange={handleProfessionChange} defaultValue={atom.infos.profession}>
                            <option value="">Select a profession</option>
                            {Object.keys(professionToSkills).map(prof => (
                                <option key={prof} value={prof}>{prof}</option>
                            ))}
                        </select>
                    </div>
                    <div className="statPanel-body__info">
                        <label className="statPanel-body__info__name">Clearance :</label>
                        <input className="statPanel-body__info__value" type="text" onChange={handleClearanceChange} value={atom.infos.clearance}/>
                    </div>
                </div>
            </div>
            <div>
                <div className="statPanel-header --skills">
                    <img className="statPanel-header__icon" src="puzzle.png" alt="svg"/>
                    <div className="statPanel-header-count">
                        <p className="statPanel-header-count__name">SKILLSET</p>
                    </div>
                </div>
                <div className="statPanel-body">
                    {profession ? (
                        skills.map((skill, index) => (
                            <div key={index} className="statPanel-body__info">
                                <label className="statPanel-body__info__name">{`Skill ${index + 1} :`}</label>
                                <p className="statPanel-body__info__value">{skill}</p>
                            </div>
                        ))
                    ) : (
                        Array(5).fill("---").map((item, index) => (
                            <div key={index} className="statPanel-body__info">
                                <label className="statPanel-body__info__name">{`Skill ${index + 1} :`}</label>
                                <p className="statPanel-body__info__value">{item}</p>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default StatPanel;