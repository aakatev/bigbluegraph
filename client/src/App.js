import React from 'react'
import Meetings from './components/meetings'
import Navigation from './components/navigation'
import Landing from './components/landing'
import { Switch, Route } from 'react-router'
import { Container } from 'semantic-ui-react'
import Recordings from './components/recordings'

function App() {
  return (
    <div>
      <Navigation />
      <Container text style={{ marginTop: '5em' }}>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/meetings" component={Meetings} />
          <Route exact path="/recordings" component={Recordings} />
        </Switch>
      </Container>
    </div>
  )
}

export default App
