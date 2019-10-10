module.exports = {
  siteMetadata: {
    title: `Asociacion Drupal Colombia`,
    description: `Sitio web para la Asociacion Drupal Colombia`,
    author: `@drupalcolombia`,
    url: `https://asociaciondrupal.org`,
    siteUrl: 'https://www.asociaciondrupal.org'
  },

  //https://www.gatsbyjs.org/packages/gatsby-plugin-mailchimp/
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'es-419'
      }
    },
    {
      resolve: `gatsby-plugin-mailchimp`,
      options: {
        endpoint: `https://asociaciondrupal.us20.list-manage.com/subscribe/post?u=d2b12d0e99ee98693c95c65e5&amp;id=1c083b12af`,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `blue`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/drupal-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
