import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Newsletter Signup */}
      <section className={styles.newsletter}>
        <h2>Sign up for our newsletter!</h2>
        <p>Be the first to know about new exhibitions, events, and digital features.</p>
        <form className={styles.signupForm}>
          <input type="email" placeholder="Your email" required />
          <button type="submit">Sign up</button>
        </form>
      </section>

      {/* Info Columns */}
      <section className={styles.infoGrid}>
        <div>
          <h3>Naturhistorisk Museum</h3>
          <p>Wilhelm Meyers Allé 10<br />8000 Aarhus C</p>
          <p>Tlf. 86 12 97 77<br />nm@nathist.dk<br />CVR: 29073910</p>
        </div>

        <div>
          <h3>Molslaboratoriet</h3>
          <p>Strandkærvej 6, Femmøller<br />8400 Ebeltoft</p>
          <p>Tlf. 86 36 25 35 eller 86 12 97 77<br />molslab@molslab.dk</p>
        </div>

        <div>
          <h3>Museets åbningstider</h3>
          <p>Mandag: Lukket<br />Tirsdag: 9-16<br />Onsdag: 9-21<br />Torsdag - Søndag: 9-16</p>
        </div>

        <div>
          <h3>Socials</h3>
          <ul className={styles.socialLinks}>
            <li><a href="#" aria-label="Instagram">Instagram</a></li>
            <li><a href="#" aria-label="Youtube">Youtube</a></li>
            <li><a href="#" aria-label="Facebook">Facebook</a></li>
            <li><a href="#" aria-label="LinkedIn">LinkedIn</a></li>
            <li><a href="#" aria-label="Tripadvisor">Tripadvisor</a></li>
          </ul>
        </div>
      </section>

      {/* Find Section with Maps */}
      <section className={styles.findSection}>
        <h3>Find</h3>
        <div className={styles.locations}>
          <div className={styles.locationBox}>
            <p className={styles.locationTitle}>Find the museum</p>
            <iframe
              className={styles.map}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d288.1611165872335!2d10.202422634251901!3d56.16734564843529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464c3fbf5ee793ef%3A0xafa525222afb8b08!2sNaturhistorisk%20Museum%20Aarhus!5e1!3m2!1sda!2sus!4v1747398683048!5m2!1sda!2sus"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map of Naturhistorisk Museum"
            ></iframe>
          </div>

          <div className={styles.locationBox}>
            <p className={styles.locationTitle}>Find Molsalaboratoriet</p>
            <iframe
              className={styles.map}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d176.2021684119716!2d10.574549572543763!3d56.226266511651666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464c316616f44ff7%3A0xaecb96de07083aae!2sMolslaboratoriet%2C%20Naturhistorisk%20Museum!5e1!3m2!1sda!2sus!4v1747398590614!5m2!1sda!2sus"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map of Molslaboratoriet"
            ></iframe>
          </div>
        </div>
      </section>
    </footer>
  );
}
