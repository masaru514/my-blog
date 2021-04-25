import { paginate } from 'gatsby-awesome-pagination'
import path from 'path'

exports.createPages = ({ actions, graphql }) => {
  console.log('test', graphql)
  const { createPage } = actions
  const blogPosts = doSomeMagic()
  paginate({
    createPage,
    items: blogPosts,
    itemsPerPage: 10,
    pathPrefix: '/blog',
    component: path.resolvec('/'),
  })
}
