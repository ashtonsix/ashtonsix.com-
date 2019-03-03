import React from 'react'
import BigLink from '../components/bigLink'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="ashtonsix" keywords={[`ashton six`]} />
    <BigLink to="/resume.pdf" external>
      resume
    </BigLink>
    <BigLink to="/elephants">elephants</BigLink>
  </Layout>
)

export default IndexPage
