import React from 'react'
import styled from 'styled-components'

const I = styled.i`
  font-size: ${props => props.size ? `${props.size}px` : '24px'};
  color: ${props => props.color ? props.color : 'initial'}
`

const MIcon = props => (
  <I
    className={`mi ${props.icon} ${props.className ? props.className : ''}`}
    size={props.size}
    color={props.color}
  />
)

export default MIcon
