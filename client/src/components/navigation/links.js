import React from 'react'

import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import AssessmentIcon from '@material-ui/icons/Assessment'
import TheatersIcon from '@material-ui/icons/Theaters'
import VideocamIcon from '@material-ui/icons/Videocam'
import SettingsIcon from '@material-ui/icons/Settings'
import { Link } from 'react-router-dom'

export const mainListItems = (
  <div>
    <ListItem button component={Link} to="/">
      <ListItemIcon>
        <AssessmentIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button component={Link} to="/meetings">
      <ListItemIcon>
        <VideocamIcon />
      </ListItemIcon>
      <ListItemText primary="Meetings" />
    </ListItem>
    <ListItem button component={Link} to="/recordings">
      <ListItemIcon>
        <TheatersIcon />
      </ListItemIcon>
      <ListItemText primary="Recordings" />
    </ListItem>
  </div>
)

export const secondaryListItems = (
  <div>
    <ListSubheader inset>More</ListSubheader>
    <ListItem button component={Link} to="/settings">
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItem>
  </div>
)
