import React from "react"
import { Link } from 'gatsby'
import "./index.css"
import { Helmet } from "react-helmet"
import { graphql } from 'gatsby'


export default function Home({ data }) {
    const contactLinks = data.site.siteMetadata.contacts
    const pageLinks = ["projects", "notes"].map(name => ({ link: `/${name}`, title: capitalizeFirstLetter(name)}))
    return (
        <div className="flex flex-col justify-center p-4 text-center">
            <Helmet title="Home" />
            <div className="pt-24 pb-12">
                <h1 className="font-extrabold text-6xl">Toh Hong Xiang</h1>
                <p className="font-medium tracking-wide text-gray-700">React/Python developer, currently studying in NTU</p>
            </div>
            <ul className="flex justify-center flex-wrap">
                {contactLinks.map(link => (
                    <li className="m-4 opacity-75 hover:opacity-100" key={link.link}>
                        <a target="_blank" rel="noreferrer noopener" href={link.link}>
                            <img width={64} height={64} src={require(`../../static/icons/${link.icon}`)} alt={link.title} />
                            <p className="text-gray-700 font-medium mt-2">{link.title}</p>
                        </a>
                    </li>
                ))}
            </ul>
            <ul className="py-4 mt-8 mx-auto inline-flex flex-wrap justify-center border-t-2 border-gray-300">
                {pageLinks.map(link => (
                    <li key={link.title} className="py-2 mx-8 font-medium text-xl">
                        <Link to={link.link} activeClassName="font-bold">{link.title}</Link>
                    </li>
                ))}
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

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }