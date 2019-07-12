import React from 'react'
import styled from 'styled-components'

import MIcon from './../share/MIcon'
import { blue, pink } from './../global-styles'

const Div = styled.div`
  width: 100%;
`

const MainTodoRow = styled.div`
  display: flex;
  color: ${blue};
`

const MainTodoCol = styled.div`
  flex-grow: 1;
  margin-left: 16px;
  box-sizing: border-box;
  min-width: 0; /* make child's white-space: nowrap work */
`

const MainTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`

const StatusBar = styled.div`
  margin-top: 8px;
`

const Circle = styled.div`
  display: inline-block;
  border-radius: 100%;
  box-sizing: border-box;
  width: 12px;
  height: 12px;
`

const Progress = styled(Circle)`
  border: 1px solid ${pink};
`

const Timer = styled.div`
  font-size: 176px;
  font-weight: 800;
  color: ${pink};
`

const Pomodoro = styled(Circle)`
  background-color: ${blue};
  margin-right: 8px;
`

const MainTodo = ({ todo, time = 25 * 60 * 1000 }) => {
  return (
    <Div>
      <MainTodoRow>
        <MIcon icon="panorama_fish_eye" size={48} clickable/>
        <MainTodoCol>
          <MainTitle>{todo.title}</MainTitle>
          <StatusBar>
            {
              todo.pomodoro > 0 &&
              Array.from(Array(todo.pomodoro)).map(() => <Pomodoro/>)
            }
            <Progress/>
          </StatusBar>
        </MainTodoCol>
      </MainTodoRow>
      <Timer>
        {('0' + Math.floor(time / 60 / 1000)).slice(-2)}
        :
        {('0' + Math.floor(time / 1000 % 60)).slice(-2)}
      </Timer>
    </Div>
  )
}

export default MainTodo
