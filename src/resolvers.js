module.exports = {
  Query: {
    meetings: (_, __, { dataSources }) =>
      dataSources.meetingAPI.getAllMeetings(),
    meeting: (_, { id }, { dataSources }) =>
      dataSources.meetingAPI.getMeetingById({ id }),
    recording: (_, __, { dataSources }) =>
      dataSources.recordingAPI.getAllRecordings(),
    recordings: (_, { meetingId }, { dataSources }) =>
      dataSources.recordingAPI.getRecordingByMeetingId({ meetingId }),
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
