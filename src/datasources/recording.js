const { RESTDataSource } = require('apollo-datasource-rest')
const bbb = require('bigbluebutton-js')

const api = bbb.api('', process.env.BBB_SECRET)
const { parseXml } = bbb.util

class RecordingAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = process.env.BBB_URL
  }

  willSendRequest(request) {
    request.headers.set('Accept', 'text/xml, application/json, text/plain, */*')
  }

  async getRecordingsByMeetingId({ meetingId }) {
    const pathname = api.recording.getRecordings({ meetingID: meetingId })
    const xml = await this.get(pathname)
    const json = parseXml(xml).response

    let recordings = json.recordings ? json.recordings.recording : []
    recordings = Array.isArray(recordings) ? recordings : [recordings]

    return recordings.map((recording) => this.recordingReducer(recording))
  }

  getRecordingsByMeetingIds({ meetingIds }) {
    return Promise.all(
      meetingIds.map((id) => this.getRecordingByMeetingId({ id }))
    )
  }

  async getRecordingById({ id }) {
    const pathname = api.recording.getRecordings({ recordID: id })
    const xml = await this.get(pathname)
    const json = parseXml(xml).response

    return json.recordings
      ? this.recordingReducer(json.recordings.recording)
      : null
  }

  getRecordingByIds({ ids }) {
    return Promise.all(ids.map((id) => this.getRecordingId({ id })))
  }

  async deleteRecording({ id }) {
    const pathname = api.recording.deleteRecordings(id)
    const xml = await this.get(pathname)
    const json = parseXml(xml).response

    return json
  }

  recordingReducer(recording) {
    return {
      id: recording.recordID,
      meetingId: recording.meetingID,
      url: recording.playback.format.url,
      published: recording.published,
      thumbnails: recording.playback.format.preview.images.image,
    }
  }
}

module.exports = RecordingAPI
