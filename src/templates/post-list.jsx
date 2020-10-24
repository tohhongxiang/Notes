import React from "react"
import Layout from '../components/NotesLayout'
import { graphql, Link } from 'gatsby'
import NotePreview from '../components/NotePreview'
import NextPage from '../../static/icons/next_page.svg'
import PrevPage from '../../static/icons/prev_page.svg'

export default function PostList({ data, pageContext }) {
    const posts = data.allMdx.edges
    const { numberOfPages, currentPage } = pageContext
    const isFirstPage = currentPage === 1
    const isLastPage = currentPage === numberOfPages

    const previousPageLink = '../' + (currentPage - 1 === 1 ? '/' : (currentPage - 1).toString())
    const nextPageLink = currentPage === 1 ? (currentPage + 1).toString() : '../' + (currentPage + 1).toString()

    return (
        <Layout title="Posts">
            <div className="p-8 overflow-y-auto mx-auto max-w-3xl">
                <header className="mb-4">
                    <h1 className="text-4xl">THX's university notes</h1>
                    <p>Select a note to view</p>
                </header>
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