import React from 'react';
import styles from './home.module.css';

import boar from '../assets/images/Boar.png';
import jars from '../assets/images/Jars.png';
import wolves from '../assets/images/Wolves.png';
import skeleton from '../assets/images/Skeleton.png';
import butterflies from '../assets/images/Butterflies.png';
import safari from '../assets/images/Safari.png';
import moose from '../assets/images/Moose.png';
import whale from '../assets/images/Whale.png';
import survey from '../assets/images/Survey.png';


export default function Home() {

    const ExploreClick = () => {
        navigate('/exhibits');
      };

  return (
    <main className={styles.container}>
      {/* Top Section */}
      <section className={styles.topSection}>
        <div className={styles.linksColumn}>
          <button>Plan your visit →</button>
          <button>Exhibitions →</button>
          <button>Kid-friendly Museum →</button>
          <button>The Mols Laboratory Research Station →</button>
        </div>
        <div className={styles.topImage}>
          <img src={whale} alt="Whale" />
        </div>
      </section>

      <button className={styles.ticketsButton}>Buy tickets</button>

      {/* Events */}
      <section className={styles.eventsSection}>
  <h2>Events</h2>
  <div className={styles.eventCards}>
    <div className={styles.card}>
      <div className={styles.badge}>New</div>
      <img src={butterflies} alt="Butterflies" />
      <div className={styles.cardContent}>
        <p className={styles.cardTitle}>Animals in the City</p>
        <p className={styles.cardInfo}>Discover how animals adapt to urban life.</p>
        <button className={styles.readMoreBtn}>Read more →</button>
      </div>
    </div>

    <div className={styles.card}>
      <div className={styles.badge}>Ends Soon</div>
      <img src={moose} alt="Moose" />
      <div className={styles.cardContent}>
        <p className={styles.cardTitle}>Experience the Wild Horses</p>
        <p className={styles.cardInfo}>Meet the world’s toughest grazers up close.</p>
        <button className={styles.readMoreBtn}>Read more →</button>
      </div>
    </div>

    <div className={styles.card}>
      <div className={styles.badge}>Limited Time</div>
      <img src={survey} alt="Survey" />
      <div className={styles.cardContent}>
        <p className={styles.cardTitle}>Take a Survey</p>
        <p className={styles.cardInfo}>Participate and win cool museum prizes!</p>
        <button className={styles.readMoreBtn}>Read more →</button>
      </div>
    </div>
  </div>
</section>

      {/* Explore Exhibitions */}
      <section className={styles.exhibitionsBlob}>
        <div className={styles.imageGrid}>
          <img src={boar} alt="Boar" />
          <img src={wolves} alt="Wolves" />
          <img src={safari} alt="Safari" />
          <img src={jars} alt="Jars" />
        </div>
        <div className={styles.textBlock}>
          <h3>Explore our Exhibitions</h3>
          <p><strong>Beetles</strong><br />Experience our new exhibition <i>Beetles! Obsessed with a collection</i></p>
         <p><strong>The Future Human</strong><br />On June 14th, our new special exhibition opens<br /><i>The Future Human - how far will you go?</i></p>
          <button>Explore</button>
        </div>
      </section>

      {/* Explore More */}
      <section className={styles.moreBlob}>
        <div className={styles.textBlock}>
          <h3>About <br /><i>Naturhistorusk Museum</i> <br /></h3>
          <p><strong>Opening Hours and Admission</strong><br />Find our opening hours and information about admission, annual passes, etc.</p>
          <p><strong>Donations</strong><br />Support the museum and receive a tax benefit.<br /></p>
          <p><strong>The Green Branch</strong><br />Sustainability and green transition.<br /></p>
          <button>Read more</button>
        </div>
        <img src={skeleton} alt="Skeleton" />
      </section>
    </main>
  );
}
