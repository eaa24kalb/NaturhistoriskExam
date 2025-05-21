import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './Header.module.css'; 

// Icons
import { Globe, Search, Menu, X } from 'lucide-react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// Images
import logo from '../assets/images/logo.png';
import logoMobile from '/logo-icon.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <NavLink to="/" className={styles.logoLink}>
          <img
            src={isMenuOpen ? logo : window.innerWidth <= 768 ? logoMobile : logo}
            alt="Logo"
            className={styles.logo}
          />
        </NavLink>

        <button
          className={styles.hamburger}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <NavLink to="/" className={styles.navItem} onClick={() => setIsMenuOpen(false)}>Home</NavLink>
          <NavLink to="/exhibits" className={styles.navItem} onClick={() => setIsMenuOpen(false)}>Exhibits</NavLink>
          <NavLink to="/mols" className={styles.navItem} onClick={() => setIsMenuOpen(false)}>Molslaboratoriet</NavLink>
          <NavLink to="/about" className={styles.navItem} onClick={() => setIsMenuOpen(false)}>About</NavLink>
        </nav>

        <div className={styles.rightSide}>
          <div className={styles.leftControls}>
            <button className={styles.searchButton} aria-label="Search">
              <Search size={18} />
            </button>
            <div className={styles.langSwitch}>
              <Globe size={18} style={{ verticalAlign: 'middle' }} />
              EN / DK
            </div>
          </div>
          <Link to="/404">
            <button className={styles.ticketsButton}>
              <ShoppingCartIcon fontSize="small" />
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
