const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === 'Mdx') {
        const fileNode = getNode(node.parent)

        if (!node.frontmatter.title) {
            node.frontmatter.title = fileNode.internal.content.split('\n')[0].replace('#', '')
        }

        if (!node.frontmatter.date) {
            node.frontmatter.date = fileNode.birthTime
        }

        const slug = createFilePath({ node, getNode })
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}

exports.createPages = async({ graphql, actions }) => {
    const result = await graphql(`
    query {
        allMdx(sort: { order: DESC, fields: [frontmatter___date]}) {
            nodes {
                fields {
                    slug
                }
            }
        }
    }`)

    const { createPage } = actions
    result.data.allMdx.nodes.forEach((node) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/post.jsx`),
            context: {
                slug: node.fields.slug
            }
        })
    })
}