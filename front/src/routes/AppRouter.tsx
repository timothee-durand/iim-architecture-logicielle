import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import Menu from '../components/menu/Menu';
import PlayerSelection from '../pages/PlayerSelection';
import EditScenarioPage from '../pages/EditScenarioPage';

// 

const AppContent: React.FC = () => {
  const location = useLocation(); // Obtenez le chemin actuel

  return (
    <>
      {location.pathname !== "/" && <Menu />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scenario" element={<EditScenarioPage />} />
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
