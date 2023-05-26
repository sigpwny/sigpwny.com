import dayjs from "dayjs"
import Link from "next/link"
import config from "../../site.config"
import { allMeetings, Meeting } from "contentlayer/generated"
import { PdfSvg, YouTubeSvg } from "../../components/Icons"
import { weekNumber, convertDate, formatSemester } from "../../utils/util"

export default function MeetingsPage() {
  const sortedMeetings = allMeetings.sort((a, b) => (
    dayjs(a.time_start).isAfter(dayjs(b.time_start)) ? -1 : 1
  ))
  const meetingsBySemester = sortedMeetings.reduce((acc, meeting) => {
    const semester = meeting.semester
    if (!semester) return acc
    if (acc[semester]) {
      acc[semester].push(meeting)
    } else {
      acc[semester] = [meeting]
    }
    return acc
  }, {} as {[semester: string]: Meeting[]})
  return (
    <section id="meetings" className="pb-8">
      <div className="flex flex-col mx-auto xl:w-2/3 lg:w-4/5">
        <h1>Meetings</h1>
        <div className="panel">
          {Object.entries(meetingsBySemester).map(([semester, meetings]) => (
            <div key={semester}>
              <p className="font-bold text-2xl m-0">
                {formatSemester(semester)}
              </p>
              <div className="flex flex-col pb-2">
                {meetings.map((meeting: Meeting) => (
                  <div key={meeting.slug} className="flex flex-row gap-x-4">
                    <div className="hidden sm:flex sm:flex-col min-w-max ">
                      <span className="font-mono">
                        {convertDate(meeting.time_start, "YYYY-MM-DD", config.timezone)}
                      </span>
                    </div>
                    <div className="flex flex-row w-full md:w-3/5 truncate justify-between">
                      <Link href={`${meeting.slug}`} className="truncate">
                        <span className="font-mono">Week {weekNumber(meeting.week_number)}</span>: {meeting.title}
                      </Link>
                      <div className="flex flex-row">
                        {meeting.recording &&
                          <a href={meeting.recording} className="mx-2">
                            <YouTubeSvg />
                          </a>
                        }
                        {/* {meeting.slides?.publicURL && <Link className="mx-2" to={meeting.slides.publicURL}>
                          <PdfSvg />
                        </Link>} */}
                      </div>
                    </div>
                    <div className="hidden md:flex md:flex-col md:w-1/5 overflow-x-auto whitespace-nowrap no-scrollbar">
                      {meeting.credit.join(', ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}