// Menu.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Menu component is responsible for rendering a navigation menu.
 * The menu includes links to the "Home", "player Creation", and "Scenario Creation" pages.
 * The component uses the NavLink component from the react-router-dom library to create the links.
 * The NavLink component receives a function as a style prop that changes the background and color of the link based on whether it is active.
 * @returns {React.FC} The rendered component
 */
const Menu: React.FC = () => {
  return (
    <nav className="nav_container">
      <ul style={{ listStyleType: 'none', padding: 0, margin: 0, }}>
        <li style={{ display: 'inline-block', marginRight: 10 }}>
          <NavLink to="/" style={({ isActive }) => ({
            background: isActive ? 'white' : '',
            color: isActive ? '#751313' : 'white'
          })}>
            Accueil
          </NavLink>
        </li>
        <li style={{ display: 'inline-block', marginRight: 10 }}>
          <NavLink to="/player" style={({ isActive }) => ({
            background: isActive ? 'white' : '',
            color: isActive ? '#751313' : 'white'
          })}>
            player Creation
          </NavLink>
        </li>
        <li style={{ display: 'inline-block', marginRight: 10 }}>
          <NavLink to="/players" style={({ isActive }) => ({
            background: isActive ? 'white' : '',
            color: isActive ? '#751313' : 'white'
          })}>
            Player list
          </NavLink>
        </li>
        <li style={{ display: 'inline-block', marginRight: 10 }}>
          <NavLink to="/scenario" style={({ isActive }) => ({
            background: isActive ? 'white' : '',
            color: isActive ? '#751313' : 'white'
          })}>
            Scenario Creation
          </NavLink>
        </li>
        <li style={{ display: 'inline-block', marginRight: 10 }}>
          <NavLink to="/history" style={({ isActive }) => ({
            background: isActive ? 'white' : '',
            color: isActive ? '#751313' : 'white'
          })}>
            Scenario History
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;