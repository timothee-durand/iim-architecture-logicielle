// Routeur
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import Menu from '../components/menu/Menu';
import ScenarioSelection from '../pages/Scenarioselection';
import PlayerSelection from '../pages/PlayerSelection';

const AppContent: React.FC = () => {
  const location = useLocation(); // Obtenez le chemin actuel

  return (
    <>
      {location.pathname !== "/" && <Menu />}
      {/* Non affichage du menu dans l'accueil */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scenario" element={<ScenarioSelection />} />
        <Route path="/player" element={<PlayerSelection />} />
      </Routes>
    </>
  );
};

const AppRouter: React.FC = () => (
  <Router>
    <AppContent />
  </Router>
);

export default AppRouter;
