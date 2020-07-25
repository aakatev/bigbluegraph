const { gql } = require('apollo-server')

const typeDefs = gql`
  type Query {
    meetings: [Meeting]!
    meeting(id: ID!): Meeting
  }

  type Meeting {
    id: ID!
    name: String!
    created: String!
    running: Boolean!
  }
`

module.exports = typeDefs
