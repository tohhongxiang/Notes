import React from "react"
// import Layout from '../components/Layout'
import { graphql, useStaticQuery } from 'gatsby'
// import NotePreview from '../components/NotePreview'
import "./index.css"
import { Redirect } from '@reach/router'

export default function Home() {
	console.log(process.env.NODE_ENV)
	const data = useStaticQuery(graphql`
        query Redirect {
            site {
                pathPrefix
            }
        }
	`)
	
	if (process.env.NODE_ENV === 'development') return <Redirect to={`/posts`} noThrow />
	return <Redirect to={`${data.site.pathPrefix}/posts`} noThrow />
}

// export default function Home({ data }) {
// 	// const posts = data.allMdx.edges
// 	return (
// 		<Layout title="Home">
// 			<p>Hi</p>
// 			<div className="p-8 overflow-y-auto mx-auto max-w-3xl">
// 				<header className="mb-4">
// 					<h1 className="text-4xl">THX's university notes</h1>
// 					<p>Select a note to view</p>
// 				</header>
// 				<ul className="mx-auto">
// 					{posts.map(({ node }) => (
// 						<NotePreview key={node.id} {...{ title: node.frontmatter.title, date: node.frontmatter.date, slug: node.fields.slug, excerpt: node.excerpt }} />
// 					))}
// 				</ul>
// 			</div>
// 		</Layout>
// 	)
// }

// export const query = graphql`
//   query GetAllMarkdown($skip: Int!, $limit: Int!) {
//     allMdx(
// 		sort: { 
// 			order: DESC, 
// 			fields: [frontmatter___date],
// 		},
// 		skip: $skip
// 		limit: $limit
// 	) {
// 		totalCount
// 		edges {
// 			node {
// 				id
// 				timeToRead
// 				frontmatter {
// 					title
// 					date(formatString: "DD MMMM, YYYY")
// 			}
// 			fields {
// 				slug
// 			}
// 			excerpt
// 			}
// 		}
//     }
//   }
// `