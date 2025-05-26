import React from 'react';
import styles from './exhibits.module.css';

// Images
import boar from '../assets/images/Boar.png';
import butterflies from '../assets/images/Butterflies.png';
import safari from '../assets/images/Safari.png';
import moose from '../assets/images/Moose.png';
import whale from '../assets/images/Whale.png';
import oops from '../assets/images/Oops.png';
import beetles from '../assets/images/Beetles.png';
import beetles2 from '../assets/images/Beetles2.png';
import screensaver from '../assets/images/ScreenSaver.MOV';
import bear from '../assets/images/Bear.png';
import safari2 from '../assets/images/Safari2.png';
import skeleton from '../assets/images/Skeleton.png';


export default function Home() {

  return (
    <main className={styles.container}>
     

     {/* Top */}
     <section className={styles.topSection}>
     <h3>Explore our Exhibitions</h3>
        
      </section>

      {/* Newest Addition */}
      <section className={styles.newBlob}>
      <div className={styles.badge}>New!</div>
      <video
        src={screensaver}
        autoPlay
        muted
        loop
        playsInline
        className={styles.screensaver}
      />
        <div className={styles.textBlock}>
          <h3>Our newest addition</h3>
         <p><strong>A Bug&apos;s Life</strong><br />A digital experience part of <i>Beetles! Obsessed with a collection.</i></p>
         <p><i>A Bug&apos;s Life</i> lets you explore the hidden lives and purposes of insects - how they <i>build, survive, and shape</i> the world around us in surprising ways. Though often overlooked, insects are essential to our ecosystems and even our future. This interactive game reveals just how fascinating (and important) they really are.</p>

         <p>Insects may be tiny, but their impact is <b>massive.</b> From climate change to future foods, they play a role in challenges young generations care about. Here we make it personal - linking your choices and values to the insect world in a playful way.</p>
        
        <p><strong>Preview: Dive In!</strong> <br />Get a sneak peak of the digital experience below.</p>
        <button
        onClick={() =>
          window.open("https://www.figma.com/proto/q5GvPzWAJucYVfNUqk7xnc/bugs-solution-website-wireframe?page-id=589%3A355&node-id=774-1153&viewport=-1798%2C-2998%2C0.12&t=KWY2oOzOYLJmYYEh-1&scaling=contain&content-scaling=fixed")
        }
        className="your-button-class"
      >
        Try it out!
      </button>
        </div>
      </section>

      {/* Beetles */}
      <section className={styles.beetlesBlob}>
      <div className={styles.badge}>Temporary</div>
        <div className={styles.imageGrid}>
          <img src={beetles} alt="Beetles" />
          <img src={beetles2} alt="Beetles2" />
        </div>
        <div className={styles.textBlock}>
          <h3>Beetles!</h3>
         <p><strong>Art & Science: Beetles! - Obsessed with a Collection</strong></p>
         <p>Artist Birgit Bjerre explores the Natural History Museum&apos;s vast collections, discovering parallels between her art and the scientists&apos; work. Inspired by their detailed and methodical approach, she creates a unique dialogue between art and science.</p>

         <p>This exhibition is part of the museum&apos;s <i>Art & Science</i> program, highlighting new ways to connect people with nature and the importance of protecting our ecosystem.</p>
        </div>
      </section>


      {/* Oops */}
      <section className={styles.oopsBlob}>
      <div className={styles.badge}>Temporary</div>
        <div className={styles.imageGrid}>
          <img src={oops} alt="Opps" />
        </div>
        <div className={styles.textBlock}>
          <h3>OOPS!</h3>
         <p><strong>Tilfældigt - Heldigt</strong></p>
         <p>Dive into the unexpected with OOPS!, an engaging exhibition that highlights the surprising moments, happy accidents, and curious mistakes that happen in nature and science. </p>

         <p>Explore quirky stories, unusual specimens, and hands-on activities that show how discovery often comes from the unexpected - reminding us that curiosity and openness lead to new knowledge and wonder.</p>
         <br />
        </div>
      </section>

      {/* African */}
      <section className={styles.africanBlob}>
      <div className={styles.badge}>Permanent</div>
      <img src={safari} alt="Safari" />
      <img src={safari2} alt="Safari2" />
        <div className={styles.textBlock}>
          <h3>Expedition to Africa</h3>
          <p><strong>Join us on an adventurous journey back in time!</strong><br />In 1947, the Natural History Museum took part in a major Danish - East African expedition to Kenya and Tanzania.</p>
          <p>The goal was to collect birds and mammals for the museum&apos;s collections - some of which became part of our iconic <i>Savannah of Africa</i> exhibition. As part of the museum&apos;s anniversary year in 2021, the original exhibition was reimagined and brought to life once again as<b> Expedition to Africa.</b></p>
        
        <p><strong>What can you experience?</strong> <br />Step into the world of the expedition and: <br />- Feel the atmosphere of the field camp in East Africa <br /> - Try your hand at being a conservator for a day <br />- Get up close with rare animals and fascinating expedition stories</p>
        </div>
      </section>


      {/* Nature */}
      <section className={styles.natureBlob}>
      <div className={styles.badge}>Permanent</div>
      <div className={styles.imageGrid}>
      <img src={boar} alt="Boar" />
      <img src={bear} alt="Bear" />
      <img src={moose} alt="Moose" />
      <img src={butterflies} alt="Butterflies" />
      </div>
        <div className={styles.textBlock}>
        <h3>Our Nature</h3>
          <p><strong>- The Natural History of the Danish Landscape</strong><br /> <i>Our Nature</i> explores the rich natural history of the Danish landscape - from its dramatic shaping during and after the last Ice Age to the diverse environments we see today.</p>
          <p>The exhibition presents landscapes as interconnected systems where weather, microclimates, soil, plants, animals <i>- and not least, humans -</i> all play a part in shaping the environment.</p>
        
        <p><strong>What can you discover?</strong> <br />Travel through time and across terrains as you explore themes such as: <br />- Denmark after the Ice Age <br /> - Heathlands and Forests <br />- Get up close with rare animals and fascinating expedition stories <br />- Freshwaters <br /> - Urban Nature <br />- The Cultivated Land</p>

        <p>Each section offers insights into how nature and culture have shaped each other over millennia. </p> <p><b>Want to dive deeper?</b> Our journal Nature and Museum has published special issues dedicated to each theme in the <i>Our Nature</i> exhibition.</p>
        </div>
      </section>


      {/* Backyard */}
      <section className={styles.backyardBlob}>
      <div className={styles.badge}>Permanent</div>
      <img src={whale} alt="Whale" />
      <img src={skeleton} alt="Skeleton" />
        <div className={styles.textBlock}>
        <h3>The Global Backyard</h3>
          <p><strong>An exhibition about biodiversity</strong><br /> Discover the overwhelming variety of life on Earth - from the species we know, to those we&apos;ve yet to find, and even the ones disappearing before we can discover them.</p>

          <p>The title of the exhibition <i>The Global Backyard </i> reflects how many of the exhibition&apos;s stories connect both global nature and our local surroundings. A key example is the global sperm whale that stranded near Sæby on Jutland&apos;s east coast - in our own backyard. It&apos;s biodiversity that spans the wonders of the entire planet.</p>
        
        <p>Most elements in the exhibitions are original authentic artifacts from nature. They have been collected and preserved through decades - even centuries. These artifacts are the real deal in which an astronomical number of work hours have been invested in.</p>
        </div>
      </section>


      {/* 99 Arter */}
      <section className={styles.arterBlob}>
      <div className="yt-video">
    <iframe
        src="https://www.youtube.com/embed/x87fNXD7iog"
        width="250"
        height="450"
        allow="accelerometer; clipboard-write; 
        encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="99 Species Trailer"
    ></iframe>
    </div>

    <div className={styles.badge}>Permanent</div>
  <div className={styles.textBlock}>
    <h3>99 Species</h3>
    <p><strong>A Nature Scavenger Hunt</strong><br /> 
      <i>99 Species</i> is an interactive exhibition at the Natural History Museum Aarhus, inviting kids and adults alike to discover 99 fascinating Danish species everyone should know before growing up.
    </p>
    <p>
      Spread throughout the museum, the exhibition turns your visit into a fun <b>treasure hunt</b> where you&apos;ll spot everything from scarlet dung beetles to magnified head lice. <br />
      Use your phone or a free “ArtBook” to track and check off each species as you explore.
    </p>
    <p>
      The project is part of a nationwide initiative supported by the <i>Nordea Foundation</i>, developed in collaboration with the <i>Danish Society for Nature Conservation</i>. <br />
      Through short videos featuring beloved nature communicators like Sebastian Klein and Morten DD Hansen, the species come to life with humor and insight.
    </p>
    <p>
      99 Species is a playful and educational way to spark curiosity about biodiversity—and to reconnect with the wild nature just outside your door.
    </p>
  </div>
</section>




    </main>
  );
}
