module.exports = {
  siteMetadata: {
    title: `Ednam-solutions-v2`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "wSVnIeuGGODrmvYLI7POCgyTTZBgNhkl3X9Ctw4yFow",
        spaceId: "4yn1w4iyl62m",
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
  ],
};
