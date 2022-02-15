import React from 'react'
import { Grid } from '@material-ui/core'
import AboutMe from './AboutMe'

export default function Content() {
  return (
    <Grid container  spacing={5}>
      <Grid item xs={4}>
        <div></div>
      </Grid>        
      <Grid item xs={4}>
        <AboutMe />      
      </Grid>
      <Grid item xs={4}>
       <div />
      </Grid>
    </Grid>
  )
}