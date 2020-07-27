import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { Container, Menu } from 'semantic-ui-react'

const Navigation = () => (
  <Menu fixed="top" style={{ height: '60px' }} inverted>
    <Container>
      <Menu.Item as={Link} to="/" header>
        bigbluegraph
      </Menu.Item>
      <Menu.Item as={Link} to="/meetings">
        Meetings
      </Menu.Item>
      <Menu.Item as={Link} to="/recordings">
        Recordings
      </Menu.Item>
    </Container>
  </Menu>
)

export default withRouter(Navigation)
