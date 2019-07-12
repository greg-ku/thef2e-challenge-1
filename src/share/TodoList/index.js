import React, { Fragment } from 'react'
import styled from 'styled-components'

import MIcon from './../MIcon'
import { blue, workTheme } from './../../global-styles'

const TodoWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid rgba(0, 49, 100, 0.2);
  color: ${blue};
`

const TitleCol = styled.div`
  flex-grow: 1;
  padding: 0 4px;
  box-sizing: border-box;
  font-weight: 600;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`

const More = styled.a`
  color: ${props => props.theme.primary};
  margin-top: 9px;
  float: right;
  height: 18px;
`
More.defaultProps = { theme: workTheme }

const TodoList = ({ todos = [], maxDispalyLength = 0 }) => {
  const hasMore = maxDispalyLength > 0 && todos.length > maxDispalyLength
  const displayedTodos = hasMore ? todos.splice(0, maxDispalyLength) : todos

  return (
    <Fragment>
      {
        displayedTodos.map((todo, index) => (
          <TodoWrapper key={`todo-${index}`}>
            <div><MIcon icon="panorama_fish_eye" clickable/></div>
            <TitleCol>{todo.title}</TitleCol>
            <div><MIcon icon="play_circle_outline" clickable/></div>
          </TodoWrapper>
        ))
      }
      <More>{hasMore && 'MORE'}</More>
    </Fragment>
  )
}

export default TodoList
