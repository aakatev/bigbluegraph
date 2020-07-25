# bigbluebutton-graph

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
    attendeePassword: "lol" 
    moderatorPassword: "lol"){
    success
  }
}

mutation CreateMeeting {
  endMeeting(
    id: "random-6811322"
    moderatorPassword: "lol"){
    success
  }
}
```