import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'

// import { useQuery, gql } from '@apollo/client'

// const GET_MEETINGS = gql`
//   query GetMeetings {
//     meetings {
//       id
//       name
//       running
//     }
//   }
// `

function Recordings() {
  return (
    <Grid container columns={3} stackable>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
    </Grid>
  )
  // const { loading, error, data } = useQuery(GET_MEETINGS)

  // if (loading) return <p>Loading...</p>
  // if (error) return <p>Error</p>

  // return data.meetings.map(({ id, name, running }) => (
  //   <div key={id}>
  //     <h3>Meeting {id}</h3>
  //     <p>Name: {name}</p>
  //     <p>Running: {JSON.stringify(running)}</p>
  //   </div>
  // ))
}

export default Recordings
