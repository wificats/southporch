/* eslint-disable */
import { graphql } from "gatsby"

export const BeepFeed = graphql`
fragment BeepFeed on FeedBeepBeepConnection {
    totalCount
    edges {
      node {
        title
        isoDate
      }
    }
}
`
