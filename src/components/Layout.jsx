import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import TopNavigation from './TopNavigation'
import { Helmet } from 'react-helmet'

export default function Layout({ children, title }) {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    return (
        <div className="h-screen flex flex-col overflow-hidden">
            <Helmet title={title} />
            <TopNavigation>
                <Link to="/">
                    <h3 className="font-bold text-xl">{data.site.siteMetadata.title}</h3>
                </Link>
                <ul className="flex">
                    <li><Link to="/" className="mr-4" activeClassName="font-bold">Home</Link></li>
                    <li><Link to="/projects" className="mr-4" activeClassName="font-bold">Projects</Link></li>
                    <li><Link to="/edit" className="mr-4" activeClassName="font-bold">Editor</Link></li>
                    <li><Link to="/notes" activeClassName="font-bold">Notes</Link></li>
                </ul>
            </TopNavigation>
            {children}
        </div>
    )
}