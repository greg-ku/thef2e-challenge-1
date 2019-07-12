import React, { useContext } from 'react'
import styled from 'styled-components'

import { GlobalState } from './../global-state'
import AddInput from './../share/AddInput'
import TodoList from './../share/TodoList'
import { blue } from './../global-styles'
import Player from './Player'
import MainTodo from './MainTodo'

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
  display: flex;
  align-items: center;
`

const MainPage = () => {
  const { context, dispatch } = useContext(GlobalState)
  const [firstTodo, ...otherTodos] = context.todos

  return (
    <Wrapper>
      <LeftHalf>
        <Row>
          <div>
            <AddInput/>
          </div>
          <GrowCol>
            {firstTodo && <MainTodo todo={firstTodo} time={context.player.remainingTimeMs}/>}
          </GrowCol>
          <div>
            <TodoList todos={otherTodos} maxDispalyLength={3}/>
          </div>
        </Row>
      </LeftHalf>
      <RightHalf>
        <VCentering>
          <Player
            player={context.player}
            onPlay={() => firstTodo &&  dispatch({ type: 'START', payload: new Date() })}
            onPause={() => dispatch({ type: 'PAUSE', payload: new Date() })}
            onStop={() => dispatch({ type: 'STOP', payload: new Date() })}
          />
        </VCentering>
        <HalfBackground/>
      </RightHalf>
    </Wrapper>
  )
}

export default MainPage
