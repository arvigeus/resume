import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import './index.css'
import './style.css'
import './layout.css'
import '../components/Input/styles.css'

import Picture from '../components/Picture'
import ProfilePictureSrc from '../assets/images/profile.jpg'

const Layout = ({ children, data }) => (
  <div className="app">
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {
          name: 'description',
          content: 'A front-end developer with restless mind',
        },
        { name: 'keywords', content: 'html, es6, css, react, frontend' },
      ]}
    />
    <main className="paper container">
      <Picture
        className="profile-picture"
        src={ProfilePictureSrc}
        portrait
        effects={{ rotate: -1.41 }}
      />
      <nav className="navigation">
        <Link className="button nav-button" to="/">
          Profile
        </Link>
        <Link className="button nav-button" to="/resume">
          Resume
        </Link>
        <Link className="button nav-button" to="/portfolio">
          Portfolio
        </Link>
      </nav>
      <section className="content">{children()}</section>
    </main>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
