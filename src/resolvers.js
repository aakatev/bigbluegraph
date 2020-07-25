module.exports = {
  Query: {
    meetings: (_, __, { dataSources }) =>
      dataSources.meetingApi.getAllMeetings(),
    meeting: (_, { id }, { dataSources }) =>
      dataSources.meetingApi.getMeetingById({ id: id }),
  },
}
