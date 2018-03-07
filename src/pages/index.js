import React from 'react'
import Link from 'gatsby-link'

const config = typeof window !== 'undefined' ? window.config : {HOSTNAME: "(not set)"};

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <h2>served by {config.HOSTNAME}</h2>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
