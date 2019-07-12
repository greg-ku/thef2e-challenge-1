import React, { useContext } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import 'material-icons/iconfont/material-icons.css'

import { withGlobalState, GlobalState } from './global-state'
import GlobalStyle, { workTheme, breakTheme } from './global-styles'
import MainPage from './MainPage'
import SideBar from './SideBar'

const MainWrapper = styled.div`
  display: flex;
  min-width: 1280px;
  height: 100vh;
  min-height: 800px;
`

const Page = styled.div`
  flex-grow: 1;
`

function App() {
  const { context } = useContext(GlobalState)
  const type = context.player.type

  return (
    <ThemeProvider theme={type === 'BREAK' ? breakTheme : workTheme}>
      <span>
        <GlobalStyle/>
        <MainWrapper>
          <Page>
            <MainPage/>
          </Page>
          <SideBar/>
        </MainWrapper>
      </span>
    </ThemeProvider>
  )
}

export default withGlobalState(App)
