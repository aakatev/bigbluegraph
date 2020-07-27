import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { Button, Icon, Item } from 'semantic-ui-react'

const GET_MEETINGS = gql`
  query GetMeetings {
    meetings {
      id
      name
      running
    }
  }
`

const MeetingsContainer = () => (
  <Item.Group divided>
    <Meetings />
  </Item.Group>
)

function Meetings() {
  const { loading, error, data } = useQuery(GET_MEETINGS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  if (data.meetings.length === 0) return <p>No meetings were found</p>

  return data.meetings.map(({ id, name, running }) => (
    <Item key={id}>
      <Item.Content>
        <Item.Header as="a">{id}</Item.Header>
        <Item.Meta>{name} </Item.Meta>
        <Item.Description>{running ? 'running' : 'no users'}</Item.Description>
        <Item.Extra>
          <Button primary floated="right">
            Join
            <Icon name="right chevron" />
          </Button>
        </Item.Extra>
      </Item.Content>
    </Item>
  ))
}

export default MeetingsContainer
