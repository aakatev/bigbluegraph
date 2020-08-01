import React from 'react'

import NavigationAppBar from './appbar'
import NavigationDrawer from './drawer'

const Navigation = () => {
  const [open, setOpen] = React.useState(true)

  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <span>
      <NavigationAppBar handleDrawerOpen={handleDrawerOpen} open={open} />
      <NavigationDrawer handleDrawerClose={handleDrawerClose} open={open} />
    </span>
  )
}

export default Navigation
