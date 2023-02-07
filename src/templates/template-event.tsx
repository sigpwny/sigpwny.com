import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import { MDXProvider } from "@mdx-js/react"

import Seo from "../components/Seo"

interface Props {
  data: Queries.EventTemplateQuery
  children: React.ReactNode
}

export const Head = ({ data }: Props) => {
  const { event_ } = data
  if (!event_) {
    throw new Error(`invalid argument: "event_" is null`)
  }
  return (
    <Seo
      title={event_.title}
      description={event_.description}
      image={event_.image && event_.image.path ? (
        event_.image.path.childImageSharp?.gatsbyImageData.images.fallback?.src
      ) : undefined}
    />
  )
}

const EventTemplate = ({ data, children }: Props) => {
  if (!data.event_) {
    throw new Error(`invalid argument: "event_" is null`)
  }
  return (
    <div className="panel">
      <GatsbyImage
        image={data.event_.image.path.childImageSharp?.gatsbyImageData as IGatsbyImageData}
        alt={data.event_.image.alt}
      />
      <h1>{data.event_.title}</h1>
      <p>{data.event_.description}</p>
      <MDXProvider>
        {children}
      </MDXProvider>
    </div>
  )
}

export default EventTemplate

export const query = graphql`
  query EventTemplate($id: String!) {
    event_: event(id: { eq: $id }) {
      title
      description
      time_start
      time_close
      location
      image {
        path {
          childImageSharp {
            gatsbyImageData(
              width: 600,
              quality: 100,
              placeholder: NONE,
            )
          }
        }
        alt
      }
      links {
        website
        ctftime
      }
      rating_weight
      stats {
        participants
        teams
        solves
      }
    }
  }
`