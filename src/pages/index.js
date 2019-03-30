import React from "react"
import { graphql } from "gatsby"
import { MediaPlayer } from "@cassette/player"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default( { data } ) => {

  const feeds = [
    ...data.allFeedBeepBeep.edges,
    ...data.allFeedStreetFight.edges
  ].sort ( function (a, b){
       return new Date(b.node.isoDate) - new Date(a.node.isoDate);
});

  var nowPlaying = feeds['0']

  const playls = feeds.map(e => ({url: e.node.enclosure.url, title: e.node.title, artist: e.node.itunes.author}))


  return ( <Layout >
    <SEO title="southporch radio" keywords={[
        `radio`,
        `dirtbag`,
        `left`,
        'weird',
        'twitter',
        'southporch'
      ]}/>
      <a href={nowPlaying.node.link}>
        <h1>{nowPlaying.node.title}</h1>
      </a>
      <small>{nowPlaying.node.pubDate}</small>
      <p style={{
          textTransform: 'lowercase',
          marginTop: '.725em'
        }}>{nowPlaying.node.contentSnippet}</p>
        <div style={{padding:'4rem'}}>
        <MediaPlayer
          playlist={playls}
          autoplay={true}
          controls={['playpause', 'backskip', 'forwardskip', 'progress']}
        />
        </div>
        <div style={{marginTop: '1rem'}}>
      <h2>Playlist</h2>
      <table>
        <thead>
          <tr>
          <th>author</th>
          <th>date</th>
          </tr>
        </thead>
        <tbody>
          {
            feeds.map( ( {
              node
            }, index ) => ( <tr key={index}>
              <td>{node.itunes.author}</td>
              <td>{node.isoDate}</td>
              <td>{node.title}</td>
            </tr> ) )
          }
        </tbody>
      </table>
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

}
  `
