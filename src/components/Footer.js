import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
      <p className="copyright">&copy; Life in the cloud</p>
      <ul>
        <li><a href="" title="">Mentions légales</a></li>
      </ul>

    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
