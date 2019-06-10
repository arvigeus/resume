/* eslint-disable global-require */
import React from "react"
import { graphql } from "gatsby"
import cx from "classnames"
import ImageZoom from "react-medium-image-zoom"
import { window } from "browser-monads"

import Layout from "../layouts"
import { noPrint } from "../layouts/layout.module.css"
import * as styles from "./portfolio.module.css"
import pdfImageSrc from "../assets/images/pdf.png"

// @ts-ignore
const Portfolio: React.FC = ({ data }) => (
  <Layout data={data}>
    <div className={styles.introduction}>
      <h1>Nikolay Stoynov - Portfolio</h1>
      <div className={cx(styles.block, noPrint)}>
        <button
          type="button"
          className={cx(styles.pdfButton, noPrint)}
          // eslint-disable-next-line react/jsx-handler-names
          onClick={window.print}
        >
          <img src={pdfImageSrc} title="Download PDF" alt="PDF" />
        </button>
      </div>
    </div>

    <section className={styles.section}>
      <h3>Personal and open source</h3>

      <Source name="The Snap" url="https://the-snap.now.sh/" />
      <Source name="Source" url="https://github.com/arvigeus/the-snap" />
      <div className={styles.description}>
        <p>Can you save the universe from The Mad Titan?</p>
        <p>
          A fun project to check if you remember which people were snapped by
          Thanos. It uses desintegration effect for removing elements.
        </p>
      </div>
      <ul className={styles.pictures}>
        <Picture
          name="The Snap"
          src={require("../assets/portfolio/OSS/the-snap/the-snap1.png")}
        />
        <Picture
          name="The Snap"
          src={require("../assets/portfolio/OSS/the-snap/the-snap2.png")}
        />
        <Picture
          name="The Snap"
          src={require("../assets/portfolio/OSS/the-snap/the-snap3.png")}
        />
      </ul>

      <br />
      <hr />
      <br />

      <Source name="react-doodle" url="https://friendie.netlify.com/" />
      <Source name="Source" url="https://github.com/arvigeus/friendie" />
      <div className={styles.description}>
        <p>
          A component lihrary for React using styled-components and
          styled-system. Written in TypeScript
        </p>
      </div>
      <ul className={styles.pictures}>
        <Picture
          name="react-doodle"
          src={require("../assets/portfolio/OSS/react-doodle/doodle1.png")}
        />
        <Picture
          name="react-doodle"
          src={require("../assets/portfolio/OSS/react-doodle/doodle2.png")}
        />
        <Picture
          name="react-doodle"
          src={require("../assets/portfolio/OSS/react-doodle/doodle3.png")}
        />
        <Picture
          name="react-doodle"
          src={require("../assets/portfolio/OSS/react-doodle/doodle4.png")}
        />
        <Picture
          name="react-doodle"
          src={require("../assets/portfolio/OSS/react-doodle/doodle5.png")}
        />
        <Picture
          name="react-doodle"
          src={require("../assets/portfolio/OSS/react-doodle/doodle6.png")}
        />
      </ul>

      <br />
      <hr />
      <br />

      <Source
        name="eslint-config-react-friendly"
        url="https://www.npmjs.com/package/eslint-config-react-friendly"
      />
      <Source
        name="stylelint-config-react-friendly"
        url="https://www.npmjs.com/package/stylelint-config-styled-friendly"
      />
      <div className={styles.description}>
        <p>
          Non-opinionated config to encourage best practices without getting in
          the way
        </p>
      </div>

      <br />
      <hr />
      <br />

      <Source name="Tâm Spa" url="https://tamspa.net/" />
      <Source name="Source" url="https://github.com/arvigeus/thanh-ha-spa" />
      <div className={styles.description}>
        <p>WIP</p>
        <p>E-commerce shop for a spa center.</p>
      </div>
      <ul className={styles.pictures}>
        <Picture
          name="Tâm Spa"
          src={require("../assets/portfolio/OSS/tamspa/tamspa1.png")}
        />
        <Picture
          name="Tâm Spa"
          src={require("../assets/portfolio/OSS/tamspa/tamspa2.png")}
        />
        <Picture
          name="Tâm Spa"
          src={require("../assets/portfolio/OSS/tamspa/tamspa3.png")}
        />
        <Picture
          name="Tâm Spa"
          src={require("../assets/portfolio/OSS/tamspa4.png")}
        />
      </ul>
    </section>

    <section className={styles.section}>
      <h3>ConceptSauce</h3>
      <Source name="Page" url="https://conceptsauce.io/" />
      <div className={styles.description}>
        <p>3D Virtual Shelfs and custom question developments</p>
        <p>
          Created reusable react components that are used in their new platform.
          Also created documentation page for one of their producs (Syrup)
        </p>
      </div>
      <ul className={styles.pictures}>
        <Picture
          name="ConceptSauce"
          src={require("../assets/portfolio/ConceptSauce/cs1.png")}
        />
        <Picture
          name="ConceptSauce"
          src={require("../assets/portfolio/ConceptSauce/cs2.png")}
        />
        <Picture
          name="ConceptSauce"
          src={require("../assets/portfolio/ConceptSauce/cs3.png")}
        />
      </ul>
    </section>

    <section className={styles.section}>
      <h3>Misterporter</h3>
      <Source name="Page" url="https://misterporter.com/" />
      <div className={styles.description}>
        <p>
          Startup company with a goal to provide fully automated rental
          operations.
        </p>
        <p>
          I was responsible for implementing the web interface, and handling
          user interactions. I also worked on native application using React
          Native and Styled Components.
        </p>
      </div>
      <ul className={styles.pictures}>
        <Picture
          name="Misterporter"
          src={require("../assets/portfolio/Misterporter/mrp1.jpg")}
        />
        <Picture
          name="Misterporter"
          src={require("../assets/portfolio/Misterporter/mrp2.jpg")}
        />
        <Picture
          name="Misterporter"
          src={require("../assets/portfolio/Misterporter/mrp3.jpg")}
        />
        <Picture
          name="Misterporter"
          src={require("../assets/portfolio/Misterporter/mrp4.jpg")}
        />
        <Picture
          name="Misterporter"
          src={require("../assets/portfolio/Misterporter/mrp5.jpg")}
        />
        <Picture
          name="Misterporter"
          src={require("../assets/portfolio/Misterporter/mrp6.jpg")}
        />
        <Picture
          name="Misterporter"
          src={require("../assets/portfolio/Misterporter/mrp7.jpg")}
        />
      </ul>
    </section>

    <section className={`${styles.section} ${styles.sectionBreak}`}>
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
        <Picture
          name="DDQ"
          src={require("../assets/portfolio/OSS/ddq/ddq1.jpg")}
        />
        <Picture
          name="DDQ"
          src={require("../assets/portfolio/OSS/ddq/ddq2.jpg")}
        />
        <Picture
          name="DDQ"
          src={require("../assets/portfolio/OSS/ddq/ddq3.jpg")}
        />
        <Picture
          name="DDQ"
          src={require("../assets/portfolio/OSS/ddq/ddq4.jpg")}
        />
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
          src={require("../assets/portfolio/OSS/4principles/4sp1.jpg")}
        />
        <Picture
          name="4 Spiritual Principles"
          src={require("../assets/portfolio/OSS/4principles/4sp2.jpg")}
        />
      </ul>
    </section>

    <section className={`${styles.section} ${styles.sectionBreak}`}>
      <h3>Shopmetrics</h3>
      <Source name="Page" url="https://shopmetrics.com/" />
      <div className={styles.description}>
        <p>
          Everything I do for this company is private and closed source,
          available only for paying customers. Most of my work is focused on
          backend services, but I do have few frontend projects (private).
        </p>
      </div>
      <ul className={styles.pictures}>
        <Picture
          name="Shopmetrics"
          src={require("../assets/portfolio/Shopmetrics/sm1.jpg")}
        />
      </ul>
    </section>

    <section className={`${styles.section} ${styles.sectionBreak}`}>
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
          src={require("../assets/portfolio/OSS/StudentLife/sl1.jpg")}
        />
      </ul>
    </section>
  </Layout>
)

export default Portfolio

export const query = graphql`
  query PortfolioQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

type SourceProps = {
  name: string
  url: string
}

const Source: React.FC<SourceProps> = ({ name, url }) => (
  <div>
    <strong>{name}:</strong>{" "}
    <a href={url} target="_blank" rel="noopener noreferrer">
      {url}
    </a>
  </div>
)

type PictureProps = {
  name: string
  src: string
}

const Picture: React.FC<PictureProps> = ({ name, src }) => (
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
