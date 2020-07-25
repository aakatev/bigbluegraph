const { RESTDataSource } = require('apollo-datasource-rest')
const bbb = require('../../../bigbluebutton-js/src')

const api = bbb.api('', process.env.BBB_SECRET)
const { parseXml } = bbb.util

class RecordingAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = process.env.BBB_URL
  }

  async getAllRecordings() {
    const pathname = api.recording.getRecordings()
    const xml = await this.get(pathname)
    const json = parseXml(xml).response

    let meetings = json.meetings ? json.meetings.meeting : []
    meetings = Array.isArray(meetings) ? meetings : [meetings]

    return meetings.map((meeting) => this.meetingReducer(meeting))
  }

  async getRecordingByMeetingId({ meetingId }) {
    const pathname = api.recording.getRecordings({ meetingID: meetingId })
    const xml = await this.get(pathname)
    const json = parseXml(xml).response

    let recordings = json.recordings ? json.recordings.recording : []
    recordings = Array.isArray(recordings) ? recordings : [recordings]

    return recordings.map((recording) => this.recordingReducer(recording))
  }

  getRecordingByMeetingIds({ meetingIds }) {
    return Promise.all(
      meetingIds.map((id) => this.getRecordingByMeetingId({ id }))
    )
  }

  async deleteRecording({ id, moderatorPassword }) {
    const pathname = api.administration.end(id, moderatorPassword)
    const xml = await this.get(pathname)
    const json = parseXml(xml).response

    return json.returncode === 'SUCCESS' ? json : null
  }

  recordingReducer(recording) {
    return {
      id: recording.recordID,
      meetingId: recording.meetingID,
      url: recording.playback.format.url,
      published: recording.published,
    }
  }
}

module.exports = RecordingAPI
