import React, { useRef } from 'react'
import { Grid } from '@material-ui/core'
import { PushToTalkButton, PushToTalkButtonContainer } from '@speechly/react-ui'
import { useSpeechContext } from '@speechly/react-client'

import Main from './components/Main/Main'
import Details from './components/Details/Details'

import useStyles from './styles'

const App = () => {
  const classes = useStyles();

  const { listening } = useSpeechContext();
  const main = useRef(null);

  const executeScroll = () => {
    if (listening) {
      main.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }

  return (
    <div>
      <Grid className={classes.grid} container spacing={0} alignItems='center' justifyContent='center' style={{ height: '100vh' }}>

        {/* Income Card */}
        <Grid item xs={12} sm={3} className={classes.mobile}>
          <Details title="Income" />
        </Grid>

        {/* Main Card */}
        <Grid ref={main} item xs={12} sm={4} className={classes.main}>
          <Main />
        </Grid>

        {/* Income Card */}
        <Grid item xs={12} sm={3} className={classes.desktop}>
          <Details title="Income" />
        </Grid>

        {/* Expense Card */}
        <Grid item xs={12} sm={3} className={classes.last}>
          <Details title="Expense" />
        </Grid>

      </Grid>

      <PushToTalkButtonContainer onChange={executeScroll()}>
        <PushToTalkButton />
      </PushToTalkButtonContainer>
    </div>
  )
}

export default App