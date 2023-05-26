import dayjs from "dayjs"
import Link from "next/link"
import { useMDXComponent } from 'next-contentlayer/hooks'
import { notFound } from 'next/navigation'
import config from "../../../site.config"
import { allMeetings, Meeting } from "contentlayer/generated"
import { PdfSvg, YouTubeSvg } from "../../../components/Icons"
import { weekNumber, convertDate, getYouTubeEmbedUrl } from "../../../utils/util"
import { createPostImageFoldersForCopySlug } from "../../../plugins/copy-images.mjs"

interface Props {
  params: {
    slug: string[]
  }
}

export async function generateStaticParams() {
  return allMeetings.map((meeting) => {
    const split_slug = meeting._raw.flattenedPath.split("/")
    return ({ slug: split_slug })
  });
}

export default function Page({ params }: Props) {
  const curr = allMeetings.find((meeting) => {
    return meeting._raw.flattenedPath === params.slug.join("/")
  })
  if (!curr) notFound()

  // Build images
  createPostImageFoldersForCopySlug(curr._raw.flattenedPath)

  // https://www.contentlayer.dev/docs/sources/files/mdx
  // TODO: https://stackoverflow.com/a/73019448
  const MDXContent = useMDXComponent(curr.body.code)

  return (
    <>
      <div className="flex flex-row gap-x-4">
        <aside className="xl:w-96 lg:w-80 lg:block hidden">
          {/* <MeetingSidebar /> */}
        </aside>
        <div className="panel w-full grow">
          <p className="font-mono m-0">
            {curr.semester} Week {weekNumber(curr.week_number)} &bull; {convertDate(curr.time_start, "MMMM DD, YYYY", config.timezone)}
          </p>
          <h1 className="mb-1">{curr.title}</h1>
          <p>
            Presented by:&nbsp;
            {curr.credit.length > 0 ? (
              curr.credit.map((credit: string, index: number) => (
                <>{credit}{index < curr.credit.length - 1 ? ", " : ""}</>
              ))
            ) : "SIGPwny" }
          </p>
          <div className="grid sm:flex sm:flex-row gap-2 mb-4">
            {curr.recording ? (
              <a className="btn-primary" href={curr.recording}>
                <YouTubeSvg />
                <p className="inline align-middle m-0 ml-2">
                  Watch video
                </p>
              </a>
            ) : null}
            {/* {curr.slides && curr.slides.publicURL ? (
              <Link className="btn-primary" to={curr.slides.publicURL}>
                <PdfSvg />
                <p className="inline align-middle m-0 ml-2">
                  Download slides
                </p>
              </Link>
            ) : null} */}
          </div>
          {curr.recording && (
            (() => {
              const url = getYouTubeEmbedUrl(curr.recording)
              return url ? (
                <iframe
                  className="bg-background w-full max-w-2xl aspect-video mx-auto mb-4"
                  allow="encrypted-media; fullscreen; picture-in-picture"
                  allowFullScreen={true}
                  src={url}
                  title={curr.title}
                />
              ) : null
            })()
          )}

          <MDXContent />
        </div>
      </div>
    </>
  )
}