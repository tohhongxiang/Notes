import React from "react"
import { Link } from 'gatsby'
import "./index.css"
import { Helmet } from "react-helmet"
import { graphql } from 'gatsby'


export default function Home({ data }) {
    const links = data.site.siteMetadata.contacts
    return (
        <div className="flex flex-col justify-center p-4 text-center">
            <Helmet title="Home" />
            <div className="pt-24 pb-12">
                <h1 className="font-extrabold text-6xl">Toh Hong Xiang</h1>
                <p className="font-medium tracking-wide text-gray-700">React/Python developer, currently studying in NTU</p>
            </div>
            <ul className="flex justify-center flex-wrap">
                {links.map(link => (
                    <li className="m-4 opacity-75 hover:opacity-100" key={link.link}>
                        <a target="_blank" rel="noreferrer noopener" href={link.link}>
                            <img width={64} height={64} src={link.icon} alt={link.title} />
                            <p className="text-gray-700 font-medium mt-2">{link.title}</p>
                        </a>
                    </li>
                ))}
            </ul>
            <ul className="p-8 mt-8 sticky flex justify-around">
                <li><Link to="/about" activeClassName="font-bold">About</Link></li>
                <li><Link to="/projects" activeClassName="font-bold">Projects</Link></li>
                <li><Link to="/notes" activeClassName="font-bold">Notes</Link></li>
            </ul>
        </div>
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