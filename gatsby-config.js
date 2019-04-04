module.exports = {
  siteMetadata: {
    title: `southporch`,
    description: `a radio station about communism and weed`,
    author: `wificat`,
  },
  plugins: [
    `gatsby-plugin-sass`,
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
    }
  },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `http://feeds.feedburner.com/streetfightradio.rss`,
        name: `StreetFight`,
    }
  },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `https://feeds.feedburner.com/srslywrong.rss`,
        name: `SrslyWrong`,
    }
  },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `http://feeds.soundcloud.com/users/soundcloud:users:465360117/sounds.rss`,
        name: `MandatoryOT`,
    }
  },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `https://trashfuturepodcast.podbean.com/feed.xml`,
        name: `TrashFuture`,
    }
  },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `http://feeds.fans.fm/105.xml`,
        name: `TheAntifada`,
    }
  },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `http://redscarepodcast.libsyn.com/rss`,
        name: `RedScare`,
    }
  },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `http://feeds.soundcloud.com/users/soundcloud:users:211911700/sounds.rss`,
        name: `ChapoTrap`,
    }
  },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `http://feeds.soundcloud.com/users/soundcloud:users:300222802/sounds.rss`,
        name: `TrillbillyWorkers`,
    }
  },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `http://feeds.feedburner.com/majorityreport.rss`,
        name: `MajorityReport`,
    }
  },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `https://feed.podbean.com/dumbbitchmedia/feed.xml`,
        name: `DumbBitch`,
    }
  },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `https://rss.simplecast.com/podcasts/5716/rss`,
        name: `CurrentAffairs`,
    }
  },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `http://feeds.soundcloud.com/users/soundcloud:users:324031914/sounds.rss`,
        name: `PodDamn`,
    }
  },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
