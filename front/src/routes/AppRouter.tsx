// AppRouter.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Menu from '../components/menu/Menu'; // Assurez-vous que le chemin d'importation est correct
import ScenarioSelection from '../pages/Scenarioselection';
import PlayerSelection from '../pages/PlayerSelection';
import EditScenarioPage from '../pages/EditScenarioPage';

const AppRouter: React.FC = () => (
  <Router>
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scenario" element={<EditScenarioPage />} />
        <Route path="/player" element={<PlayerSelection />} />
      </Routes>
    </>
  </Router>
);

export default AppRouter;
