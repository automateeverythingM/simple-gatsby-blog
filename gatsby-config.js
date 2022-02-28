/** @type {import('gatsby).GatsbyConfig} */
module.exports = {
  siteMetadata: {
    title: `Simple Blog Site`,
    siteUrl: `https://gatsbytutsimpleblog.gatsbyjs.io/`,
    description: `Fallowing Gatsby tutorial`,
  },
  plugins: [
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: "blog", path: `${__dirname}/blog/` },
    },
    { resolve: `gatsby-plugin-mdx`, options: { extension: ["mdx", "md"] } },
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
  ],
};
