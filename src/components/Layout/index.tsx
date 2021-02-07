/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { GlobalStyles, StyledLayout } from "./layout.styled"
import { LayoutProps } from "./layout.types"
import Spacer from "../Spacer"
import Footer from "../Footer"
import { Helmet } from "react-helmet"

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyles />
      <StyledLayout>
        <Spacer axis="vertical" size={26} />
        <main>{children}</main>
        <Footer />
      </StyledLayout>
    </>
  )
}

export default Layout
