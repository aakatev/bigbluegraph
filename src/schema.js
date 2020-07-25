const { gql } = require('apollo-server')

const typeDefs = gql`
  type Query {
    meetings: [Meeting]!
    meeting(id: ID!): Meeting
  }

  type Mutation {
    createMeeting(
      name: String!
      id: String!
      duration: Int!
      moderatorPassword: String!
      attendeePassword: String!
    ): CreateMeetingResponse

    endMeeting(id: String!, moderatorPassword: String!): EndMeetingResponse
  }

  type CreateMeetingResponse {
    success: Boolean!
  }

  type EndMeetingResponse {
    success: Boolean!
  }

  type Meeting {
    id: ID!
    name: String!
    created: String!
    running: Boolean!
  }
`

module.exports = typeDefs
