import React from 'react'
import BigLink from '../components/bigLink'
import Layout from '../components/layout'
import SEO from '../components/seo'

const ResumePage = () => (
  <Layout>
    <SEO
      title="Ashton Six's resume"
      description="Software consultant with 6 years experience"
      keywords={[`ashton six`, `resume`, `software`]}
      meta={[{'http-equiv': 'refresh', content: '0;url=/resume.pdf'}]}
    />
    <BigLink to="/resume.pdf" external>
      download resume.pdf
    </BigLink>
  </Layout>
)

export default ResumePage
