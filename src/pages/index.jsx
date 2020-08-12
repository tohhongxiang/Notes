import React from "react"
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import NotePreview from '../components/NotePreview'
import "./index.css"

export default function Home({ data }) {
	const posts = data.allMdx.edges
	return (
		<Layout title="Home">
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
			</div>
		</Layout>
	)
}

export const query = graphql`
  query {
    allMdx(sort: { order: DESC, fields: [frontmatter___date]}) {
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