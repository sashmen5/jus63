import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import img from '../images/jus63_1.jpeg';

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <h1>Hi Plehanova Valeriia!!!!!</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <img src={img} alt=""/>
      {/*<Image/>*/}
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
