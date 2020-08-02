import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'

import Container from '@material-ui/core/Container'
import Title from './title'

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
      <Title>Settings</Title>
      <Settings />
    </Container>
  )
}

const Settings = () => {
  return (
    <form noValidate>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        type="text"
        id="backendUrl"
        label="Backend URL"
        name="backendUrl"
        autoComplete="text"
        autoFocus
        disabled
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="backendSecret"
        label="Backend Secret"
        type="text"
        id="backendSecret"
        autoComplete="text"
        disabled
      />
      <Button disabled type="submit" variant="contained" color="primary">
        Disabled in Current Version
      </Button>
    </form>
  )
}

export default SettingsContainer
