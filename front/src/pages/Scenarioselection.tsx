// ScenarioSelection.tsx
import React from 'react';

const ScenarioSelection: React.FC = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Sélection de Scénario</h1>
      <p>Veuillez choisir un scénario parmi les options suivantes pour continuer :</p>
      
      {/* Exemple de sélection de scénarios */}
      <div style={{ marginTop: '20px' }}>
        <button style={{ marginRight: '10px' }}>Scénario 1</button>
        <button style={{ marginRight: '10px' }}>Scénario 2</button>
        <button>Scénario 3</button>
      </div>
    </div>
  );
};

export default ScenarioSelection;
