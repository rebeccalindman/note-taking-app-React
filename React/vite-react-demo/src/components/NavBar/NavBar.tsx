// Navigation.tsx
import { Link } from 'react-router-dom';
import './NavBar.css';
import React from 'react';
const Navbar: React.FC<{ navList: string[] }> = ({ navList }) => {
    
  return (
    <nav className="nav-bar">
      <ul className='nav-list'>
        {navList.map((title) => (
          <li className='nav-item' key={title}>
            {/* Dynamisk generering av länk för varje title */}
            <Link to={`/${title}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
