import React from 'react';
import styles from './home.module.css';
import { useNavigate } from 'react-router-dom';

// Images
import boar from '../assets/images/Boar.png';
import skeleton from '../assets/images/Skeleton.png';
import butterflies from '../assets/images/Butterflies.png';
import safari from '../assets/images/Safari.png';
import whale from '../assets/images/Whale.png';
import survey from '../assets/images/Survey.png';
import oops from '../assets/images/Oops.png';
import future from '../assets/images/Future.png';
import beetles from '../assets/images/Beetles.png';
import butterfly from '../assets/images/Butterfly-jar.png';
import bear2 from '../assets/images/Bear2.png';



export default function Home() {

  const navigate = useNavigate();


  return (
    <main className={styles.container}>
      {/* Top Section */}
      <section className={styles.topSection}>
        <div className={styles.linksColumn}>
          <h2>Naturhistorisk Museum Aarhus</h2>
      <br />
      <button onClick={() => {
        const el = document.getElementById("visitSection");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }}>
        Plan your visit →
      </button>
          <button onClick={() => navigate('/exhibits')}>Exhibitions →</button>
          <button onClick={() => navigate('/error')}>The Mols Laboratory Research Station →  </button>
          <button onClick={() => navigate('/error')}>About Naturhistorisk Museum Aarhus →  </button>
        </div>
        <div className={styles.topImage}>
          <img src={butterfly} alt="Butterfly" />
        </div>
      </section>


      {/* Plan your visit*/}
      <section id="visitSection" className={styles.visitSectionWrapper}>
        <h2 className={styles.visitHeading}>Plan your visit</h2>
        <div className={styles.visitSection}>
        <img src={bear2} alt="Bear2" />
          <div className={styles.textBlock}>
            <p><strong><u>Opening Hours</u></strong><br /> 
            Monday: <b>Closed</b><br />Tuesday: <b>9-16</b><br />Wednesday: <b>9-21</b><br />Thursday - Sunday: <b>9-16</b></p>

            <p><strong><u>Entrance Fees</u></strong><br /> 
            Adults: <b>DKK150/€20</b><br />Students (with a valid student card): <b>DKK90/€12</b> <br />Groups (minimum 10 people): <b>DKK130/€18 per person</b><br />Free admission for children 0-17 years</p>

            <p><strong><u>Address</u></strong><br /> 
            Naturhistorisk Museum<br />Wilhelm Meyers Allé 10</p>

            <p><strong><u>Parking</u></strong><br /> 
            Parking is available next to the museum.</p>

            <button className={styles.ticketsButton} onClick={() => navigate('/error')}>
            Buy tickets
          </button>

          </div>
        </div>
      </section>

      {/* Events */}
      <section className={styles.eventsSection}>
    <h2>Events</h2>
    <div className={styles.eventCards}>
      <div className={styles.card}>
        <div className={styles.badge}>Coming Soon</div>
        <img src={future} alt="Future" />
        <div className={styles.cardContent}>
          <p className={styles.cardTitle}>The Future Human</p>
          <p className={styles.cardInfo}>On June 14th, our new special exhibition opens <i>The Future Human - how far will you go?</i></p>
         <br />
          <button className={styles.readMoreBtn} onClick={() => navigate('/exhibits')}>
            Read more →
          </button>
        </div>
      </div>

      <div className={styles.card}>
      <div className={styles.badge}>Temporary</div>
      <img src={beetles} alt="Beetles" />
      <div className={styles.cardContent}>
        <p className={styles.cardTitle}>Beetles! Obsessed with a collection</p>
        <p className={styles.cardInfo}>Art and science meet when Birgit Bjerre&apos;s works enter into an artistic dialogue with the museum&apos;s collections.</p>
        <button className={styles.readMoreBtn} onClick={() => navigate('/exhibits')}>
          Read more →
        </button>
      </div>
    </div>

    <div className={styles.card}>
      <div className={styles.badge}>Ends soon</div>
      <img src={oops} alt="Opps" />
      <div className={styles.cardContent}>
        <p className={styles.cardTitle}>OOPS! Tilfældigt - Heldigt</p>
        <p className={styles.cardInfo}>Explores how chance and randomness shape life, evolution, and scientific discovery.</p>
        <br />
        <button className={styles.readMoreBtn} onClick={() => navigate('/exhibits')}>
          Read more →
        </button>
      </div>
    </div>

    <div className={styles.card}>
      <div className={styles.badge}>Limited Time</div>
      <img src={survey} alt="Survey" />
      <div className={styles.cardContent}>
        <p className={styles.cardTitle}>Take a Survey</p>
        <p className={styles.cardInfo}>Participate in the survey and win cool prizes!</p>
        <br />
        <a
          href="https://da.surveymonkey.com/r/3SFMKCZ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className={styles.readMoreBtn}>Read more →</button>
        </a>
      </div>
    </div>
  </div>
</section>

      {/* Explore Exhibitions */}
      <section className={styles.exhibitionsBlob}>
        <div className={styles.imageGrid}>
          <img src={boar} alt="Boar" />
          <img src={butterflies} alt="Butterflies" />
          <img src={whale} alt="Whale" />
          <img src={safari} alt="Safari" />
        </div>
        <div className={styles.textBlock}>
          <h3>Explore our Exhibitions</h3>
          <p><strong>The African Savannah</strong><br />Step back in time and join a thrilling African expedition. Explore the recreated field camp, try conservation work, and discover rare animals and unforgettable stories in the <i>Expedition to Africa.</i></p>
         <p><strong>Our Nature</strong><br />Discover Denmark&apos;s natural history - from Ice Age landscapes to today&apos;s diverse environments - and explore how nature and humans have shaped each other over millennia in the <i>Our Nature</i></p>
         <p><strong>The Global Backyard</strong><br />Explore Earth&apos;s incredible biodiversity - from familiar species to those yet undiscovered or already lost - in <i>The Global Backyard</i> an exhibition connecting global wonders to our local environment through authentic natural artifacts.</p>
         <p><strong>99 Species</strong><br />Discover 99 fascinating Danish species in a fun, interactive scavenger hunt at the Natural History Museum Aarhus - perfect for all ages to explore and learn about local biodiversity!</p>
         <button onClick={() => navigate('/exhibits')}>
          Explore
          </button>
        </div>
      </section>

      {/* Explore More */}
      <section className={styles.moreBlob}>
      <img src={skeleton} alt="Skeleton" />
        <div className={styles.textBlock}>
          <h3>Explore <br /><i>Naturhistorusk Museum</i> <br /></h3>
          <p><strong>Opening Hours and Admission</strong><br />Find our opening hours and information about admission, annual passes, etc.</p>
          <p><strong>Donations</strong><br />Support the museum and receive a tax benefit.<br /></p>
          <p><strong>The Green Branch</strong><br />Sustainability and green transition.<br /></p>
          <button onClick={() => navigate('/error')}>
            Read more
          </button>
        </div>
        
      </section>
    </main>
  );
}
