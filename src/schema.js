const { gql } = require('apollo-server')

const typeDefs = gql`
  type Query {
    meetings: [Meeting]!
    meeting(id: ID!): Meeting
    recordings(meetingId: String): [Recording]!
    recording: [Recording]!
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
    deleteRecording(id: String!): DeleteRecordingResponse
  }

  type CreateMeetingResponse {
    success: Boolean!
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
  }

  type Recording {
    id: ID!
    meetingId: String!
    url: String!
    published: Boolean!
  }
`

module.exports = typeDefs
