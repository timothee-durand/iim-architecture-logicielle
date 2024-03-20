// Routeur
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import Menu from '../components/menu/Menu';
import PlayerSelection from '../pages/PlayerSelection';
import EditScenarioPage from '../pages/EditScenarioPage';


/**
 * Renders the application content.
 * @returns {React.FC} The rendered component
 */
const AppContent: React.FC = () => {
    const location = useLocation(); // Get the current path

    /**
     * Render the application routes and the menu.
     * The menu is not displayed on the home page.
     */
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
