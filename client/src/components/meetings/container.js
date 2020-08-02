import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

import Meetings from './meetings'
import Title from '../title'

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
      <Title>Meetings</Title>
      <Meetings />
    </Container>
  )
}

export default MeetingsContainer
