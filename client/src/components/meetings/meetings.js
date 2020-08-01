import React from 'react'
import { useQuery, gql } from '@apollo/client'

import { makeStyles } from '@material-ui/core/styles'

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
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}))

function Meetings() {
  const classes = useStyles()
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

export default Meetings
