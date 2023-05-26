import {
  defineDocumentType,
  defineNestedType,
  makeSource
} from "@contentlayer/source-files"
import path from "path"
import remarkGfm from "remark-gfm"
import remarkMdxImages from "remark-mdx-images"

import { calculateSemester } from "./src/utils/util"
import transformImgSrc from './src/plugins/transform-img-src.mjs'

export const Image = defineNestedType(() => ({
  name: "Image",
  fields: {
    path: { type: "string", required: false },
    alt: { type: "string", required: false },
  },
}))

export const Meeting = defineDocumentType(() => ({
  name: "Meeting",
  contentType: "mdx",
  filePathPattern: `**/*.{md,mdx}`,
  fields: {
    title: { type: "string", required: true },
    time_start: { type: "string", required: true },
    time_close: { type: "string", required: false },
    week_number: { type: "number", required: false, default: 0 },
    credit: { type: "list", of: { type: "string" }, default: ["SIGPwny"] },
    featured: { type: "boolean", required: false, default: false },
    location: { type: "string", required: false },
    slides: { type: "string", required: false },
    assets: { type: "list", of: { type: "string" } },
    image: { type: "nested", of: Image}, // TODO: add default placeholder image
    recording: { type: "string", required: false },
    tags: { type: "list", of: { type: "string" }, default: ["untagged"] },
  },
  computedFields: {
    semester: { type: "string", resolve: (meeting) => calculateSemester(meeting.time_start) },
    slug: { type: "string", resolve: (meeting) => `/meetings/${meeting._raw.flattenedPath}` },
    slidesDistUrl: {
      type: "string",
      resolve: (meeting) => {
        if (!meeting.slides) return null
        // get the content path of the slides (format: content/meetings/2021-09-01/slide_name.pdf)
        const slidesPath = path.join(meeting._raw.flattenedPath, meeting.slides)
        console.log(slidesPath)
      }
    },
  },
}))

export default makeSource({
  contentDirPath: "./content/meetings/", documentTypes: [Meeting],
  mdx: { remarkPlugins: [remarkGfm, transformImgSrc] }
  // mdx: {
  //   remarkPlugins: [remarkGfm, remarkMdxImages],
  //   esbuildOptions: (options) => {
  //     options.loader = {
  //       ...options.loader,
  //       '.png': 'dataurl',
  //       '.jpg': 'dataurl',
  //       '.jpeg': 'dataurl',
  //       '.gif': 'dataurl',
  //     }
  //     return options
  //   },
  // }
})