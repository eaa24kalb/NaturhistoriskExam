import React from 'react';
import styles from './Footer.module.css';

// Image
import AUseal from "../assets/images/AU-seal.png";

// Icons
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// Tripadvisor icon
const TripadvisorIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
  >
    <circle cx="164" cy="256" r="72" />
    <circle cx="348" cy="256" r="72" />
    <circle cx="164" cy="256" r="36" fill="white" />
    <circle cx="348" cy="256" r="36" fill="white" />
    <circle cx="164" cy="256" r="16" fill="black" />
    <circle cx="348" cy="256" r="16" fill="black" />
  </svg>
);


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
          <p><a href="https://maps.app.goo.gl/itwcfTAzCF6WDvbq5" target="_blank" rel="noopener noreferrer" aria-label="Map to Naturhistorisk Museum">
            Wilhelm Meyers Allé 10<br />8000 Aarhus C
          </a></p>
          <p>Tlf. <a href="tel:+4586129777">86 12 97 77</a></p>
          <p><a href="mailto:nm@nathist.dk">nm@nathist.dk</a></p>
          <p>CVR: 29073910</p>
        </div>

        <div>
          <h3>Molslaboratoriet</h3>
          <p><a href="https://maps.app.goo.gl/7ZznqjBmyKxSDwVA9" target="_blank" rel="noopener noreferrer" aria-label="Map to Molslaboratoriet">
      Strandkærvej 6, Femmøller<br />8400 Ebeltoft
    </a></p>
          <p><a href="tel:+4586362535">Tlf. 86 36 25 35</a><br />
          <a href="mailto:molslab@molslab.dk">molslab@molslab.dk</a></p>
        </div>

        <div>
          <h3>Museets åbningstider</h3>
          <p>Monday: Closed<br />Tuesday: 9-16<br />Wednesday: 9-21<br />Thursday - Sunday: 9-16</p>
        </div>

        <div className={styles.mobileSeparator}>
          <hr className={styles.separatorLine} />
          <img src={AUseal} alt="AUseal" className={styles.logoSeal} />
        </div>

        <div>
          <h3>Socials</h3>
          <ul className={styles.socialLinks}>
            <li>
              <a href="https://www.instagram.com/nathistaarhus/" aria-label="Instagram">
                <InstagramIcon className={styles.socialIcon} />
                <span className={styles.socialText}> Instagram</span>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCvnI647r9368mcwJB9WOypA" aria-label="YouTube">
                <YouTubeIcon className={styles.socialIcon} />
                <span className={styles.socialText}> YouTube</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/naturhistoriskmuseum" aria-label="Facebook">
                <FacebookIcon className={styles.socialIcon} />
                <span className={styles.socialText}> Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/naturhistorisk-museum-aarhus/posts/?feedView=all" aria-label="LinkedIn">
                <LinkedInIcon className={styles.socialIcon} />
                <span className={styles.socialText}> LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://www.tripadvisor.dk/Attraction_Review-g189530-d3600336-Reviews-Naturhistorisk_Museum-Aarhus_East_Jutland_Jutland.html" aria-label="Tripadvisor">
                <TripadvisorIcon className={styles.socialIcon} width={24} height={24} />
                <span className={styles.socialText}> Tripadvisor</span>
              </a>
            </li>
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
