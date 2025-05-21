import React, { useState, useEffect, useRef } from 'react';
import styles from './error.module.css';
import { useNavigate } from 'react-router-dom';

// Images
import logo from '../assets/images/logo.png';
import beetle from '../assets/images/beetle.png';

export default function Error() {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  // Store beetle's position state (percentage from top and left)
  const [position, setPosition] = useState({ top: 80, left: 90 }); // starting near bottom right

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleBeetleClick = () => {
    navigate('/exhibits');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const beetleSize = 100; // beetle in px
      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;

      const maxLeftPx = containerWidth - beetleSize - 20; 
      const maxTopPx = containerHeight - beetleSize - 20;

      const newLeftPx = Math.random() * maxLeftPx;
      const newTopPx = Math.random() * maxTopPx;

      // Convert to percentage for responsive design
      const newLeftPercent = (newLeftPx / containerWidth) * 100;
      const newTopPercent = (newTopPx / containerHeight) * 100;

      setPosition({ top: newTopPercent, left: newLeftPercent });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
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
        <p>We are working on fixing this page.</p>
      </div>

      <img
        src={beetle}
        alt="Beetle"
        className={styles.beetle}
        onClick={handleBeetleClick}
        style={{
          top: `${position.top}%`,
          left: `${position.left}%`,
          position: 'absolute',
          transition: 'top 1.5s ease, left 1.5s ease',
          transform: 'rotate(-40deg)',
          cursor: 'pointer',
          width: '5rem',
          filter: 'drop-shadow(0 0.125rem 0.25rem rgba(0, 0, 0, 0.2))',
        }}
      />
    </div>
  );
}
