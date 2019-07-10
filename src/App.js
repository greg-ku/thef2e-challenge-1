import React from 'react'
import styled from 'styled-components'
import 'material-icons/iconfont/material-icons.css'

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
  const todos = [
    { pomodoro: 2, title: 'THE FIRST THING TO DO TODAY', done: false },
    { pomodoro: 0, title: 'THE SECOND THING TO DO TODAY', done: false },
    { pomodoro: 0, title: 'THE THIRD THING TO DO TODAY', done: false },
    { pomodoro: 0, title: 'THE FOURTH THING TO DO TODAY', done: false },
  ]

  return (
    <span>
      <GlobalStyle/>
      <MainWrapper>
        <Page>
          <MainPage todos={todos}/>
        </Page>
        <SideBar/>
      </MainWrapper>
    </span>
  )
}

export default App
