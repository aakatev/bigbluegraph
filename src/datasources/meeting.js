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
