const { gql } = require('apollo-server')

const typeDefs = gql`
  type Query {
    meetings: [Meeting]!
    meeting(id: ID!): Meeting
    recordings(meetingId: String): [Recording]!
    recording(id: ID!): Recording
  }

  type Mutation {
    createMeeting(
      id: ID!
      name: String!
      duration: Int!
      moderatorPassword: String!
      attendeePassword: String!
    ): CreateMeetingResponse
    joinMeeting(
      id: ID!
      username: String!
      password: String!
    ): JoinMeetingResponse
    endMeeting(id: ID!, moderatorPassword: String!): EndMeetingResponse
    deleteRecording(id: ID!): DeleteRecordingResponse
  }

  type CreateMeetingResponse {
    success: Boolean!
  }

  type JoinMeetingResponse {
    success: Boolean!
    url: String
  }

  type EndMeetingResponse {
    success: Boolean!
  }

  type DeleteRecordingResponse {
    success: Boolean!
  }

  type Meeting {
    id: ID!
    name: String!
    created: String!
    running: Boolean!
    moderatorPassword: String!
    attendeePassword: String!
  }

  type Recording {
    id: ID!
    meetingId: String!
    url: String!
    published: Boolean!
  }
`

module.exports = typeDefs
