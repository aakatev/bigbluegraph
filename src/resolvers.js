module.exports = {
  Query: {
    meetings: (_, __, { dataSources }) =>
      dataSources.meetingApi.getAllMeetings(),
    meeting: (_, { id }, { dataSources }) =>
      dataSources.meetingApi.getMeetingById({ id }),
  },
  Mutation: {
    createMeeting: async (
      _,
      { name, id, duration, moderatorPassword, attendeePassword },
      { dataSources }
    ) => {
      const result = await dataSources.meetingApi.createMeeting({
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
      const result = await dataSources.meetingApi.endMeeting({
        id,
        moderatorPassword,
      })

      return {
        success: true,
      }
    },
  },
}
