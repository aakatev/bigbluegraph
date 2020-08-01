import React from 'react'
import { useQuery, gql } from '@apollo/client'

import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

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

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}))

const RecordingsContainer = () => {
  const classes = useStyles()
  return (
    <Container maxWidth="lg" className={classes.container}>
      <Recordings />
    </Container>
  )
}

function Recordings() {
  const { loading, error, data } = useQuery(GET_RECORDINDS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  return data.recordings.map(
    ({ id, meetingId, url, thumbnails, published }) => (
      <div key={id}>
        <img src={thumbnails[0]} />
        <div>
          <p>Recording {id.slice(0, 5)}...</p>
          <p>{published ? 'published' : 'not published'}</p>
          <p>Meeting {meetingId}</p>
        </div>
      </div>
    )
  )
}

export default RecordingsContainer
