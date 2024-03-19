import React, { useState } from 'react';

const PlayerFormInfo: React.FC = () => {
    const [nom, setNom] = useState('');
    const [profession, setProfession] = useState('');
    const [clearance, setClearance] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Ajoutez ici la logique pour traiter les données du formulaire
        console.log('Nom:', nom);
        console.log('Profession:', profession);
        console.log('Clearance:', clearance);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="nom">Nom:</label>
                <input
                    type="text"
                    id="nom"
                    value={nom}
                    onChange={(event) => setNom(event.target.value)}
                />
            </div>
            <div>
                <label htmlFor="profession">Profession:</label>
                <input
                    type="text"
                    id="profession"
                    value={profession}
                    onChange={(event) => setProfession(event.target.value)}
                />
            </div>
            <div>
                <label htmlFor="clearance">Clearance:</label>
                <input
                    type="text"
                    id="clearance"
                    value={clearance}
                    onChange={(event) => setClearance(event.target.value)}
                />
            </div>
            <button type="submit">Créer</button>
        </form>
    );
};

export default PlayerFormInfo;