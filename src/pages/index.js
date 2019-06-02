import React from "react"
import { graphql } from "gatsby"
import { MediaPlayer } from "@cassette/player"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default( { data } ) => {

  const feeds = [
    ...data.allFeedBeepBeep.edges,
    ...data.allFeedStreetFight.edges,
    ...data.allFeedSrslyWrong.edges,
    ...data.allFeedMandatoryOt.edges,
    ...data.allFeedTrashFuture.edges,
    ...data.allFeedTheAntifada.edges,
    ...data.allFeedChapoTrap.edges,
    ...data.allFeedTrillbillyWorkers.edges,
    ...data.allFeedQAnonAnon.edges,
    ...data.allFeedDumbBitch.edges,
    ...data.allFeedCurrentAffairs.edges,
    ...data.allFeedPodDamn.edges,
    ...data.allFeedInterGalactic.edges
  ].sort( function( a, b ) {
    return new Date( b.node.pubDate ) - new Date( a.node.pubDate );
  } );

  const playls = feeds.map( e => ( { url: e.node.enclosure.url, title: e.node.title } ) )
  const somas = [
    {
      url: 'http://ice2.somafm.com/fluid-128-mp3',
      title: 'Fluid'
    }, {
      url: 'http://ice2.somafm.com/groovesalad-256-mp3',
      title: 'Groove Salad'
    }, {
      url: 'http://ice2.somafm.com/spacestation-128-aac',
      title: 'Space Station Soma'
    }
  ]

  return ( <Layout >

    <SEO title="SOUTHPORCH - cyberprop radio" keywords={[
        `radio`,
        `dirtbag`,
        `left`,
        'weird',
        'twitter',
        'southporch'
      ]}/>
    <div style={{
        backgroundColor: '#bbb',
        marginTop: '82vh',
        marginBottom: '100vh',
        borderWidth: '4px',
        borderStyle: 'solid',
        borderColor: "#b73490"
      }}>
      <MediaPlayer
        autoplay={true}
        autoplayDelayInSeconds={3}
        controls={[ 'playpause', 'backskip', 'forwardskip', 'volume', 'progress' ]}
        playlist={playls}
        gapLengthInSeconds={6}
        />
      <MediaPlayer
        autoplay={true}
        controls={[ 'playpause', 'volume', 'forwardskip',  ]}
        playlist={somas}
        mediaElementRef={media => {

        }}
        />

    <div style={{
        marginTop: '1rem',
        padding: '2rem'
      }}>
      <h2>Playlist</h2>
      <table>
        <thead>
          <tr>
            <th>date</th>
            <th>title</th>
          </tr>
        </thead>
        <tbody>
          {
            feeds.map( ( {
              node
            }, index ) => ( <tr key={index}>
              <td>{node.pubDate.slice(0,11)}</td>
              <td>{node.title}</td>
            </tr> ) )
          }
        </tbody>
      </table>
    </div>
  </div>
  </Layout> )
}

export const query = graphql `
query {
  allFeedBeepBeep(limit:3) {
    totalCount
    edges {
      node {
        title
        isoDate
        link
        pubDate
        enclosure {
          url
        }
        contentSnippet
        itunes {
          author
        }
      }
    }
  }
  allFeedStreetFight(limit:3) {
    totalCount
    edges {
      node {
        title
        isoDate
        link
        pubDate
        enclosure {
          url
        }
        contentSnippet
        itunes {
          author
        }
      }
    }
  }
  allFeedSrslyWrong(limit:3) {
    totalCount
    edges {
      node {
        title
        isoDate
        link
        pubDate
        enclosure {
          url
        }
        contentSnippet
        itunes {
          author
        }
      }
    }
  }
    allFeedMandatoryOt(limit:3) {
    totalCount
    edges {
      node {
        title
        isoDate
        link
        pubDate
        enclosure {
          url
        }
        contentSnippet
        itunes {
          author
        }
      }
    }
  }
  allFeedTrashFuture(limit:3) {
    totalCount
    edges {
      node {
        title
        isoDate
        link
        pubDate
        enclosure {
          url
        }
        contentSnippet
        itunes {
          author
        }
      }
    }
  }
    allFeedTheAntifada(limit:3) {
    totalCount
    edges {
      node {
        title
        isoDate
        link
        pubDate
        enclosure {
          url
        }
        contentSnippet

      }
    }
  }

    allFeedChapoTrap(limit:3) {
    totalCount
    edges {
      node {
        title
        isoDate
        link
        pubDate
        enclosure {
          url
        }
        contentSnippet
        itunes {
          author
        }
      }
    }

  }
    allFeedTrillbillyWorkers(limit:3) {
    totalCount
    edges {
      node {
        title
        isoDate
        link
        pubDate
        enclosure {
          url
        }
        contentSnippet
        itunes {
          author
        }
      }
    }

  }   allFeedQAnonAnon(limit:3) {
    totalCount
    edges {
      node {
        title

        isoDate
        link
        pubDate
        enclosure {
          url
        }
        contentSnippet

      }
    }

  }    allFeedDumbBitch(limit:3) {
    totalCount
    edges {
      node {
        title
        isoDate
        link
        pubDate
        enclosure {
          url
        }
        contentSnippet
        itunes {
          author
        }
      }
    }

  }  allFeedCurrentAffairs(limit:3) {
    totalCount
    edges {
      node {
        title
        isoDate
        link
        pubDate
        enclosure {
          url
        }
        contentSnippet
        itunes {
          author
        }
      }
    }

  }  allFeedPodDamn(limit:3) {
    totalCount
    edges {
      node {
        title
        isoDate
        link
        pubDate
        enclosure {
          url
        }
        contentSnippet
        itunes {
          author
        }
      }
    }

  }
  allFeedInterGalactic(limit:3) {
   totalCount
   edges {
     node {
       title
       isoDate
       link
       pubDate
       enclosure {
         url
       }
       contentSnippet
       itunes {
         author
       }
     }
   }

 }
}
  `
