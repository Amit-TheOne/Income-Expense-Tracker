import React from 'react'
import { Grid } from '@material-ui/core'
import { PushToTalkButton, PushToTalkButtonContainer, ErrorPanel, IntroPopup, TranscriptDrawer } from '@speechly/react-ui'

import Main from './components/Main/Main'
import Details from './components/Details/Details'

import useStyles from './styles'

const App = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid className={classes.grid} container spacing={0} alignItems='center' justifyContent='center' style={{ height: '100vh' }}>

        {/* 1st Card: Income */}
        <Grid item xs={12} sm={4}>
          <Details title="Income" />
        </Grid>

        {/* 2nd Card: Main */}
        <Grid item xs={12} sm={3}>
          <Main />
        </Grid>

        {/* 3rd Card: Expense */}
        <Grid item xs={12} sm={4}>
          <Details title="Expense" />
        </Grid>
      </Grid>
      <PushToTalkButtonContainer>
        <PushToTalkButton />
        {/* <ErrorPanel /> */}
        {/* <TranscriptDrawer />
        <IntroPopup /> */}
      </PushToTalkButtonContainer>
    </div>
  )
}

export default App