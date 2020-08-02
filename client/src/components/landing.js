import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
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
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}))

const LandingContainer = () => {
  const classes = useStyles()
  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Welcome
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          BigBlueGraph is a GraphQL wrapper for your BigBlueButton API server
          (or Scalelite loadbalancer). It's build with bigbluebutton-js, and
          designed to run on the same or separate node as the API server.
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button
                component={Link}
                href="https://github.com/aakatev/bigbluegraph"
                variant="contained"
                color="primary"
              >
                View on GitHub
              </Button>
            </Grid>
            <Grid item>
              <Button
                component={Link}
                href="https://github.com/aakatev/bigbluebutton-infra"
                variant="outlined"
                color="primary"
              >
                More Projects
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  )
}

export default LandingContainer
