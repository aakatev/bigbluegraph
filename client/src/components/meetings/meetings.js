import React from 'react'
import { useQuery, gql } from '@apollo/client'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

const GET_MEETINGS = gql`
  query GetMeetings {
    meetings {
      id
      name
      running
    }
  }
`
function Meetings() {
  const { loading, error, data } = useQuery(GET_MEETINGS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  if (data.meetings.length === 0) return <p>No meetings were found</p>

  return (
    <React.Fragment>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.meetings.map(({ id, name, running }) => (
            <TableRow hover key={id}>
              <TableCell>{id}</TableCell>
              <TableCell>{name}</TableCell>
              <TableCell align="right">
                {running ? 'running' : 'no users'}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  )
}

export default Meetings
