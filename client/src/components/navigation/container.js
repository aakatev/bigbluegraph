import React from 'react'

import NavigationAppBar from './appbar'
import NavigationDrawer from './drawer'

const NavigationContainer = () => {
  const [open, setOpen] = React.useState(true)

  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <>
      <NavigationAppBar handleDrawerOpen={handleDrawerOpen} open={open} />
      <NavigationDrawer handleDrawerClose={handleDrawerClose} open={open} />
    </>
  )
}

export default NavigationContainer
