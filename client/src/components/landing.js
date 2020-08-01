import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}))

const LandingContainer = () => {
  const classes = useStyles()
  return (
    <Container maxWidth="lg" className={classes.container}>
      <Landing />
    </Container>
  )
}

const Landing = () => (
  <div>
    <h3>Welcome!</h3>
  </div>
)

export default LandingContainer
