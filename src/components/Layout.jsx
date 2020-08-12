import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Helmet } from 'react-helmet'
import Sidebar from './Sidebar'

export default function Layout({ children, title }) {
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
        <div className="h-screen flex flex-col overflow-hidden">
            <Helmet title={title} />
            <nav className="mx-auto p-4 flex justify-between w-full flex-0 border-solid border-b border-gray-300">
                <Link to="/">
                    <h3 className="font-bold text-xl">{data.site.siteMetadata.title}</h3>
                </Link>
                <ul className="flex">
                    <li><Link to="/" className="mr-4" activeClassName="font-bold">Home</Link></li>
                    <li><Link to="/about" activeClassName="font-bold">About</Link></li>
                </ul>
            </nav>
            <div className="flex flex-1 overflow-hidden">
                <ul className="overflow-y-auto flex-0 border-solid border-r border-gray-300 w-64">
                    {Object.values(directories).map(directory => (
                        <li key={directory.link}><Sidebar {...directory} /></li>
                    ))}
                </ul>
                <main className="flex-1 overflow-y-auto" id="main-page-content">
                    {children}
                </main>
            </div>
        </div>
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
                if (!allDirectories.hasOwnProperty(paths[0])) {
                    currentDirectory[paths[0]] = { link: paths[0], title: paths[0], children: {} }
                }
                currentDirectory = currentDirectory[paths.shift()].children
            }
            currentDirectory[paths[0]] = { link, title, children: {} }
        }
    })

    return allDirectories
}