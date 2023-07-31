import React from "react"
import { Link } from "gatsby"

const BrandingPage = () => {
  return (
    <>
      <h1>Branding</h1>
      <ul>
        <li>SIGPwny should only be written as "SIGPwny" or "sigpwny"</li>
        <li>Use dashes for bullet points and dates (e.g. 2022-01-01, NOT 2022/01/01)</li>
        <li>Whenever possible, always include the year on dates. This allows users to recognize outdated content and reduce future confusion.</li>
        <li>Prioritize the usage of left-aligned content over centered content</li>
        <li>If you're unsure which font/color/logo to use, use your best judgment (or ask someone)</li>
        <li>When using quotes, use "straight quotes," not “smart quotes” (the fancy curled ones)</li>
        <li>In Google Drive products, you can default to straight quotes using Tools... Preferences and then unchecking "Use smart quotes"</li>
      </ul>
      <h2>Colors</h2>
      <div className="card">
        <p className="text-xl font-bold">
          Accessible
        </p>
        <p>
          To fulfill our mission of being inclusive, our color palettes focus not only on aesthetics, but usability and 
          accessibility. Our palettes are designed to meet WCAG 2.1 AA standards for color contrast.
        </p>
      </div>
      <div className="card">
        <p className="text-xl font-bold">
          Dark Mode
        </p>
        <p>
          Most of SIGPwny's visual identity is based on dark backgrounds. Additionally, our color palettes are designed 
          to be accessible on dark backgrounds. Use dark mode whenever possible.
        </p>
      </div>
    </>
  )
}

export default BrandingPage
