import React from 'react'
import styled from 'styled-components'

const I = styled.i`
  font-size: ${props => props.size ? `${props.size}px` : '24px'};
  color: ${props => props.color ? props.color : 'inherit'}
`

const MIcon = props => (
  <I
    className={`material-icons ${props.className ? props.className : ''}`}
    size={props.size}
    color={props.color}
  >{props.icon}</I>
)

export default MIcon
