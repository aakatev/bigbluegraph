import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}))

const SettingsContainer = () => {
  const classes = useStyles()
  return (
    <Container maxWidth="lg" className={classes.container}>
      <Settings />
    </Container>
  )
}

const Settings = () => (
  <div>
    <h3>Settings</h3>
    <p>To be added</p>
  </div>
)

export default SettingsContainer
