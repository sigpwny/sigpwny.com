import React from "react"
import Link from "next/link"

import config from "../../site.config"
import { DiscordSvg, GitHubSvg, TwitterSvg, YouTubeSvg, PwnyBanner } from "../Icons"

const Footer = () => {
  const icons : Map<string, JSX.Element> = new Map([
    ["Discord", <DiscordSvg key="icon-discord" />],
    ["GitHub", <GitHubSvg key="icon-github" />],
    ["Twitter", <TwitterSvg key="icon-twitter" />],
    ["YouTube", <YouTubeSvg key="icon-youtube" />]
  ])
  return (
    <footer>
      <div className="container mx-auto my-8">
        <hr />
        <div className="flex flex-col md:flex-row mt-8">
          <div className="flex flex-row basis-1/2 max-w-md mb-8">
            <div className="flex flex-col basis-1/2">
              <p className="font-bold m-0">Sitemap</p>
              {config.navLinks?.map((link) => {
                if (link && link.name && link.url) {
                  return (
                    <p className="inline align-middle m-0" key={link.name}>
                      <Link href={link.url}>
                        {link.url === "/" ? "Home" : link.name}
                      </Link>
                    </p>
                  )
                }
              })}
            </div>
            <div className="flex flex-col basis-1/2">
              <p className="font-bold m-0">Connect</p>
              {config.socialLinks.map((link) => {
                if (link && link.name && link.url) {
                  return (
                    <span className="m-0" key={link.name}>
                      <a href={link.url} className="w-full">
                        {icons.has(link.name) ? icons.get(link.name) : null}
                        <p className="inline align-middle m-0 ml-2">
                          {link.name}
                        </p>
                      </a>
                    </span>
                  )
                }
              })}
            </div>
          </div>
          <div className="flex flex-col basis-1/2 justify-center md:order-first">
            <span className="w-4/5 mb-4">
              <PwnyBanner />
            </span>
          </div>
        </div>
        <p>
          &copy; {new Date().getFullYear()} SIGPwny. ACM@UIUC is a 501(c)(3) non-profit organization.
        </p>
      </div>
    </footer>
  )
}

export default Footer