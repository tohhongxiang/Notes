/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    pathPrefix: "Notes",
    siteMetadata: {
        title: "THX",
        contacts: [{
            title: "Github",
            link: "https://github.com/tohhongxiang123",
            icon: "/icons/github.svg"
        }, {
            title: "LinkedIn",
            link: "https://www.linkedin.com/in/toh-hong-xiang-31551118b/",
            icon: "/icons/linkedin.svg"
        }]
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-plugin-postcss'
        }, {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/content`
            }
        }, {
            resolve: 'gatsby-plugin-mdx',
            options: {
                extensions: [`.mdx`, `.md`],
                gatsbyRemarkPlugins: [
                    `gatsby-remark-autolink-headers`,
                    `gatsby-remark-copy-linked-files`,
                    `gatsby-remark-mermaid`,
                    `gatsby-remark-prismjs`,
                    `gatsby-remark-katex`,
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590,
                        },
                    },
                ]
            }
        }
    ],
}