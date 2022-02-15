import React from 'react'
import { Grid } from '@material-ui/core'
import "./card-components/card.css"
import WhyDev from './card-components/WhyDev'
import FourPoints from './card-components/FourPoints'
import WhatJob from './card-components/WhatJob'
import WhereFrom from './card-components/WhereFrom'

export default function Content() {
  return (
    <Grid container spacing={5}>
      <Grid item xs={5}>
        <FourPoints />
      </Grid>        
      <Grid item xs={5}>
        <WhyDev />      
      </Grid>
      <Grid item xs={5}>
       <WhatJob />
      </Grid>
      <Grid item xs={5}>
        <WhereFrom />
      </Grid>
    </Grid>
  )
}
