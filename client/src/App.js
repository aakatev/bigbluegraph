import React from 'react'
import { Switch, Route } from 'react-router'

import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import Navigation from './components/navigation/navigation'

import Landing from './components/landing'
// import Meetings from './components/meetings'
// import Recordings from './components/recordings'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  appBarSpacer: theme.mixins.toolbar,
}))

function App() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navigation />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Switch>
          <Route exact path="/" component={Landing} />
          {/* <Route exact path="/meetings" component={Meetings} />
          <Route exact path="/recordings" component={Recordings} /> */}
        </Switch>
      </main>
    </div>
  )
}

export default App
