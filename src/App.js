import React from 'react'
import styled from 'styled-components'
import 'material-icons/iconfont/material-icons.css'
import 'material-icons/css/material-icons.min.css'

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
    <MainWrapper>
      <Page>
        <MainPage/>
      </Page>
      <SideBar/>
    </MainWrapper>
  )
}

export default App
