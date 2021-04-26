import PropTypes from 'prop-types'
import React from 'react'
import pic_logo_solocal from '../images/logo-solocal.svg'
import pic_logo_vpauto from '../images/logo-vpauto.png'
import pic_logo_casden from '../images/logo-casden.png'
import pic_logo_airbus from '../images/customers/logo-airbus.png'
import pic_logo_orange from '../images/logo-orange.svg'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-code"/>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Life in the cloud</h1>
        <p>
          <strong>- Développement applicatif sur-mesure -</strong>{' '}
          <br />
          pour <u>gérer</u> vos informations de demain{' '}
        </p>
        <p>
          <strong>- Audit Système -</strong>{' '}
          <br />
          pour <u>optimiser</u> votre évolution de demain
        </p>
        <p>
          <strong>- Référencement web (SEO) -</strong>{' '}
          <br />
          pour <u>déployer</u> votre image de demain
        </p>
      </div>
      <div>
        <h3>Clients</h3>

        <ul className="customers list-horizontal">
          <li>
            <a href="https://www.solocal.com/" title="Découvrir Solocal" target="_blank" rel="noreferrer">
              <img src={pic_logo_solocal} alt="" height="30"/>
            </a>
          </li>
          <li>
            <a href="https://vpauto.fr/" title="Découvrir VPauto" target="_blank" rel="noreferrer">
              <img src={pic_logo_vpauto} alt="" height="30"/>
            </a>
          </li>
          <li>
            <a href="https://www.casden.fr/" title="Découvrir Casden" target="_blank" rel="noreferrer">
              <img src={pic_logo_casden} alt="" height="40"/>
            </a>
          </li>
          <li>
            <a href="https://www.airbus.com/" title="Découvrir Airbus" target="_blank" rel="noreferrer">
              <img src={pic_logo_airbus} alt="" height="20"/>
            </a>
          </li>
          <li>
            <a href="https://www.orange.fr/" title="Découvrir Orange" target="_blank" rel="noreferrer">
              <img src={pic_logo_orange} alt="" height="35"/>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              window.scrollTo({top: 0, behavior: "smooth"})
              props.onOpenArticle('intro')
            }}
          >
            Intro
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              window.scrollTo({top: 0, behavior: "smooth"})
              props.onOpenArticle('service')
            }}
          >
            Service
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              window.scrollTo({top: 0, behavior: "smooth"})
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              window.scrollTo({top: 0, behavior: "smooth"})
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>

  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
