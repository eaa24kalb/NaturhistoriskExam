import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../assets/images/logo.png';
import { Globe, Search } from 'lucide-react';


export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <NavLink to="/" className={styles.logoLink}>
          <img src={logo} alt="Logo" className={styles.logo} />
        </NavLink>

        <nav className={styles.nav}>
          <NavLink to="/" className={styles.navItem}>Home</NavLink>
          <NavLink to="/exhibits" className={styles.navItem}>Exhibits</NavLink>
          <NavLink to="/mols" className={styles.navItem}>Molslaboratoriet</NavLink>
          <NavLink to="/about" className={styles.navItem}>About</NavLink>
        </nav>

        <div className={styles.rightSide}>
        <div className={styles.rightSide}>
  <div className={styles.leftControls}>
    <button className={styles.searchButton} aria-label="Search">
      <Search size={18} />
    </button>
    <div className={styles.langSwitch}>
      <Globe size={18} style={{ verticalAlign: 'middle', marginRight: '4px' }} />
      EN / DK
    </div>
  </div>

  <Link to="/404">
    <button className={styles.ticketsButton}>Tickets</button>
  </Link>
</div>

        </div>
      </div>
    </header>
  );
}
