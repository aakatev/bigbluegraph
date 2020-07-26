const { PubSub } = require('apollo-server')
const { MEETING_CREATED, MEETING_ENDED } = require('./events')

const pubsub = new PubSub()

module.exports = {
  Query: {
    meetings: (_, __, { dataSources }) =>
      dataSources.meetingAPI.getAllMeetings(),
    meeting: (_, { id }, { dataSources }) =>
      dataSources.meetingAPI.getMeetingById({ id }),
    recording: (_, { id }, { dataSources }) =>
      dataSources.recordingAPI.getRecordingById({ id }),
    recordings: (_, { meetingId }, { dataSources }) =>
      dataSources.recordingAPI.getRecordingsByMeetingId({ meetingId }),
  },
  Mutation: {
    createMeeting: async (
      _,
      { name, id, duration, moderatorPassword, attendeePassword },
      { dataSources }
    ) => {
      const result = await dataSources.meetingAPI.createMeeting({
        name,
        id,
        duration,
        moderatorPassword,
        attendeePassword,
      })

      if (result.messageKey === 'duplicateWarning') {
        return {
          success: false,
          message: 'meeting has already exist',
        }
      }

      if (result.returncode === 'SUCCESS') {
        pubsub.publish(MEETING_CREATED, { meetingCreated: result.meetingID })
        return {
          success: true,
        }
      }

      return {
        success: false,
      }
    },
    joinMeeting: async (_, { id, username, password }, { dataSources }) => {
      const result = await dataSources.meetingAPI.joinMeeting({
        id,
        username,
        password,
      })
      if (!result) {
        return {
          success: false,
          message: 'meeting was not found',
        }
      }
      return {
        url: result,
        success: true,
      }
    },
    endMeeting: async (_, { id, moderatorPassword }, { dataSources }) => {
      const result = await dataSources.meetingAPI.endMeeting({
        id,
        moderatorPassword,
      })

      if (result.returncode === 'SUCCESS') {
        pubsub.publish(MEETING_ENDED, { meetingEnded: id })
        return {
          success: true,
        }
      }

      if (result.messageKey === 'notFound') {
        return {
          success: false,
          message: 'meeting was not found',
        }
      }

      return {
        success: false,
      }
    },
    deleteRecording: async (_, { id }, { dataSources }) => {
      const result = await dataSources.recordingAPI.deleteRecording({
        id,
      })

      if (result.returncode === 'SUCCESS') {
        return {
          success: true,
        }
      }

      if (result.messageKey === 'notFound') {
        return {
          success: false,
          message: 'recording was not found',
        }
      }

      return {
        success: false,
      }
    },
  },
  Subscription: {
    meetingCreated: {
      subscribe: () => pubsub.asyncIterator([MEETING_CREATED]),
    },
    meetingEnded: {
      subscribe: () => pubsub.asyncIterator([MEETING_ENDED]),
    },
  },
}
