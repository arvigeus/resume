import React from 'react'
import styles from './resume.module.css'

import pdfImageSrc from '../assets/images/pdf.png'
import bulgariaImageSrc from '../assets/images/bulgaria.png'

const Resume = () => (
  <div>
    <div className={styles.introduction}>
      <div>
        <h1>Nikolay Stoynov</h1>
        <h3 className={styles.subtitle}>
          Front-end web developer{' '}
          <img
            src={bulgariaImageSrc}
            className="no-print"
            style={{ marginBottom: 0 }}
            title="Bulgaria"
            alt="Bulgaria"
          />
        </h3>
      </div>
      <div>
        <div className={styles.block}>
          <a
            className={`${styles.link} no-print-info`}
            href="mailto:arvigeus@gmail.com"
          >
            arvigeus@gmail.com
          </a>
          <a
            className={styles.link}
            href="https://linkedin.com/in/arvigeus/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className={styles.link}
            href="https://github.com/arvigeus"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
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
    </div>
    <p className={styles.description}>
      Web developer with {new Date().getFullYear() - 2015}+ years of experience
      working with HTML, JavaScript, CSS, and other front-end technologies. I
      have built small to mid scale projects using React, React Native, Redux,
      Mobx, GraphQL, CSS-in-JS.
    </p>

    <hr />

    <div className={styles.container}>
      <div className={styles.side}>
        <h2>Software development skills</h2>

        <ul className={styles.skills}>
          <li className={styles.skill}>
            <h4 className={styles.skillHeading}>Web development</h4>
            <p>
              Latest specifications of HTML5, EcmaScript (JavaScript), CSS3.
            </p>
          </li>
          <li className={styles.skill}>
            <h4 className={styles.skillHeading}>ReactJs</h4>
            <p>
              Building complex interfaces with sophisticated state and logic.
              Also following latest news and features.
            </p>
          </li>
          <li className={styles.skill}>
            <h4 className={styles.skillHeading}>Redux / GraphQL / MobX</h4>
            <p>
              State management libraries. For redux, handling async actions with
              Redux Saga. Using Apollo client for GraphQL.
            </p>
          </li>
          <li className={styles.skill}>
            <h4 className={styles.skillHeading}>React Native</h4>
            <p>Created a cross platform Android / iOS app.</p>
          </li>
          <li className={styles.skill}>
            <h4 className={styles.skillHeading}>NodeJs</h4>
            <p>
              Managing projects with NodeJs / npm. Using build tools like
              Webpack for module bundling, Babel for latest ES specification,
              ESLint / Stylelint for rules, Prettier for formatting.
            </p>
          </li>
          <li className={styles.skill}>
            <h4 className={styles.skillHeading}>Git</h4>
            <p>Managing projects, version control, branches.</p>
          </li>
          <li className={styles.skill}>
            <h4 className={styles.skillHeading}>SQL</h4>
            <p>Experience with MS SQL, PostgreSQL. Both with ORM and raw.</p>
          </li>
          <li className={styles.skill}>
            <h4 className={styles.skillHeading}>C#</h4>
            <p>Building performance critical applications.</p>
          </li>
          <li className={styles.skill}>
            <h4 className={styles.skillHeading}>Computer Skills</h4>
            <p>Linux and Windows</p>
          </li>
        </ul>
      </div>

      <hr className="no-print" />

      <div className={styles.main}>
        <h2>Career Snapshot</h2>
        <Card
          title="Misterporter"
          url="https://misterporter.com/"
          position="Lead frontend developer"
          time="Feb 2018 - Present"
        >
          <p>
            Frontend engineer for a startup company. Responsible for
            implementing design from mockups, managing data handling, also
            building native application for mobile devices. In charge of future
            direction of the app and technology.
          </p>
        </Card>
        <Card
          title="Shopmetrics, Inc."
          url="https://shopmetrics.com/"
          position="Senior developer"
          time="Mar 2016 - Present"
        >
          <p>
            Processing information for over 50 clients - big companies with
            millions of customers. The existing infrastructure was unfit for
            that amount of data and increasing complexity, so it had to be
            migrated to newer codebase without disturbing existing operations.
          </p>
          <ul>
            <li>
              Managing internal system services with critical system performance
              requirements. of modernizing legacy interface to a new design.
            </li>
            <li>
              Rewriting legacy software for modern day usage, simplicity, and
              better clarity
            </li>
          </ul>
        </Card>
        <Card
          title="Shopmetrics, Inc."
          url="https://shopmetrics.com/"
          position="Web developer"
          time="Mar 2012 - Mar 2016"
        >
          <ul>
            <li>
              Building complex JS applications and implementing UIs. I was in
              charge of modernizing legacy interface to a new design.
            </li>
            <li>Testing interfaces</li>
          </ul>
        </Card>

        <hr />

        <h2>Education</h2>

        <Card
          title="Technical University - Varna"
          url="http://www.tu-varna.bg/"
          position="Bachelor of Computer Systems and Technologies"
          time=" 2009 - 2012"
        >
          <p>
            Relevant Coursework: Web design, Desktop programming (Java),
            Database management , Linux systems, Networking, MS Office
          </p>
        </Card>
      </div>
    </div>
  </div>
)

export default Resume

const Card = ({ title, url, time, position, children }) => (
  <section className={styles.card}>
    <div className={styles.cardHeading}>
      <h3 className={styles.cardTitle}>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="no-print-info"
        >
          {title}
        </a>
      </h3>
      <div className={styles.cardTime}>{time}</div>
    </div>
    <div className={styles.cardPosition}>{position}</div>
    {children}
  </section>
)
