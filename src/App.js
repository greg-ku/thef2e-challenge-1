import React from 'react'
import styled from 'styled-components'
import 'material-icons/iconfont/material-icons.css'

import { withGlobalState } from './global-state'
import GlobalStyle from './global-styles'
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
  return (
    <span>
      <GlobalStyle/>
      <MainWrapper>
        <Page>
          <MainPage/>
        </Page>
        <SideBar/>
      </MainWrapper>
    </span>
  )
}

export default withGlobalState(App)
