import React from "react"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => (
  <>
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container grow">
        {children}
      </div>
    </div>
    <Footer />
  </>
)

export default Layout