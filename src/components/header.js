import PropTypes from 'prop-types'
import React from 'react'

import BigLink from './bigLink'

const Header = ({siteTitle, titleLink}) => (
  <header
    style={{
      marginBottom: `1.45rem`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`
      }}
    >
      <BigLink to="/" noMargin>
        ashtonsix
      </BigLink>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
