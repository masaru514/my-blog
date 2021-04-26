const { paginate } = require('gatsby-awesome-pagination') // eslint-disable-line @typescript-eslint/no-var-requires
const path = require('path') // eslint-disable-line @typescript-eslint/no-var-requires

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        {
          allContentfulMasaru514Blog {
            nodes {
              id
              tags
              title
              updatedAt
              createdAt
              slug
              body {
                id
                childMarkdownRemark {
                  html
                }
              }
            }
          }
        }
      `).then((result) => {
        if (result.errors) {
          console.error(result.errors)
          reject(result.errors)
        }
        const blog = path.resolve('./src/templates/index.tsx')
        const { data } = result
        const array = data.allContentfulMasaru514Blog
        const pathPrefix = ({ pageNumber }) => (pageNumber === 0 ? '/blog' : '/blog/page')
        paginate({
          createPage,
          items: array.nodes,
          component: blog,
          itemsPerPage: 4,
          itemsPerFirstPage: 5,
          pathPrefix,
        })
      }),
    )
  })
}
