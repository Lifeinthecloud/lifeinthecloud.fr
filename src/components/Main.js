import PropTypes from 'prop-types'
import React from 'react'
import pic_antoine_darche from '../images/antoine_darche.jpeg'
import pic_intro from '../images/intro.png'
import pic_service from '../images/service.png'
import pic_about from '../images/about.png'
import pic_contact from '../images/contact.png'
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
              Les organisations, en croissance, investissent constamment dans leur <strong>Système d'Informations</strong>.
              Que ce soit pour le fonctionnement interne, l'image de l'entreprise, la recherche et développement, ou la sécurité,
              les <strong>projets numériques</strong> sont sources d'une évolution attractive positive.
            </p>
            <p>
              Créé en 2016, Life in the cloud est une entreprise qui accompagne les organisations dans leur transformation numérique.
            </p>

            <p>
              <strong>- Tech Lead -</strong>{' '}
              <br />
              pour <u>mener</u> vos projets de demain{' '}
            </p>
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


            <div>
              <h3>Technologies</h3>

              <ul className="technologies list-horizontal">
                <li>
                  <a href="https://www.php.net/" title="Découvrir PHP 8" target="_blank" rel="noreferrer">
                    <img src={pic_logo_php} alt="" height="55"/>
                  </a>
                </li>
                <li>
                  <a href="https://symfony.com/" title="Découvrir Symfony" target="_blank" rel="noreferrer" className="symfony">
                    <img src={pic_logo_symfony} alt="" height="40"/>
                  </a>
                </li>
                <li>
                  <a href="https://api-platform.com/" title="Découvrir API Plateform" target="_blank" rel="noreferrer">
                    <img src={pic_logo_apip} alt="" height="55"/>
                  </a>
                </li>
              </ul>
              <ul className="technologies list-horizontal list-other">
                <li>
                  <a href="https://www.gatsbyjs.com/" title="Découvrir Gatsby" target="_blank" rel="noreferrer" className="gatsby">
                    <img src={pic_logo_gatsby} alt="" height="35"/>
                  </a>
                </li>
                <li>
                  <a href="https://fr.reactjs.org/" title="Découvrir React" target="_blank" rel="noreferrer" className="react">
                    <img src={pic_logo_react} alt="" height="55"/>
                  </a>
                </li>
                <li>
                  <a href="https://vuejs.org/" title="Découvrir Vue.js" target="_blank" rel="noreferrer">
                    <img src={pic_logo_vuejs} alt="" height="55"/>
                  </a>
                </li>
              </ul>

              <h3>Logiciels & protocoles</h3>
              <ul className="softwares list-horizontal">
                <li>
                  <a href="https://www.docker.com/" title="Découvrir Docker" target="_blank" rel="noreferrer">
                    <img src={pic_logo_docker} alt="" height="32"/>
                  </a>
                </li>
                <li>
                  <a href="https://graphql.org/" title="Découvrir GraphQL" target="_blank" rel="noreferrer" className="graphQl">
                    <img src={pic_logo_graphql} alt="" height="35"/>
                  </a>
                </li>
                <li>
                  <a href="https://kubernetes.io/fr/" title="Découvrir Kubernetes" target="_blank" rel="noreferrer">
                    <img src={pic_logo_k8s} alt="" height="32"/>
                  </a>
                </li>
              </ul>

              <h3>Environnements</h3>
              <ul className="environnements list-horizontal">
                <li>
                  <a href="https://cloud.google.com/" title="Découvrir Google Cloud Platform" target="_blank"
                     rel="noreferrer" className="gcp">
                    <img src={pic_logo_gcp} alt="" height="25"/>
                  </a>
                </li>
                <li>
                  <a href="https://azure.microsoft.com/fr-fr/" title="Découvrir Microsoft Azure" target="_blank"
                     rel="noreferrer">
                    <img src={pic_logo_azure} alt="" height="30"/>
                  </a>
                </li>
              </ul>
            </div>
            {close}
          </div>
        </article>

        <article
          id="lead"
          className={`${this.props.article === 'lead' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <div className="image main">
            <img src={pic_about} alt="" />
          </div>
          <h2 className="major">Tech Lead</h2>
          <ul>
            <li>Formateur</li>
            <li>Expert</li>
            <li>Coach</li>
            <li>Facilitateur</li>
          </ul>

          <a href="https://blog.openclassrooms.com/2017/11/21/parole-dexpert-role-de-tech-lead-selon-damien-beaufils/">https://blog.openclassrooms.com/2017/11/21/parole-dexpert-role-de-tech-lead-selon-damien-beaufils/</a>
          {close}
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
            <div class="identity">
              <img src={pic_antoine_darche} alt="Antoine Darche" className="photo-profil" />
              <h3>Antoine Darche</h3>
              <div class="h5">
                Expert PHP Freelance
                <br />Tech Lead
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
          </div>
          <div class="clear-col"/>

          <hr />

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
