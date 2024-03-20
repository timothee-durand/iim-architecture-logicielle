// Routeur
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import Menu from '../components/menu/Menu';
import PlayerSelection from '../pages/PlayerSelection/PlayerSelection.tsx';
import EditScenarioPage from '../pages/EditScenarioPage';
import { ScenarioHistoryList } from '../components/ScenarioHistory';
import { PlayerList } from '../pages/PlayerList/PlayerList.tsx';

const AppContent: React.FC = () => {
  const location = useLocation(); // Obtenez le chemin actuel

  return (
    <>
      {location.pathname !== "/" && <Menu />}
      {/* Non affichage du menu dans l'accueil */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scenario" element={<EditScenarioPage />} />
        <Route path="/history" element={<ScenarioHistoryList />} />
        <Route path="/player" element={<PlayerSelection />} />
        <Route path="/players" element={<PlayerList />} />
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
