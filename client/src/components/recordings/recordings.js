import React from 'react'
import { useQuery, gql } from '@apollo/client'

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const GET_RECORDINDS = gql`
  query GetRecordings {
    recordings {
      id
      meetingId
      url
      thumbnails
      published
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

function Recordings() {
  const classes = useStyles()
  const { loading, error, data } = useQuery(GET_RECORDINDS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  return (
    <Grid container spacing={4}>
      {data.recordings.map(({ id, meetingId, url, thumbnails, published }) => (
        <Grid item key={id} xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image={thumbnails[0]}
              title="recording-thumbnail"
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                Recording {id.slice(0, 5)}...
              </Typography>
              <Typography>Meeting: {meetingId}</Typography>
              <Typography>
                Status: {published ? 'published' : 'not published'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                View
              </Button>
              <Button size="small" color="secondary">
                Delete
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default Recordings
