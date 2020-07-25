<img src="./assets/logo.png" width="300" height="300">

GraphQL API for your bigbluebutton server. Build with [bigbluebutton-js](https://aakatev.github.io/bigbluebutton-js-docs/). 

**This repository is in active development!**

## Example of Usage

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
    attendeePassword: "secret" 
    moderatorPassword: "supersecret"){
    success
  }
}

mutation EndMeeting {
  endMeeting(
    id: "random-6811322"
    moderatorPassword: "supersecret"){
    success
  }
}
```