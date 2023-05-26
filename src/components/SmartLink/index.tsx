import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation";

interface Props {
  children: React.ReactNode
  href: string
  className?: string
  activeClassName?: string
  newtab?: boolean
  [key: string]: any
}

const SmartLink = ({ children, href, className, activeClassName, newtab, ...other }: Props) => {
  // This assumes that any internal link will start with exactly one slash, 
  // and that anything else is external.
  const is_internal = /^\/(?!\/)/.test(href)
  const is_active = usePathname() === href

  if (className && activeClassName && is_active) {
    className = `${className} ${activeClassName}`
  } else if (activeClassName && is_active) {
    className = activeClassName
  }

  // Use Link + no newtab for internal links, and <a> + newtab for others
  // (unless newtab is explicitly defined)
  if (is_internal) {
    return (
      <Link
        href={href}
        className={className}
        {...other}
      >
        {children}
      </Link>
    )
  }
  return (
    <a
      href={href}
      className={className}
      {...other}

    >
      {children}
    </a>
  )
}

export default SmartLink