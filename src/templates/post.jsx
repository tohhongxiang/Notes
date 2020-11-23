import React from "react"
import Layout from "../components/NotesLayout"
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import 'github-markdown-css/github-markdown.css'
import "prismjs/themes/prism-okaidia.css"
import 'katex/dist/katex.min.css'
import Scrollspy from 'react-scrollspy'

export default function BlogPost({ data }) {
	const post = data.mdx

	return (
		<Layout title={post.frontmatter.title}>
			<div className="mx-auto flex relative">
				<div className="max-w-3xl markdown-body mx-auto p-2 w-full">
					<MDXRenderer>{post.body}</MDXRenderer>
				</div>
				{post.tableOfContents.items && <div className="relative w-1/5">
					<div className="sticky top-0 p-4 border-l border-gray-300 border-solid hidden xl:block">
						<Scrollspy items={post.tableOfContents.items.map(item => item.url.replace('#', ''))} currentClassName="font-bold text-gray-900" rootEl="#main-page-content">
							{post.tableOfContents.items.map(item => (
								<li key={item.url} className="mb-4 font-medium text-gray-600"><a href={item.url}>{item.title}</a></li>
							))}
						</Scrollspy>
					</div>
				</div>}
			</div>
		</Layout>
	)
}

export const query = graphql`
query($slug: String!) {
  mdx(fields: { slug: { eq: $slug } }) {
    body
    frontmatter {
      title
      date(formatString: "YYYY MMMM Do")
    }
    tableOfContents
    timeToRead
  }
}
`
