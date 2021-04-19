import PropTypes from 'prop-types'
import React from 'react'
import pic_logo_solocal from '../images/logo-solocal.svg'
import pic_logo_vpauto from '../images/logo-vpauto.png'
import pic_logo_casden from '../images/logo-casden.png'
import pic_logo_airbus from '../images/customers/logo-airbus.png'
import pic_logo_orange from '../images/logo-orange.svg'
import pic_logo_symfony from '../images/technologies/logo-symfony.png'
import pic_logo_k8s from '../images/technologies/logo-kubernetes.png'
import pic_logo_gcp from '../images/technologies/logo-google-cloud-plateform.png'
import pic_logo_azure from '../images/technologies/logo-microsoft-azure.png'
import pic_logo_php from '../images/technologies/logo-php8.webp'
import pic_logo_apip from '../images/technologies/logo-api-platform.png'
import pic_logo_gatsby from '../images/technologies/logo-gatsby.png'
import pic_logo_react from '../images/technologies/logo-react.png'
import pic_logo_vuejs from '../images/technologies/logo-vuejs.png'
import pic_logo_graphql from '../images/technologies/logo-graphql.png'
import pic_logo_docker from '../images/technologies/logo-docker.png'

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
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Intro
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('service')
            }}
          >
            Service
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>

    <h2>Clients</h2>

    <ul class="customers list-horizontal">
      <li>
        <a href="https://www.solocal.com/" title="Découvrir Solocal" target="_blank" rel="noreferrer">
          <img src={pic_logo_solocal} alt="" height="50" />
        </a>
      </li>
      <li>
        <a href="https://vpauto.fr/" title="Découvrir VPauto" target="_blank" rel="noreferrer">
          <img src={pic_logo_vpauto} alt="" height="55" />
        </a>
      </li>
      <li>
        <a href="https://www.casden.fr/" title="Découvrir Casden" target="_blank" rel="noreferrer">
          <img src={pic_logo_casden} alt="" height="75" />
        </a>
      </li>
      <li>
        <a href="https://www.airbus.com/" title="Découvrir Airbus" target="_blank" rel="noreferrer">
          <img src={pic_logo_airbus} alt="" height="40" />
        </a>
      </li>
      <li>
        <a href="https://www.orange.fr/" title="Découvrir Orange" target="_blank" rel="noreferrer">
          <img src={pic_logo_orange} alt="" height="60" />
        </a>
      </li>
    </ul>

    <h2>Technologies</h2>

    <ul class="technologies list-horizontal">
      <li>
        <a href="https://www.php.net/" title="Découvrir PHP 8" target="_blank" rel="noreferrer">
          <img src={pic_logo_php} alt="" height="75" />
        </a>
      </li>
      <li>
        <a href="https://symfony.com/" title="Découvrir Symfony" target="_blank" rel="noreferrer">
          <img src={pic_logo_symfony} alt="" height="65" />
        </a>
      </li>
      <li>
        <a href="https://api-platform.com/" title="Découvrir API Plateform" target="_blank" rel="noreferrer">
          <img src={pic_logo_apip} alt="" height="75" />
        </a>
      </li>
    </ul>
    <ul class="technologies list-horizontal list-other">
      <li>
        <a href="https://www.gatsbyjs.com/" title="Découvrir Gatsby" target="_blank" rel="noreferrer">
          <img src={pic_logo_gatsby} alt="" height="60" />
        </a>
      </li>
      <li>
        <a href="https://fr.reactjs.org/" title="Découvrir React" target="_blank" rel="noreferrer">
          <img src={pic_logo_react} alt="" height="75" />
        </a>
      </li>
      <li>
        <a href="https://vuejs.org/" title="Découvrir Vue.js" target="_blank" rel="noreferrer">
          <img src={pic_logo_vuejs} alt="" height="75" />
        </a>
      </li>
    </ul>

    <h2>Logiciels & protocoles</h2>
    <ul class="environnements list-horizontal">
      <li>
        <a href="https://www.docker.com/" title="Découvrir Docker" target="_blank" rel="noreferrer">
          <img src={pic_logo_docker} alt="" height="50" />
        </a>
      </li>
      <li>
        <a href="https://graphql.org/" title="Découvrir GraphQL" target="_blank" rel="noreferrer">
          <img src={pic_logo_graphql} alt="" height="50" />
        </a>
      </li>
      <li>
        <a href="https://kubernetes.io/fr/" title="Découvrir Kubernetes" target="_blank" rel="noreferrer">
          <img src={pic_logo_k8s} alt="" height="50" />
        </a>
      </li>
    </ul>

    <h2>Environnements</h2>
    <ul className="environnements list-horizontal">
      <li>
        <a href="https://cloud.google.com/" title="Découvrir Google Cloud Platform" target="_blank" rel="noreferrer">
          <img src={pic_logo_gcp} alt="" height="45" />
        </a>
      </li>
      <li>
        <a href="https://azure.microsoft.com/fr-fr/" title="Découvrir Microsoft Azure" target="_blank" rel="noreferrer">
          <img src={pic_logo_azure} alt="" height="50" />
        </a>
      </li>
    </ul>

  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
