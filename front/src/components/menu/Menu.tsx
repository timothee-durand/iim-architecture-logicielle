// Menu.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu: React.FC = () => {
  return (
    <nav className="nav_container">
      <ul style={{ listStyleType: 'none', padding: 0, margin : 0, }}>
        <li style={{ display: 'inline-block', marginRight: 10 }}>
          <NavLink to="/" style={({ isActive }) => ({ background: isActive ? 'white' : '', color: isActive ? '#751313' : 'white' })}>
            Accueil
          </NavLink>
        </li>
        <li style={{ display: 'inline-block', marginRight: 10 }}>
          <NavLink to="/player" style={({ isActive }) => ({ background: isActive ? 'white' : '', color: isActive ? '#751313' : 'white' })}>
            player Creation
          </NavLink>
        </li>
        <li style={{ display: 'inline-block', marginRight: 10 }}>
          <NavLink to="/scenario" style={({ isActive }) => ({ background: isActive ? 'white' : '', color: isActive ? '#751313' : 'white' })}>
            Scenario Creation
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
