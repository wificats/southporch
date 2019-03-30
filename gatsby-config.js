module.exports = {
  siteMetadata: {
    title: `southporch`,
    description: `a radio station about communism and weed`,
    author: `wificat`,
  },
  plugins: [
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `https://beepbeeplettuce.podbean.com/feed.xml`,
        name: `BeepBeep`,
        // Optional
        // Read parser document: https://github.com/bobby-brennan/rss-parser#readme
        // parserOption: {
        //  customFields: {
        //    item: ['itunes:duration']
        //  }
        //}
    }
  },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `http://feeds.feedburner.com/streetfightradio.rss`,
        name: `StreetFight`,
        // Optional
        // Read parser document: https://github.com/bobby-brennan/rss-parser#readme
        // parserOption: {
        //  customFields: {
        //    item: ['itunes:duration']
        //  }
        //}
    }
  },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
