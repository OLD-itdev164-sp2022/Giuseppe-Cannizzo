import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { H1 } from '../components/Heading'
import { Image } from 'rebass'

const BlogPost = ({ data }) => {
    const { title, body, heroImage } = data.contentfulBlogPost;

    return (
        <Layout>
            <GatsbyImage src={heroImage.gatsbyImageData} />
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }}></div>
        </Layout>
    );
}

export default BlogPost;

export const pageQuery = graphql`
    query blogPostQuery($slug: String!) {
        contentfulBlogPost(slug: {eq: $slug}) {
            title
            slug
            body {
              childMarkdownRemark {
                html
              }
            }
            heroImage {
                gatsbyImageData (
                    layout: CONSTRAINED
                    width: 960
                )
            }
        }
    } 
`