import React from 'react';
import styles from './error.module.css';
import logo from '../assets/images/logo.png';
import beetle from '../assets/images/beetle.png';
import { useNavigate } from 'react-router-dom';


export default function Error() {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/');
      };

    const handleBeetleClick = () => {
      navigate('/exhibits');
    };

  return (
    <div className={styles.container}>
      <img
        src={logo}
        alt="Logo"
        className={styles.logo}
        onClick={handleLogoClick}
        style={{ cursor: 'pointer' }}
      />

      <div className={styles.main}>
        <h1 className={styles.code}>404</h1>
        <p className={styles.message}>PAGE NOT FOUND</p>
      </div>
      <div className={styles.bottomText}>
        <p><strong>Oops...</strong></p>
        <p>We are working on fixing the page</p>
      </div>

      <img
        src={beetle}
        alt="Beetle"
        className={styles.beetle}
        onClick={handleBeetleClick}
      />
    </div>
  );
}
