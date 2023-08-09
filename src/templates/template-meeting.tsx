import React, { useState } from "react";
import { Link, graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { Document, Page } from "react-pdf";
import { CalendarRegular, ClockRegular, LiveRegular, LocationRegular, TagRegular } from "@fluentui/react-icons";

import Seo from "../components/Seo";
import { AvatarPersona } from "../components/Profile";
import { CountdownBadge } from "../components/Countdown";
import { TagGroup } from "../components/Tag";
import { Tooltip } from "../components/Tooltip";
import { weekNumber, convertDate, getYouTubeEmbedUrl } from "../utils/util";
import { LeftSvg, PdfSvg, RightSvg, YouTubeSvg } from "../components/Icons";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import advanced from "dayjs/plugin/advancedFormat";
import duration from "dayjs/plugin/duration";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(advanced);
dayjs.extend(duration);

interface Props {
  data: Queries.MeetingTemplateQuery
  children: React.ReactNode
}

export const Head = ({ data }: Props) => {
  const { meeting } = data;
  if (!meeting) {
    throw new Error(`invalid argument: "meeting" is undefined`);
  }
  return (
    <Seo
      title={meeting.title}
      description={meeting.semester + " Week " + weekNumber(meeting.week_number) +
        " • " + convertDate(meeting.time_start, "MMMM DD, YYYY", meeting.timezone)
      }
      image={meeting.image?.path ? (
        meeting.image.path.childImageSharp?.gatsbyImageData.images.fallback?.src
      ) : undefined}
      video={meeting.recording ? (
        getYouTubeEmbedUrl(meeting.recording)
      ) : undefined}
      type="article"
    />
  )
}

const MeetingTemplate = ({ data, children }: Props) => {
  const { meeting } = data
  if (!meeting) {
    throw new Error(`invalid argument: "meeting" is undefined`);
  }
  const [numPages, setNumPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);
  const time_start = dayjs(meeting.time_start).tz(meeting.timezone);
  const time_close = dayjs(meeting.time_close).tz(meeting.timezone);
  const duration = dayjs.duration(time_close.diff(time_start));

  return (
    <>
      <article className="panel w-full grow" itemScope itemType="http://schema.org/Article">
        <header>
          <div className="flex flex-col">
            <h1 className="mb-1" itemProp="headline">{meeting.title}</h1>
            <p className="font-mono m-0 order-first">
              {meeting.semester} Week {weekNumber(meeting.week_number)}
            </p>
            {meeting.tags && meeting.tags.length > 0 ? (
              <div className="flex flex-row gap-2 items-center">
                <TagRegular className="text-secondary" />
                <TagGroup tags={meeting.tags.concat()} />
              </div>
            ) : null}
            {time_start ? (
              <div className="flex flex-row gap-2 items-center">
                <CalendarRegular className="text-secondary" />
                <time dateTime={time_start.format("YYYY-MM-DDTHH:mmZ")}>
                  <span className="inline align-middle">
                    {time_start.format("dddd, MMMM D, YYYY")}
                  </span>
                </time>
              </div>
            ) : null}
            {time_start && time_close ? (
              <div className="flex flex-row gap-2 items-center">
                <ClockRegular className="text-secondary" />
                <time dateTime={duration.toISOString()}>
                  <span className="inline align-middle">
                    {time_start.minute() == 0 ?
                      <>{time_start.format("h")}</> :
                      <>{time_start.format("h:mm")}</>
                    }
                    {time_start.format("A") !== time_close.format("A") ?
                      <>{time_start.format(" A")}</> :
                      null
                    }
                    &ndash;
                    {time_close.minute() == 0 ?
                      <>{time_close.format("h A")}</> :
                      <>{time_close.format("h:mm A")}</>
                    }
                  </span>
                </time>
                <CountdownBadge time_start={meeting.time_start} time_close={meeting.time_close} />
              </div>
            ) : null}
            {meeting.location ? (
              <div className="flex flex-row gap-2 items-center">
                <LocationRegular className="text-secondary" />
                <span className="inline align-middle">
                  {meeting.location}
                </span>
              </div>
            ) : null}
            <div className="flex flex-col md:flex-row flex-shrink-0 flex-wrap gap-x-2 gap-y-1 md:items-center pb-2">
              {meeting.credit_profiles.map((p, idx) => {
                const profile = (p ?? { name: meeting.credit[idx] }) as ProfileBasicProps;
                return (
                  <AvatarPersona key={idx} profile={profile}>
                    <span rel="author" itemProp="author">
                      {profile.name}
                    </span>
                    {idx === meeting.credit_profiles.length - 1 ? null : (
                      <span className="hidden md:block">,</span>
                    )}
                  </AvatarPersona>
                );
              })}
            </div>
          </div>
        </header>
        {meeting.live_video_url || meeting.recording || meeting.slides?.publicURL ? (
          <div className="grid sm:flex sm:flex-row gap-2 mb-4">
            {meeting.recording ? (
              <a
                href={meeting.recording}
                className="btn-primary"
                target="_blank" rel="noopener noreferrer"
              >
                <YouTubeSvg />
                <p className="inline align-middle m-0 ml-2">
                  Watch video
                </p>
              </a>
            ) : (
              meeting.live_video_url ? (
                <a
                  href={meeting.live_video_url}
                  className="btn-primary"
                  target="_blank" rel="noopener noreferrer"
                >
                  <LiveRegular />
                  <p className="inline align-middle m-0 ml-2">
                    Join live video
                  </p>
                </a>
              ) : null
            )}
            {meeting.slides?.publicURL ? (
              <a
                href={meeting.slides.publicURL}
                className="btn-primary"
              >
                <PdfSvg />
                <p className="inline align-middle m-0 ml-2">
                  Download slides
                </p>
              </a>
            ) : null}
          </div>
        ) : null}
        {meeting.assets && meeting.assets.length > 0 ? (
          <div>
            <span>Additional files:</span>
            <ul>
              {meeting.assets.map((asset, idx) => {
                if (!asset || !asset.base || !asset.publicURL) return null;
                return (
                  <li key={idx}>
                    <a
                      href={asset.publicURL}
                      target="_blank" rel="noopener noreferrer"
                    >
                      {asset.base}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}
        {meeting.recording && (
          (() => {
            const url = getYouTubeEmbedUrl(meeting.recording);
            return url ? (
              <iframe
                title={meeting.title + " video"}
                className="bg-surface-000 w-full max-w-2xl aspect-video mx-auto mb-4"
                allow="encrypted-media; fullscreen; picture-in-picture"
                allowFullScreen={true}
                src={url}
                itemProp="video"
              />
            ) : null;
          })()
        )}
        {meeting.slides?.publicURL && !meeting.recording && (
          <div className="flex flex-col items-center">
            <Document
              className="flex flex-col" file={meeting.slides.publicURL} 
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
        <span className="z-50 hidden md:block">
          <Tooltip.Profile offset={3} />
        </span>
      </article>
    </>
  );
}

export default MeetingTemplate;

export const query = graphql`
  query MeetingTemplate($id: String!) {
    meeting(id: { eq: $id }) {
      title
      time_start
      time_close
      timezone
      week_number
      credit
      credit_profiles {
        name
        profile_image {
          childImageSharp {
            gatsbyImageData(width: 160, aspectRatio: 1)
          }
        }
        handle
        links {
          name
          link
        }
        role
      }
      location
      image {
        path {
          childImageSharp {
            gatsbyImageData(width: 1024, placeholder: BLURRED)
          }
        }
        alt
      }
      live_video_url
      recording
      slides {
        publicURL
      }
      assets {
        base
        publicURL
      }
      semester
      tags
    }
  }
`;