/** @type {import('gatsby).GatsbyConfig} */
module.exports = {
  siteMetadata: {
    title: `Simple Blog Site`,
    siteUrl: `https://gatsbytutsimpleblog.gatsbyjs.io/`,
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-source-filesystem"],
};
