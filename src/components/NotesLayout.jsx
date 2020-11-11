import React from 'react'
import Layout from './Layout'
import { useStaticQuery, graphql } from "gatsby"
import Sidebar from './Sidebar'

export default function NotesLayout({ title, children }) {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
            allMdx {
                totalCount
                edges {
                  node {
                    id
                    frontmatter {
                      title
                      date(formatString: "DD MMMM, YYYY")
                    }
                    fields {
                        slug
                    }
                    excerpt
                  }
                }
              }
        }
    `)

    const directories = generateDirectoryStructure(data.allMdx.edges)
    return (
        <Layout title={title}>
            <div className="flex flex-1 overflow-hidden">
                <Sidebar directories={directories} />
                <main className="flex-1 overflow-y-auto p-4 md:p-12" id="main-page-content">
                    {children}
                </main>
            </div>
        </Layout>
    )
}

function generateDirectoryStructure(edges) {
    const allDirectories = {}
    edges.forEach(({ node }) => {
        const link = node.fields.slug
        const paths = node.fields.slug.split('/').filter(Boolean)
        const title = node.frontmatter.title

        if (paths.length === 1) {
            const directory = { link, title, children: {} }
            allDirectories[link] = directory
        } else {
            let currentDirectory = allDirectories
            while (paths.length > 1) {
                if (!currentDirectory.hasOwnProperty(paths[0])) {
                    currentDirectory[paths[0]] = { link: paths[0], title: paths[0], children: {} }
                }
                currentDirectory = currentDirectory[paths.shift()].children
            }
            currentDirectory[paths[0]] = { link, title, children: {} }
        }
    })

    return allDirectories
}
