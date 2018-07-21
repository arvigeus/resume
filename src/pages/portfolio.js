/* eslint-disable global-require */
import React from 'react'
import ImageZoom from 'react-medium-image-zoom'

import styles from './portfolio.module.css'
import pdfImageSrc from '../assets/images/pdf.png'

const Portfolio = () => (
  <div>
    <div className={styles.introduction}>
      <h1>Nikolay Stoynov - Portfolio</h1>
      <div className={`${styles.block} no-print`}>
        <a
          className={`${styles.pdfButton} no-print`}
          href="#"
          onClick={global.window.print}
        >
          <img src={pdfImageSrc} title="Download PDF" alt="PDF" />
        </a>
      </div>
    </div>
    <section className={styles.section}>
      <h3>Misterporter</h3>
      <Source name="Page" url="https://misterporter.com/" />
      <div className={styles.description}>
        <p>
          Startup company with a goal to provide fully automated rental
          operations.
        </p>
        <p>
          As lead developer, I am responsible for direction of webapp,
          implementing the web interface, handling user action. I also work on
          native application using React Native and Styled Components.
        </p>
      </div>
      <ul className={styles.pictures}>
        <Picture
          name="Misterporter"
          src={require('../assets/portfolio/Nisterporter/mrp1.jpg')}
        />
        <Picture
          name="Misterporter"
          src={require('../assets/portfolio/Nisterporter/mrp2.jpg')}
        />
        <Picture
          name="Misterporter"
          src={require('../assets/portfolio/Nisterporter/mrp3.jpg')}
        />
        <Picture
          name="Misterporter"
          src={require('../assets/portfolio/Nisterporter/mrp4.jpg')}
        />
        <Picture
          name="Misterporter"
          src={require('../assets/portfolio/Nisterporter/mrp5.jpg')}
        />
        <Picture
          name="Misterporter"
          src={require('../assets/portfolio/Nisterporter/mrp6.jpg')}
        />
        <Picture
          name="Misterporter"
          src={require('../assets/portfolio/Nisterporter/mrp7.jpg')}
        />
      </ul>
    </section>

    <section className={`${styles.section} ${styles['section-break']}`}>
      <h3>Digital Diary Cue</h3>
      <div className={styles.description}>
        <p>
          WIP. Service to allow better organizing your friends &amp; contacts by
          taking notes, planning events, tasks, and everything else useful. The
          plan is not just to be a different kind of organizer - it will also
          help people to talk better with others and make friends more easily.
          Think of it as a digital version of the book &quot;How to make friends
          and influence people&quot;, with best practices taken from there into
          our modern world. The interface is all custom made by me.
        </p>
      </div>
      <Source name="Github" url="https://github.com/arvigeus/didique-client" />
      <ul className={styles.pictures}>
        <Picture name="DDQ" src={require('../assets/portfolio/ddq/ddq1.jpg')} />
        <Picture name="DDQ" src={require('../assets/portfolio/ddq/ddq2.jpg')} />
        <Picture name="DDQ" src={require('../assets/portfolio/ddq/ddq3.jpg')} />
        <Picture name="DDQ" src={require('../assets/portfolio/ddq/ddq4.jpg')} />
      </ul>
    </section>

    <section className={`${styles.section}}`}>
      <h3>4 Spiritual Principles</h3>
      <div className={styles.description}>
        <p>
          A webpage done for a non-profit organization about Christianity and
          faith.
        </p>
        <p>
          Navigating through sections is animated to appear as expanding glowing
          orb. Animations are done with GSAP, code is mostly jQuery.
        </p>
      </div>
      <Source name="Page" url="https://arvigeus.github.io/four-principles/" />
      <Source
        name="Github"
        url="https://github.com/arvigeus/arvigeus.github.io/tree/master/four-principles"
      />
      <ul className={styles.pictures}>
        <Picture
          name="4 Spiritual Principles"
          src={require('../assets/portfolio/4principles/4sp1.jpg')}
        />
        <Picture
          name="4 Spiritual Principles"
          src={require('../assets/portfolio/4principles/4sp2.jpg')}
        />
      </ul>
    </section>

    <section className={`${styles.section} ${styles['section-break']}`}>
      <h3>Shopmetrics</h3>
      <Source name="Page" url="https://shopmetrics.com/" />
      <div className={styles.description}>
        <p>
          Everything I do for this company is private and closed source,
          available only for paying customers. Most of my work is focused on
          backend services, but I do have few frontend projects.
        </p>
        <p>
          I built an online simple image editing app that allows users to do
          basics operations like anotating, rotating, cropping, modyfying
          brightness &amp; contrast, etc... It is pretty easy to do this
          nowadays with all of these libs and browser support for filters,
          effects and everything, but this was built before that time, so
          everything had to be invented from scratch, plus supporting IE7(!) -
          non of the modern libs can do that.
        </p>
      </div>
      <ul className={styles.pictures}>
        <Picture
          name="Shopmetrics"
          src={require('../assets/portfolio/Shopmetrics/sm1.jpg')}
        />
      </ul>
    </section>

    <section className={`${styles.section}}`}>
      <h3>Password Generator</h3>
      <Source name="Page" url="http://arvigeus.github.com/password" />
      <Source
        name="Github"
        url="https://github.com/arvigeus/arvigeus.github.io/tree/master/password"
      />
      <div className={styles.description}>
        <p>
          Fun project I did after I got tired of all these password manager
          services when a high profile service got hacked 3 days after I
          registered there.
        </p>
        <p>
          This is very simple webapp that generates unique strong password based
          on words you provide: for example &quot;MyPass&quot;,
          &quot;facebook&quot;, and &quot;2018&quot; will generate
          &quot;HBGA4Yv^L+}wE4Q)aLU5EK/\&#039;&quot; - no passwords are stored,
          no external services are called, as basic as it could be. No more
          using &quot;MyCl3v3RrPas$w0rD-facebook&quot; as password (easy to
          remeber, but terrible if someone steals your password)
        </p>
      </div>
      <ul className={styles.pictures}>
        <Picture
          name="Password Generator"
          src={require('../assets/portfolio/PasswordGenerator/pass.jpg')}
        />
      </ul>
    </section>

    <section className={`${styles.section} ${styles['section-break']}`}>
      <h3>Student Life</h3>
      <Source name="Page" url="http://www.studentlife.bg/" />
      <Source name="Github" url="https://github.com/arvigeus/studentlife" />
      <div className={styles.description}>
        <p>
          A blog I did for a non-profit organization. Based on React &amp;
          Relay, with Express server as backend.
        </p>
      </div>
      <ul className={styles.pictures}>
        <Picture
          name="Student Life"
          src={require('../assets/portfolio/StudentLife/sl1.jpg')}
        />
      </ul>
    </section>
  </div>
)

export default Portfolio

const Source = ({ name, url }) => (
  <div>
    <strong>{name}:</strong>{' '}
    <a href={url} target="_blank" rel="noopener noreferrer">
      {url}
    </a>
  </div>
)

const Picture = ({ name, src }) => (
  <li className={styles.picture}>
    <ImageZoom
      image={{
        src,
        alt: name,
        className: styles.image,
        title: name,
      }}
      zoomImage={{
        src,
        alt: name,
      }}
    />
  </li>
)
