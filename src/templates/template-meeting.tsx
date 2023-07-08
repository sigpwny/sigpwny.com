import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { Document, Page } from 'react-pdf'
import MeetingSidebar from "../components/MeetingSidebar"
import Seo from "../components/Seo"
import { weekNumber, convertDate, getYouTubeEmbedUrl } from "../utils/util"
import { LeftSvg, PdfSvg, RightSvg, YouTubeSvg } from "../components/Icons"

interface Props {
  data: Queries.MeetingTemplateQuery
  children: React.ReactNode
}

export const Head = ({ data }: Props) => {
  const { curr } = data
  if (!curr) {
    throw new Error(`invalid argument: "curr" meeting is undefined`)
  }
  return (
    <Seo
      title={curr.title}
      description={curr.semester + " Week " + weekNumber(curr.week_number) +
        " • " + convertDate(curr.time_start, "MMMM DD, YYYY", data.site!.siteMetadata.timezone)
      }
      image={curr.image?.path ? (
        curr.image.path.childImageSharp?.gatsbyImageData.images.fallback?.src
      ) : undefined}
      video={curr.recording ? (
        getYouTubeEmbedUrl(curr.recording)
      ) : undefined}
      type="article"
    />
  )
}

const MeetingTemplate = ({ data, children }: Props) => {
  const { curr, prev, next } = data
  if (!curr) {
    throw new Error(`invalid argument: "curr" meeting is undefined`)
  }

  const [numPages, setNumPages] = useState(1)
  const [pageNumber, setPageNumber] = useState(1)

  return (
    <>
      <article className="panel w-full grow" itemScope itemType="http://schema.org/Article">
        <header>
          <p className="font-mono m-0">
            {curr.semester} Week {weekNumber(curr.week_number)} &bull; <time>{convertDate(curr.time_start, "MMMM DD, YYYY", data.site!.siteMetadata.timezone)}</time>
          </p>
          <h1 className="mb-1" itemProp="headline">{curr.title}</h1>
          <p>
            Presented by:&nbsp;
            <span rel="author" itemProp="author">
              {curr.credit.length > 0 ? curr.credit.join(', ') : "SIGPwny" }
            </span>
          </p>
        </header>
        <div className="grid sm:flex sm:flex-row gap-2 mb-4">
          {curr.recording ? (
            <a
              href={curr.recording}
              className="btn-primary"
              target="_blank" rel="noopener noreferrer"
            >
              <YouTubeSvg />
              <p className="inline align-middle m-0 ml-2">
                Watch video
              </p>
            </a>
          ) : null}
          {curr.slides?.publicURL ? (
            <a
              href={curr.slides.publicURL}
              className="btn-primary"
            >
              <PdfSvg />
              <p className="inline align-middle m-0 ml-2">
                Download slides
              </p>
            </a>
          ) : null}
        </div>
        {curr.recording && (
          (() => {
            const url = getYouTubeEmbedUrl(curr.recording)
            return url ? (
              <iframe
                title={curr.title + " video"}
                className="bg-background w-full max-w-2xl aspect-video mx-auto mb-4"
                allow="encrypted-media; fullscreen; picture-in-picture"
                allowFullScreen={true}
                src={url}
                itemProp="video"
              />
            ) : null
          })()
        )}
        {curr.slides?.publicURL && !curr.recording && (
          <div className="flex flex-col items-center">
            <Document
              className="flex flex-col" file={curr.slides.publicURL} 
              onLoadError={console.error} 
              onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            >
              <Page className="m-1" pageNumber={pageNumber} />
            </Document>
            <div>
              <button
                title="Previous slide"
                className={"mx-2 " + (pageNumber <= 1 ? "text-secondary" : "text-primary hover:text-secondary")}
                disabled={pageNumber <= 1}
                onClick={() => setPageNumber(pageNumber - 1)}
              >
                <LeftSvg />
              </button>
              {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
              <button
                title="Next slide"
                className={"mx-2 " + (pageNumber >= numPages ? "text-secondary" : "text-primary hover:text-secondary")}
                disabled={pageNumber >= numPages}
                onClick={() => setPageNumber(pageNumber + 1)}
              >
                <RightSvg />
              </button>
            </div>
          </div>
        )}
        <MDXProvider>
          <section className="md-root w-full max-w-prose mx-auto" itemProp="articleBody">
            {children}
          </section>
        </MDXProvider>
      </article>
    </>
  )
}

export default MeetingTemplate

export const query = graphql`
  query MeetingTemplate(
    $id: String!
    $prev_id: String
    $next_id: String
  ) {
    curr: meeting(id: { eq: $id }) {
      title
      time_start
      time_close
      week_number
      credit
      recording
      image {
        path {
          childImageSharp {
            gatsbyImageData(width: 1024, placeholder: BLURRED)
          }
        }
        alt
      }
      semester
      slides {
        base
        publicURL
      }
    }
    prev: meeting(id: { eq: $prev_id }) {
      title
      slug
    }
    next: meeting(id: { eq: $next_id }) {
      title
      slug
    }
    site {
      siteMetadata {
        timezone
      }
    }
  }
`