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
      const meeting = await dataSources.meetingApi.createMeeting({
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
  },
}
