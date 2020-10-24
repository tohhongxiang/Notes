import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export default function Projects({ data }) {
    return (
        <Layout title="Projects">
            <h1>Projects</h1>
        </Layout>
    )
}

export const query = graphql`
query {
    site {
        siteMetadata {
            contacts {
                icon
                link
                title
            }
            title
        }
    }
}
`

