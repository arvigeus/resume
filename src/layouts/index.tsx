import React from "react"
import Helmet from "react-helmet"
import Link from "gatsby-link"
import cx from "classnames"

import * as styles from "./layout.module.css"

import Picture from "../components/Picture"
import ProfilePictureSrc from "../assets/images/profile.jpg"

// @ts-ignore
const Layout = ({ children, data }) => (
  <div className={styles.app}>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {
          name: "description",
          content: "A front-end developer with restless mind",
        },
        { name: "keywords", content: "html, es6, css, react, frontend" },
      ]}
    />
    <main className={cx(styles.container, styles.paper)}>
      <Picture
        className={styles.profilePicture}
        src={ProfilePictureSrc}
        portrait
        effects={{ rotate: -1.41 }}
      />
      <nav className={styles.navigation}>
        <Link className={cx("button", styles.navButton)} to="/">
          Profile
        </Link>
        <Link className={cx("button", styles.navButton)} to="/resume">
          Resume
        </Link>
        <Link className={cx("button", styles.navButton)} to="/portfolio">
          Portfolio
        </Link>
      </nav>
      <section className={styles.content}>{children}</section>
    </main>
  </div>
)

export default Layout
