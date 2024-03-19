// PlayerSelection.tsx
import React from 'react';

const PlayerSelection: React.FC = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Sélection de personnage</h1>
      <p>Veuillez choisir un Personnage parmi les options suivantes pour continuer :</p>
      
      {/* Exemple de sélection de Personnages */}
      <div style={{ marginTop: '20px' }}>
        <button style={{ marginRight: '10px' }}>Personnage 1</button>
        <button style={{ marginRight: '10px' }}>Personnage 2</button>
        <button>Personnage 3</button>
      </div>
    </div>
  );
};

export default PlayerSelection;
