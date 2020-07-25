<img src="./assets/logo.png" width="300" height="300">

GraphQL wrapper for your BigBlueButton server. Build with [bigbluebutton-js](https://aakatev.github.io/bigbluebutton-js-docs/). 

**This repository is in active development!**

## Installation

Clone repo, and create `.env` file (or export as environmental variables) with the following values:

```env
BBB_URL=https://example.com/bigbluebutton/
BBB_SECRET=bbb-secret-token
```

Now, launch GraphQL server with `npm run start`, and open your browser on [`localhost:4000`](http://localhost:4000).

## Example of Meeting API Usage

```graphql
query GetMeetingsById {
  meeting(id: "random-6811322") {
    id
    name
    running
  }
}

mutation CreateMeeting {
  createMeeting(
    id: "random-6811322"
    name: "Test"
    duration: 5 
    attendeePassword: "lol" 
    moderatorPassword: "lol"){
    success
  }
}


mutation EndMeeting {
  endMeeting(
    id: "random-6811322"
    moderatorPassword: "lol"){
    success
  }
}

```

## Example of Recording API Usage

```graphql
mutation DeleteRecording {
  deleteRecording(id: "41d1a1ff6f3219d667000ce58501f26ea703bc1e-1595623200678") {
    success
  }
}

query GetRecording {
  recording(id: "41d1a1ff6f3219d667000ce58501f26ea703bc1e-1595623200678") {
    id
    meetingId
    published
  }
}

query GetRecordingByMeetingId1 {
  recordings(meetingId: "random-6811322") {
    id
    meetingId
    published
  }
}

query GetRecordingByMeetingId2 {
  recordings(meetingId: "random-6242490") {
    id
    meetingId
    published
  }
}
```