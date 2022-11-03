import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `SIGPwny`,
    siteUrl: `https://sigpwny.com`, // no trailing slash
    description: `SIGPwny is a student organization at the University of Illinois at Urbana-Champaign that focuses on information security and privacy.`,
    navLinks: [
      { name: "SIGPwny", link: "/" },
      { name: "Meetings", link: "/meetings/" },
      { name: "CTFs", link: "/events/" },
      { name: "About", link: "/about/" },
      { name: "Sponsors", link: "/sponsors/" },
    ],
    navCallToActionLinks: [
      { name: "Join", link: "/join/" },
    ],
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "meetings",
        "path": "./content/meetings/"
      },
    },
    
    "gatsby-plugin-image",
    "gatsby-plugin-postcss",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/logo/pwny8-dark.png"
      }
    },
  ]
};

export default config;
