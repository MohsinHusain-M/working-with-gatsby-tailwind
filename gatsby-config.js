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
    {
      resolve: "gatsby-plugin-snipcartv3",
      options: {
        apiKey:
          "YmQzYzAwNjAtNmMwZC00OTk2LWFkZGEtNGIxZGMzOTU2MzVmNjM3ODgyOTAxNzIxNDIzMzYy",
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
  ],
};
