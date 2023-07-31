import React from "react"
import { Link, graphql } from "gatsby"
import { Tooltip } from "react-tooltip"
import dayjs from "dayjs"

import { AvatarGroup, ProfileCard } from "../components/Profile"
import Seo from "../components/Seo"
import { TagGroup } from "../components/Tag"
import { weekNumber, convertDate, formatSemester } from "../utils/util"
import { PdfSvg, YouTubeSvg } from "../components/Icons"

type Meeting = Queries.MeetingsPageQuery["allMeeting"]["meetings"][0]

interface Props {
  data: Queries.MeetingsPageQuery 
}

export function Head() {
  return (
    <Seo
      title="Meetings"
      description="Index of all SIGPwny meetings"
    />
  )
}

const MeetingInfo = () => (
  <div className="flex flex-row mb-4">
    <div className="border-l-4 border-l-primary p-4">
      <p className="text-2xl font-bold">
        Thursdays
      </p>
      <p>
        6 PM - 7 PM
      </p>
    </div>
    <div className="border-l-4 border-l-primary p-4">
      <p className="text-2xl font-bold">
        Sundays
      </p>
      <p>
        2 PM - 3 PM
      </p>
    </div>
    <div className="border-l-4 border-l-primary p-4">
      <p className="text-2xl font-bold">
        Office Hours
      </p>
      <p>
        6 PM
      </p>
    </div>
  </div>
)

const MeetingRow = ({ meeting }: { meeting: Meeting }) => {
  const profiles = meeting.credit_profiles.map((profile, idx) => {
    if (profile) return profile
    return {
      name: meeting.credit[idx]
    }
  })
  return (
    <li>
      <div className="flex flex-row px-2 py-1 -mx-2 gap-x-4 rounded-lg hover:bg-surface-200">
        <div className="flex flex-row flex-grow lg:flex-grow-0 min-w-0 lg:w-1/2 xl:w-3/5 gap-x-4 items-center justify-content-center">
          <span
            className="hidden sm:flex font-mono min-w-max cursor-default day-tooltip-select"
            data-tooltip-content={convertDate(meeting.time_start, "ddd", meeting.timezone)}
          >
            {convertDate(meeting.time_start, "YYYY-MM-DD", meeting.timezone)}
          </span>
          <Link to={`${meeting.slug}`} className="truncate">
            <span>
              <span className="font-mono">Week {weekNumber(meeting.week_number)}</span>: {meeting.title}
            </span>
          </Link>
        </div>
        <div className="hidden lg:flex flex-row lg:flex-grow gap-x-4 truncate">
          {meeting.tags && meeting.tags.length > 0 && (
            <TagGroup tags={meeting.tags} char_limit={25} tag_limit={3} />
          )}
        </div>
        <div className="hidden md:flex flex-row gap-x-4 min-w-fit truncate">
          <div className="grid grid-cols-3" style={{gridTemplateColumns: `repeat(3, 2rem)`}}>
            <div className="flex items-center justify-items-center">
            </div>
            <div className="flex items-center justify-items-center">
              {meeting.recording && (
                <a
                  href={meeting.recording}
                  className="px-2 link-tooltip-select"
                  aria-label={"Watch video"}
                  data-tooltip-content={"Watch video"}
                >
                  <YouTubeSvg />
                </a>
              )}
            </div>
            <div className="flex items-center justify-items-center">
              {meeting.slides?.publicURL && (
                <a
                  href={meeting.slides.publicURL}
                  className="px-2 link-tooltip-select"
                  aria-label={"Download slides"}
                  data-tooltip-content={"Download slides"}
                >
                  <PdfSvg />
                </a>
              )}
            </div>
          </div>
          <AvatarGroup
            profiles={profiles}
            limit={3}
          />
        </div>
      </div>
      <hr className="border-surface-200" />
    </li>
  )
}

const MeetingsPage = ({ data }: Props) => {
  const meetingsBySemester = data.allMeeting.meetings
  .reduce(
    (acc, meeting) => {
      const semester = meeting.semester
      if (!semester) return acc
      if (acc[semester]) {
        acc[semester].push(meeting)
      } else {
        acc[semester] = [meeting]
      }
      return acc
    }, {} as {[semester: string]: Meeting[]
  })
  return (
    <section id="meetings" className="pb-8">
      <div className="flex flex-col mx-auto 2xl:w-5/6">
        <h1>Upcoming Meetings</h1>
        <MeetingInfo />
        <h1>All Meetings</h1>
        <div className="panel">
          {Object.entries(meetingsBySemester).map(([semester, meetings]) => (
            <div key={semester} id={semester}>
              <p className="font-bold text-2xl m-0">{formatSemester(semester)}</p>
              <hr className="border-surface-200" />
              <ul className="flex flex-col pb-2">
                {meetings.map((meeting, idx) => (
                  <MeetingRow key={idx} meeting={meeting} />
                ))}
              </ul>
            </div>
          ))}
          <span className="tooltip-container">
            <Tooltip
              anchorSelect=".day-tooltip-select"
              className="!px-2 !py-0 !transition-none !bg-surface-250 !shadow-2xl !rounded-xl font-mono hidden md:block"
              border={"2px solid var(--color-surface-300"}
              opacity={1}
              place={"left"}
            />
            <Tooltip
              anchorSelect=".tooltip-select"
              className="!p-2 !transition-none !bg-surface-250 !shadow-2xl !rounded-xl"
              border={"2px solid var(--color-surface-300"}
              opacity={1}
              clickable
            />
            <Tooltip
              anchorSelect=".link-tooltip-select"
              className="!px-3 !py-1 !transition-none !bg-surface-250 !shadow-2xl !rounded-xl"
              border={"2px solid var(--color-surface-300"}
              opacity={1}
            />
            <Tooltip
              anchorSelect=".profile-tooltip-select"
              className="!p-0 !transition-none !bg-transparent !shadow-2xl"
              opacity={1}
              place={"top-end"}
              clickable
              noArrow
              render={({ content }) => {
                if (!content) return null
                const profile = JSON.parse(content)
                return (
                  <ProfileCard profile={profile} />
                )
              }}
            />
          </span>
        </div>
      </div>
    </section>
  )
}

export default MeetingsPage

export const query = graphql`
  query MeetingsPage {
    allMeeting(sort: {time_start: DESC}) {
      meetings: nodes {
        title
        time_start
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
        image {
          path {
            childImageSharp {
              gatsbyImageData(width: 600, placeholder: BLURRED)
            }
          }
          alt
        }
        slides {
          publicURL
        }
        recording
        tags
        semester
        slug
      }
    }
  }
`
