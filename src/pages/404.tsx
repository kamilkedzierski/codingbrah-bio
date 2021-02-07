import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import FourOhFourView from "../views/FourOhFourView"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <FourOhFourView />
  </Layout>
)

export default NotFoundPage
