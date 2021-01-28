module.exports = {
  siteMetadata: {
    title: `The Noesis ke`,
    name: `The Noesis`,
    siteUrl: `https://thenoesis11.netlify.app`,
    description: `Welcome to The Noesis Ke. Where We Take Deep Dive Into Science and Technology To Bring You Quality Explainers, Guides, Reviews and more`,
    hero: {
      heading: `A Deep Dive Into The Tech and Science Space.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/thenoesiske`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/thenoesiske`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Noesis`,
        short_name: `Noesis`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
