import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React from 'react'

export default function Header() {
  return (
      <AppBar position='static' >
          <Toolbar>
              <Typography>
                  <strong>Tye Robertson, Personal App Project</strong>
              </Typography>
          </Toolbar>
      </AppBar>
  )
}


