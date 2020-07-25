const { RESTDataSource } = require('apollo-datasource-rest')
const bbb = require('../../../bigbluebutton-js/src')

// TODO make baseUrl optional for the library
const api = bbb.api('', process.env.BBB_SECRET)
const { parseXml } = bbb.util

class MeetingAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = process.env.BBB_URL
  }

  async getAllMeetings() {
    const pathname = api.monitoring.getMeetings()
    const xml = await this.get(pathname)
    const json = parseXml(xml).response

    let meetings = json.meetings ? json.meetings.meeting : []
    meetings = Array.isArray(meetings) ? meetings : [meetings]

    return meetings.map((meeting) => this.meetingReducer(meeting))
  }

  async getMeetingById({ id }) {
    const pathname = api.monitoring.getMeetingInfo(id)
    const xml = await this.get(pathname)
    const json = parseXml(xml).response

    return json.returncode === 'SUCCESS' ? this.meetingReducer(json) : null
  }

  getMeetingByIds({ ids }) {
    return Promise.all(ids.map((id) => this.getMeetingById({ id })))
  }

  async createMeeting({
    name,
    id,
    duration,
    moderatorPassword,
    attendeePassword,
  }) {
    const pathname = api.administration.create(name, id, {
      moderatorPW: moderatorPassword,
      attendeePW: attendeePassword,
      duration,
    })
    const xml = await this.get(pathname)
    const json = parseXml(xml).response

    return json.returncode === 'SUCCESS' ? json : null
  }

  async endMeeting({ id, moderatorPassword }) {
    const pathname = api.administration.end(id, moderatorPassword)
    const xml = await this.get(pathname)
    const json = parseXml(xml).response

    return json.returncode === 'SUCCESS' ? json : null
  }

  meetingReducer(meeting) {
    return {
      id: meeting.meetingID,
      cursor: meeting.createTime,
      name: meeting.meetingName,
      created: meeting.createTime,
      running: meeting.running,
    }
  }
}

module.exports = MeetingAPI
