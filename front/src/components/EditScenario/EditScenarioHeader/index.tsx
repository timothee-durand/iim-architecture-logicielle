import { useState } from 'react';
import './EditScenarioHeader.scss';

function EditScenarioHeader() {
    const [anecdote, setAnecdote] = useState('');
    const [agentNumber, setAgentNumber] = useState(0);

    const handleGenerate = () => {
        // Ici, vous pouvez gérer ce qui se passe lorsque le bouton Générer est cliqué.
        console.log('Générer:', { anecdote, agentNumber });
    };

    return (
        <div className="editScenarioHeader-container">
            <div className="editScenarioHeader-anectode">
                <label className="editScenarioHeader-anectode__label --label">Anecdote</label>
                <select className="editScenarioHeader-anectode__selector" value={anecdote} onChange={(e) => setAnecdote(e.target.value)}>
                    <option value="">Sélectionnez une anecdote</option>
                    <option value="anecdote1">Anecdote 1</option>
                    <option value="anecdote2">Anecdote 2</option>
                    {/* Ajoutez plus d'options ici si nécessaire */}

                </select>
            </div>
            <div  className="editScenarioHeader-agentNumber">
                <label className="editScenarioHeader-agentNumber__label --label">Agent Number</label>
                <input className="editScenarioHeader-agentNumber__selector" type="number" value={agentNumber} onChange={(e) => setAgentNumber(Number(e.target.value))} />
            </div>
            <button onClick={handleGenerate}>Generate</button>
        </div>
    );
}

export default EditScenarioHeader;