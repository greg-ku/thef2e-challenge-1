import React from 'react'
import styled from 'styled-components'

import MIcon from './../share/MIcon'
import { blue, pink } from './../global-styles'

const MainTodoRow = styled.div`
  display: flex;
  color: ${blue};
`

const MainTodoCol = styled.div`
  flex-grow: 1;
  margin-left: 16px;
  box-sizing: border-box;
`

const MainTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
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

const MainTodo = ({ todo }) => {
  return (
    <div>
      <MainTodoRow>
        <MIcon icon="panorama_fish_eye" size={48}/>
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
        25:00
      </Timer>
    </div>
  )
}

export default MainTodo
