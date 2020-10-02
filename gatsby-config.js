/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Nicolas Ceccarello",
    description: "This is Nicolas Ceccarello's Portfolio Site",
    author: "@nicolasceccarello",
    image: "/portfolio-home.jpg",
    siteUrl: "https://nicolasceccarello.tech",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        // apiURL: process.env.API_URL || "http://localhost:1337",
        apiURL: "https://nicolasceccarello-portfolio.herokuapp.com",
        queryLimit: 1000, // Default to 100
        contentTypes: [`jobs`, `projects`],
        singleTypes : [`about`],
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Nicolas Ceccarello',
        icon: "src/assets/site-icon-white.png",
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`100`, `200`, `300`, `400`, `500`, `700`, `800`],
          },
        ],
      },
    },
  ],
}
