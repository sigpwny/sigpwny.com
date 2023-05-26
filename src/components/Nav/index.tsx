"use client"
import React from "react"
import Link from "next/link"
import { Disclosure, Transition } from "@headlessui/react"

import config from "../../site.config"
import SmartLink from "../SmartLink"
import { PwnySvg } from "../Icons"

const Nav = () => {
  return (
    <Disclosure as="nav" className="my-6">
      {({ open }) => (
        <>
          <div className="container mx-auto">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile hamburger menu button*/}
                <Disclosure.Button className="navbar-toggler">
                  <span className="sr-only">Open main menu</span>
                  <span className={ open ? "" : "collapsed" }>
                    <span className="icon-bar top-bar" />
                    <span className="icon-bar middle-bar" />
                    <span className="icon-bar bottom-bar" />
                  </span>
                </Disclosure.Button>
              </div>
              {/* Desktop navbar */}
              <div className="flex-1 flex items-center justify-center md:items-stretch md:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/">
                    <PwnySvg height="48px" />
                  </Link>
                </div>
                <div className="hidden md:block md:ml-6 my-auto">
                  <div className="flex">
                    <div className="flex space-x-6 lg:space-x-8">
                      {config.navLinks.map((link) => (
                        <SmartLink
                          key={link.name}
                          href={link.url}
                          className="font-bold text-xl lg:text-2xl my-auto leading-normal"
                          activeClassName="nav-active"
                        >
                          {link.name}
                        </SmartLink>
                      ))}
                    </div>
                    <div className="absolute right-0 space-x-2 lg:space-x-4">
                      {config.navCallToActionLinks.map((link) => (
                        <SmartLink
                          key={link.name}
                          href={link.url}
                          className="font-bold text-xl lg:text-2xl my-auto leading-normal btn-primary"
                          activeClassName="nav-active"
                        >
                          {link.name}
                        </SmartLink>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Mobile navbar */}
          <Transition
            enter="transition duration-100 ease"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="md:hidden">
              <div className="container mx-auto">
                {config.navLinks.map((link) => (
                  <Disclosure.Button as={SmartLink}
                    key={link.name}
                    href={link.url}
                    className="font-bold text-2xl leading-normal block"
                    activeClassName="nav-active"
                  >
                    {link.name}
                  </Disclosure.Button>
                ))}
                <hr />
                {config.navCallToActionLinks.map((link) => (
                  <Disclosure.Button as={SmartLink}
                    key={link.name}
                    href={link.url}
                    className="font-bold text-2xl leading-normal block"
                    activeClassName="nav-active"
                  >
                    {link.name}
                  </Disclosure.Button>
                ))}
                <hr />
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}

export default Nav