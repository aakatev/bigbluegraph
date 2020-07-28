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

  type Subscription {
    meetingCreated: ID!
    meetingEnded: ID!
  }

  type CreateMeetingResponse {
    success: Boolean!
    message: String
  }

  type JoinMeetingResponse {
    success: Boolean!
    message: String
    url: String
  }

  type EndMeetingResponse {
    success: Boolean!
    message: String
  }

  type DeleteRecordingResponse {
    success: Boolean!
    message: String
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
    thumbnails: [String]!
  }
`

module.exports = typeDefs
