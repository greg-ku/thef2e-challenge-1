import React from 'react'
import styled from 'styled-components'

import MIcon from './../MIcon'
import { pink } from './../../global-styles'

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
  color: ${pink};

  &:: placeholder {
    font-weight: 600;
    font-style: oblique;
    color: ${pink};
  }
`

const Add = styled.button`
  border: 0;
  padding: 16px;
  line-height: 0.5;
`

const AddInput = props => {
  return (
    <InputGroup>
      <InputWrapper>
        <Input placeholder="ADD A NEW MISSION..."/>
      </InputWrapper>
      <Add><MIcon icon="add" color={pink}/></Add>
    </InputGroup>
  )
}

export default AddInput
