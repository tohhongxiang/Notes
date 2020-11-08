import React from "react"
import Layout from '../components/NotesLayout'
import { graphql, Link } from 'gatsby'
import NotePreview from '../components/NotePreview'
import NextPage from '../../static/icons/next_page.svg'
import PrevPage from '../../static/icons/prev_page.svg'

export default function PostList({ data, pageContext }) {
    const contactLinks = data.site.siteMetadata.contacts

    const posts = data.allMdx.edges
    const { numberOfPages, currentPage } = pageContext
    const isFirstPage = currentPage === 1
    const isLastPage = currentPage === numberOfPages

    const previousPageLink = '../' + (currentPage - 1 === 1 ? '/' : (currentPage - 1).toString())
    const nextPageLink = currentPage === 1 ? (currentPage + 1).toString() : '../' + (currentPage + 1).toString()

    return (
        <Layout title="Posts">
            <div className="p-8 pt-0 overflow-y-auto mx-auto max-w-3xl">
                <div className="px-12 text-center">
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
                <ul className="mx-auto">
                    {posts.map(({ node }) => (
                        <NotePreview key={node.id} {...{ title: node.frontmatter.title, date: node.frontmatter.date, slug: node.fields.slug, excerpt: node.excerpt }} />
                    ))}
                </ul>
                <div className="p-4 flex justify-end items-center">
                    {!isFirstPage && <Link to={previousPageLink} rel="prev" className="font-bold text-gray-700 hover:text-gray-900 inline-flex justify-around py-2 px-4">
                        <img src={PrevPage} alt="Previous Page" width={18} />
                        <span className="pl-2">Previous Page</span>
                    </Link>}
                    <p className="px-4 text-lg font-medium">{currentPage}/{numberOfPages}</p>
                    {!isLastPage && <Link to={nextPageLink} rel="next" className="font-bold text-gray-700 hover:text-gray-900 inline-flex justify-around py-2 px-4">
                        <span className="pr-2">Next Page</span>
                        <img src={NextPage} alt="Next Page" width={18} />
                    </Link>}
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
query GetAllMarkdown($limit: Int!, $skip: Int!) {
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
    allMdx(
        sort: { 
            order: DESC, 
            fields: [frontmatter___date]
        }
        skip: $skip,
        limit: $limit
    ) {
        totalCount
        edges {
            node {
                id
                timeToRead
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
`