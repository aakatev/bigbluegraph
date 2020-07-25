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

      return {
        success: true,
      }
    },
    endMeeting: async (_, { id, moderatorPassword }, { dataSources }) => {
      const result = await dataSources.meetingAPI.endMeeting({
        id,
        moderatorPassword,
      })

      return {
        success: true,
      }
    },
  },
}
