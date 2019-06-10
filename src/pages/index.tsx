import React from "react"
import { graphql } from "gatsby"

import NameTag from "../components/NameTag"
import Layout from "../layouts"

import * as styles from "./index.module.css"

// @ts-ignore
const IndexPage = ({ data }) => (
  <Layout data={data}>
    <NameTag
      name="Nikolay Stoynov"
      slogan="Front-end web developer"
      rotate={0.96}
      formName="text"
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
        <img src={require("../assets/images/linkedin.png")} alt="LinkedIn" />
      </a>
      <a
        className={styles.link}
        href="https://github.com/arvigeus"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={require("../assets/images/github.png")} alt="GitHub" />
      </a>
      <a className={styles.link} href="mailto:arvigeus@gmail.com">
        <img src={require("../assets/images/email.png")} alt="Email" />
      </a>
      <a className={styles.link} href="skype:arvigeus?chat">
        <img src={require("../assets/images/skype.png")} alt="Skype" />
      </a>
      <a
        className={styles.link}
        href="https://twitter.com/arvigeus"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={require("../assets/images/twitter.png")} alt="Twitter" />
      </a>
    </section>
    <p>
      Everywhere else:{" "}
      <a
        style={{ fontFamily: "var(--font-handwriting)" }}
        href="https://www.google.bg/search?q=arvigeus"
        target="_blank"
        rel="noopener noreferrer"
      >
        arvigeus
      </a>
    </p>
    <hr />
    <section>
      <h3>My skillset</h3>
      <ul className={styles.skills}>
        <Skill name="HTML5" icon={require("../assets/images/html.png")} />
        <Skill name="CSS3" icon={require("../assets/images/css.svg")} />
        <Skill
          name="JavaScript (ES6+)"
          icon={require("../assets/images/javascript.png")}
        />
        <Skill
          name="TypeScript"
          icon={require("../assets/images/typescript.svg")}
        />
        <Skill name="ReactJs" icon={require("../assets/images/react.svg")} />
        <Skill
          name=".Net Core"
          icon={require("../assets/images/dotNetCore.svg")}
        />
        <Skill name="Redux" icon={"../assets/images/redux.svg"} />
        <Skill name="GraphQL" icon={require("../assets/images/graphql.svg")} />
        <Skill name="MobX" icon={require("../assets/images/mobx.svg")} />
        <Skill
          name="React Native"
          icon={require("../assets/images/reactnative.svg")}
        />
        <Skill name="NodeJs" icon={require("../assets/images/nodejs.svg")} />
        <Skill name="Git" icon={require("../assets/images/git.svg")} />
        <Skill
          name="Styled Components"
          icon={require("../assets/images/styled.png")}
        />
        <Skill name="Webpack" icon={require("../assets/images/webpack.svg")} />
        <Skill name="Babel" icon={require("../assets/images/babel.svg")} />
        <Skill name="EsLint" icon={require("../assets/images/eslint.svg")} />
        <Skill
          name="Stylelint"
          icon={require("../assets/images/stylelint.svg")}
        />
        <Skill name="Jest" icon={require("../assets/images/jest.svg")} />
        <Skill
          name="@testing-library/react"
          icon={require("../assets/images/reactTestingLibrary.png")}
        />
      </ul>
    </section>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

type SkillProps = {
  name: string
  icon: string
}

const Skill: React.FC<SkillProps> = ({ name, icon }) => (
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
