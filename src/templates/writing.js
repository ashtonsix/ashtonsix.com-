import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default function WritingTemplate({data}) {
  const {markdownRemark} = data // data.markdownRemark holds our post data
  const {frontmatter, html} = markdownRemark
  let {byline = 'by ashtonsix'} = frontmatter
  byline = byline ? ' ' + byline : ''

  return (
    <Layout>
      <SEO
        title={frontmatter.title + byline}
        description={frontmatter.description}
        image={frontmatter.image}
        keywords={[`ashton six`]}
      />
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{__html: html}} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path}}) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
