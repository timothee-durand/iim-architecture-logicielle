import React, { useState } from 'react';
import "./StatPanel.scss";
import { useAtom, useSetAtom } from 'jotai'
import {characterInfos} from "../atoms.ts";

const professionToSkills =
    {
        "Intelligence Analyst": ["Analytical Thinking", "Data Interpretation", "Information Gathering", "Critical Reasoning", "Report Writing"],
        "Cryptographer": ["Encryption Techniques", "Code Breaking", "Mathematical Prowess", "Problem-Solving", "Pattern Recognition"],
        "Field Operative": ["Surveillance Techniques", "Combat Training", "Stealth Maneuvers", "Quick Decision Making", "Adaptability"],
        "Cybersecurity Specialist": ["Network Security", "Penetration Testing", "Malware Analysis", "Incident Response", "Digital Forensics"],
        "Counterintelligence Officer": ["Deception Detection", "Interrogation Tactics", "Psychological Profiling", "Risk Assessment", "Counter Surveillance"],
        "Undercover Agent": ["Identity Assumption", "Social Engineering", "Acting Skills", "Blending In", "Information Extraction"]
    };

const StatPanel: React.FC = () => {
    const [profession, setProfession] = useState('');
    const [skills, setSkills] = useState<string[]>([]);
    const [atom] = useAtom(characterInfos);
    const setInfos = useSetAtom(characterInfos);

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newName = event.target.value;
        setInfos(prevState => ({ ...prevState, infos: { ...prevState.infos, name: newName }}));
    };

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
        console.log(atom);
    };

    const handleClearanceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newClearance = event.target.value;
        setInfos(prevState => ({ ...prevState, infos: { ...prevState.infos, clearance: newClearance }}));
    };

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
                        <input className="statPanel-body__info__value" type="text" onChange={handleNameChange}/>
                    </div>
                    <div className="statPanel-body__info">
                        <label className="statPanel-body__info__name">Profession :</label>
                        <select className="statPanel-body__info__value" value={profession} onChange={handleProfessionChange}>
                            <option value="">Select a profession</option>
                            {Object.keys(professionToSkills).map(prof => (
                                <option key={prof} value={prof}>{prof}</option>
                            ))}
                        </select>
                    </div>
                    <div className="statPanel-body__info">
                        <label className="statPanel-body__info__name">Clearance :</label>
                        <input className="statPanel-body__info__value" type="text" onChange={handleClearanceChange}/>
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