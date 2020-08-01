import React from 'react'
import { useQuery, gql } from '@apollo/client'

import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

const GET_MEETINGS = gql`
  query GetMeetings {
    meetings {
      id
      name
      running
    }
  }
`

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}))

const MeetingsContainer = () => {
  const classes = useStyles()
  return (
    <Container maxWidth="lg" className={classes.container}>
      <Meetings />
    </Container>
  )
}

function Meetings() {
  const { loading, error, data } = useQuery(GET_MEETINGS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  if (data.meetings.length === 0) return <p>No meetings were found</p>

  return data.meetings.map(({ id, name, running }) => (
    <div key={id}>
      <div>
        <h3>{id}</h3>
        <p>{name} </p>
        <p>{running ? 'running' : 'no users'}</p>
      </div>
    </div>
  ))
}

export default MeetingsContainer
