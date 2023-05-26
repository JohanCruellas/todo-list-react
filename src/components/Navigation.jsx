import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to="/">Liste</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/add">Ajouter une tâche</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
