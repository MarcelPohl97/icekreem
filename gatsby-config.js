module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "icekreem",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "kDHyg0TTO6eT2IEdLOvsTy1uuT0fIQyaSnx0OzrIZwQ",
        spaceId: "8ae5xhoiw45y",
      },
    },
    "gatsby-plugin-gatsby-cloud",
    'gatsby-plugin-postcss',
  ],
};
