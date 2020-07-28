import React from 'react'
import { Grid, Segment, Card, Button, Image } from 'semantic-ui-react'

import { useQuery, gql } from '@apollo/client'

const GET_RECORDINDS = gql`
  query GetRecordings {
    recordings {
      id
      meetingId
      url
      thumbnails
      published
    }
  }
`

function RecordingsContainer() {
  return (
    <Grid container columns={3} stackable>
      <Recordings />
    </Grid>
  )
}

function Recordings() {
  const { loading, error, data } = useQuery(GET_RECORDINDS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  return data.recordings.map(
    ({ id, meetingId, url, thumbnails, published }) => (
      <Grid.Column key={id}>
        <Card>
          <Image src={thumbnails[0]} wrapped ui={false} />
          <Card.Content>
            <Card.Header>Recording {id.slice(0, 5)}...</Card.Header>
            <Card.Meta>{published ? 'published' : 'not published'}</Card.Meta>
            <Card.Description>Meeting {meetingId}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                View
              </Button>
              <Button basic color="red">
                Delete
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Grid.Column>
    )
  )
}

export default RecordingsContainer
