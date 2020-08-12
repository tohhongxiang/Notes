import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

export default function About({ data }) {
    console.log(data)
    const links = data.site.siteMetadata.contacts
    return (
        <Layout title="About">
            <div className="p-8">
                <h1 className="text-2xl">About me</h1>
                <p>Started off as a self-taught web developer, currently studying in NTU Computer Science</p>
                <ul className="flex space-between justify-center">
                    {links.map(link => (
                        <li className="m-2 opacity-75 hover:opacity-100" key={link.link}><a target="_blank" rel="noreferrer noopener" href={link.link}>
                            <img width={64} height={64} src={link.icon} alt={link.title} /></a>
                        </li>
                    ))}
                </ul>
            </div>
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

