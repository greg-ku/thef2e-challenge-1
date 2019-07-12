import React, { useContext, useState } from 'react'
import styled, { withTheme } from 'styled-components'

import { GlobalState } from './../../global-state'
import MIcon from './../MIcon'

const InputGroup = styled.div`
  display: flex;
`

const InputWrapper = styled.div`
  flex-grow: 1;
`

const Input = styled.input`
  padding: 19px 0 19px 16px;
  outline: 0;
  width: 100%;
  border: 0;
  box-sizing: border-box;
  color: ${props => props.theme.primary};

  &:: placeholder {
    font-weight: 600;
    font-style: oblique;
    color: ${props => props.theme.primary};
  }
`
const InputWithTheme = withTheme(Input)

const Add = styled.button`
  border: 0;
  padding: 16px;
  line-height: 0.5;
  cursor: pointer;
  outline: 0;
  color: ${props => props.theme.primary};
`
const AddWithTheme = withTheme(Add)

const AddInput = props => {
  const { context, dispatch } = useContext(GlobalState)

  const [text, setText] = useState('')

  function handleAddClick(todoTitle) {
    dispatch({ type: 'ADD_TODO', payload: todoTitle })
    setText('')
  }

  return (
    <InputGroup>
      <InputWrapper>
        <InputWithTheme
          placeholder="ADD A NEW MISSION..."
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </InputWrapper>
      <AddWithTheme onClick={() => handleAddClick(text)}>
        <MIcon icon="add"/>
      </AddWithTheme>
    </InputGroup>
  )
}

export default AddInput
