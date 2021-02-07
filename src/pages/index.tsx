import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import HomeView from "../views/HomeView"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeView />
  </Layout>
)

export default IndexPage
