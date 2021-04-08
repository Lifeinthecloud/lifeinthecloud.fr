module.exports = {
  siteMetadata: {
    title: 'Life in the cloud',
    author: 'Antoine Darche',
    description: 'Life in the cloud est une entreprise de développement logiciel sur-mesure.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'life-in-the-cloud-website',
        short_name: 'litc-website',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
