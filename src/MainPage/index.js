import React from 'react'
import styled from 'styled-components'

import MIcon from './../share/MIcon'
import { blue, pink } from './../global-styles'
import Player from './Player'
import AddInput from './../share/AddInput'
import TodoList from './../share/TodoList'

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  background-color: #FFEDF7;
`

const LeftHalf = styled.div`
  flex-grow: 1;
  min-width: 560px;
  padding-left: 85px;
  box-sizing: border-box;
`

const RightHalf = styled.div`
  width: 540px;
  position: relative;
`

const VCentering = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`

const HalfBackground = styled.div`
  position: absolute;
  width: 50%;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: ${blue};
`

const Row = styled.div`
  width: 445px;
  display: flex;
  flex-direction: column;
  padding: 48px 0;
  height: 100%;
  box-sizing: border-box;
`

const GrowCol = styled.div`
  flex-grow: 1;
`

const MainPage = ({ todos = [] }) => {
  const [firstTodo, ...otherTodos] = todos

  return (
    <Wrapper>
      <LeftHalf>
        <Row>
          <div>
            <AddInput/>
          </div>
          <GrowCol>
          </GrowCol>
          <div>
            <TodoList todos={otherTodos} maxDispalyLength={3}/>
          </div>
        </Row>
      </LeftHalf>
      <RightHalf>
        <VCentering>
          <Player/>
        </VCentering>
        <HalfBackground/>
      </RightHalf>
    </Wrapper>
  )
}

export default MainPage
