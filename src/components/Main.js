import PropTypes from 'prop-types'
import React from 'react'
import pic_antoine_darche from '../images/antoine_darche.jpeg'
import pic_intro from '../images/intro.png'
import pic_service from '../images/service.png'
import pic_about from '../images/about.png'
import pic_contact from '../images/contact.png'

class Main extends React.Component {
  render() {
    let close = (
      <div
  className="close"
  onClick={() => {
    this.props.onCloseArticle()
  }}
  />
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <div className="image main">
            <img src={pic_intro} alt="" />
          </div>
          <div className="article-content">
            <h2 className="major">Intro</h2>
            <p>
              Les organisations en croissance, d'aujourd'hui, investissent constamment dans leur système d'informations.
              Que ce soit pour le fonctionnement interne, la recherche et développement, l'image ou bien la sécurité,
              les projets numériques sont sources d'une évolution attractive positive.
            </p>
            <p>
              Créé en 2016, Life in the cloud est une entreprise qui accompagne les entreprises dans leur transformation numérique.
            </p>
            {close}
          </div>
        </article>

        <article
          id="service"
          className={`${this.props.article === 'service' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <div className="image main">
            <img src={pic_service} alt="" />
          </div>
          <h2 className="major">Service</h2>

          <p>
            Nous savons travailler dans des environnements complexes.
            Faire preuve d'une extrême agilité est devenu primordiale et un prérequis.
          </p>

          <h5>Développement</h5>
          <p>
            Nous utilisons principalement les languages de programmation <strong>PHP 7.4</strong> et <strong>PHP 8</strong>.
          </p>
          <ul class="development">
            <li><strong>Front-office</strong>
              <ul>
                <li>Site vitrine
                  <ul>
                    <li>page unique</li>
                    <li>pages multiples</li>
                    <li>référencement (SEO, Rich snippets, AMP)</li>
                    <li>reporting</li>
                  </ul>
                </li>
                <li>Marketplace
                  <ul>
                    <li>catalogue produit</li>
                    <li>gestion de stock</li>
                    <li>click and collect</li>
                    <li>référencement (SEO)</li>
                    <li>solution de paiement</li>
                    <li>test A/B</li>
                    <li>collecte d'informations utilisateurs</li>
                  </ul>
                </li>
                <li>Widget
                  <ul>
                    <li>générateur de publicités</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><strong>Back Office</strong>
              <ul>
                <li>Solution
                  <ul>
                    <li>ERP
                      <ul>
                        <li>gestion infrastructure réseau (FTTH)</li>
                        <li>gestion flotte automobile</li>
                        <li>gestion budgetaire</li>
                        <li>conduite de changement</li>
                        <li>aide à la décision</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>Service
                  <ul>
                    <li>monétisation</li>
                    <li>gestion centralisé des utilisateurs</li>
                    <li>traitement asynchrone</li>
                    <li>stockage de données</li>
                  </ul>
                </li>
                <li>Test
                  <ul>
                    <li>unitaire & fonctionnel</li>
                    <li>performance & charge</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <h5>Devops & Finops</h5>
          <ul>
            <li>intégration continue</li>
            <li>déploiement continue</li>
            <li>conteneurisation (Docker, Kubernetes)</li>
            <li>optimisation coût</li>
            <li>haute disponibilité</li>
            <li>CDN</li>
          </ul>
          <h5>Audit</h5>
          <ul>
            <li>architecture technique</li>
            <li>sécurité</li>
            <li>qualité</li>
            <li>flux</li>
          </ul>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <div className="image main">
            <img src={pic_about} alt="" />
          </div>
          <h2 className="major">About</h2>

          <ul>
            <li>
              <strong>1. Ecoute</strong>{' '}
              Nous sommes à votre écoute et identifierons précisément vos besoins.
            </li>
            <li>
              <strong>2. Analyse</strong>{' '}
              Atteindre vos objectifs mise de côté est notre priorité.
              Nous sommes force proposition et riche en connaissances.
            </li>
            <li>
              <strong>3. Solution</strong>{' '}
              Nous proposer la meilleur solution
            </li>
            <li>
              <strong>4. Contractualisation</strong>{' '}
              Nous proposer la meilleur solution
            </li>
            <li>
              <strong>5. Exploitation</strong>{' '}
              Nous proposer la meilleur solution
            </li>
            <li>
              <strong>6. Service client</strong>{' '}
              Nous proposer la meilleur solution
            </li>
          </ul>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <div className="image main">
            <img src={pic_contact}  alt="" width="" />
          </div>
          <h2 className="major">Contact</h2>

          <div class="profil">
            <div class="identity col-half">
              <h3>Antoine Darche</h3>
              <div class="h5">
                Expert PHP Freelance
                <br />Co-fondateur & CTO Covinfo.fr
              </div>
              <p>
                Passionné par le développement.
              </p>
              <div className="social-networks">
                <ul className="icons">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/antoine-darche-a2a93b88"
                      target="_blank"
                      className="icon fa-linkedin"
                      rel="noreferrer"
                    >
                      <span className="label">Linkedin</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/Ecureuilvirtuel"
                      target="_blank"
                      className="icon fa-github"
                      rel="noreferrer"
                    >
                      <span className="label">GitHub</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/Ecureuilvirtuel"
                      target="_blank"
                      className="icon fa-twitter"
                      rel="noreferrer"
                    >
                      <span className="label">Twitter</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-half">
                <img src={pic_antoine_darche} alt="Antoine Darche" />
            </div>
          </div>
          <div class="clear-col"/>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
