import React from 'react'
import NameTag from '../components/NameTag'

import htmlImageSrc from '../assets/images/html.png'
import cssImageSrc from '../assets/images/css.svg'
import javascriptImageSrc from '../assets/images/javascript.png'
import reactImageSrc from '../assets/images/react.svg'
import graphqlImageSrc from '../assets/images/graphql.svg'
import reduxImageSrc from '../assets/images/redux.svg'
import nodejsImageSrc from '../assets/images/nodejs.svg'
import gitImageSrc from '../assets/images/git.svg'
import mobxImageSrc from '../assets/images/mobx.svg'
import styledImageSrc from '../assets/images/styled.png'
import webpackImageSrc from '../assets/images/webpack.svg'
import babelImageSrc from '../assets/images/babel.svg'
import eslintImageSrc from '../assets/images/eslint.svg'
import jestImageSrc from '../assets/images/jest.svg'
import csharpImageSrc from '../assets/images/csharp.svg'
import linkedinIconSrc from '../assets/images/linkedin.png'
import githubIconSrc from '../assets/images/github.png'
import emailIconSrc from '../assets/images/email.png'
import skypeIconSrc from '../assets/images/skype.png'
import twitterIconSrc from '../assets/images/twitter.png'
import reactnativeIconSrc from '../assets/images/reactnative.svg'

import styles from './index.module.css'

const IndexPage = () => (
  <div>
    <NameTag
      name="Nikolay Stoynov"
      slogan="Front-end web developer"
      rotate={0.96}
      readOnly
    />
    <p>
      I am a software engineer who believes in using technology to do good.
      Passionate about good code practices and latest technologies. Constantly
      learning.
    </p>
    <h3>Contact me</h3>
    <section className={styles.media}>
      <a
        className={styles.link}
        href="https://linkedin.com/in/arvigeus/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedinIconSrc} alt="LinkedIn" />
      </a>
      <a
        className={styles.link}
        href="https://github.com/arvigeus"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={githubIconSrc} alt="GitHub" />
      </a>
      <a className={styles.link} href="mailto:arvigeus@gmail.com">
        <img src={emailIconSrc} alt="Email" />
      </a>
      <a className={styles.link} href="skype:arvigeus?chat">
        <img src={skypeIconSrc} alt="Skype" />
      </a>
      <a
        className={styles.link}
        href="https://twitter.com/arvigeus"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={twitterIconSrc} alt="Twitter" />
      </a>
    </section>
    <p>
      Everywhere else:{' '}
      <a
        className="handwriting"
        href="https://www.google.bg/search?q=arvigeus"
        target="_blank"
        rel="noopener noreferrer"
      >
        arvigeus
      </a>
    </p>
    <hr />
    <section className={styles.technology}>
      <h3>My skillset</h3>
      <ul className={styles.skills}>
        <Skill name="HTML5" icon={htmlImageSrc} />
        <Skill name="CSS3" icon={cssImageSrc} />
        <Skill name="JavaScript (ES6+)" icon={javascriptImageSrc} />
        <Skill name="ReactJs" icon={reactImageSrc} />
        <Skill name="Redux" icon={reduxImageSrc} />
        <Skill name="GraphQL" icon={graphqlImageSrc} />
        <Skill name="MobX" icon={mobxImageSrc} />
        <Skill name="React Native" icon={reactnativeIconSrc} />
        <Skill name="NodeJs" icon={nodejsImageSrc} />
        <Skill name="Git" icon={gitImageSrc} />
        <Skill name="Styled Components" icon={styledImageSrc} />
        <Skill name="Webpack" icon={webpackImageSrc} />
        <Skill name="Babel" icon={babelImageSrc} />
        <Skill name="EsLint" icon={eslintImageSrc} />
        <Skill name="Jest" icon={jestImageSrc} />
        <Skill name="C#" icon={csharpImageSrc} />
      </ul>
    </section>
  </div>
)

export default IndexPage

const Skill = ({ name, icon }) => (
  <li className={styles.skill}>
    <div className={styles.skillInnerWrapper}>
      <figure>
        <div className={styles.iconWrapper}>
          <img className={styles.icon} src={icon} alt={name} title={name} />
        </div>
        <figcaption>
          <cite className={styles.skillTitle}>{name}</cite>
        </figcaption>
      </figure>
    </div>
  </li>
)
