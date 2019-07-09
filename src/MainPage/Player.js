import React from 'react'
import styled from 'styled-components'

import MIcon from './../share/MIcon'
import { blue, pink } from './../global-styles'

const Progress = styled.div`
  border: 4px solid ${pink};
  border-radius: 100%;
  background-color: transparent;
  width: 540px;
  height: 540px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;
`

const Circle = styled.div`
  background-color: ${pink};
  border-radius: 100%;
  width: 510px;
  height: 510px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Play = styled.button`
  position: relative;
  border: 0;
  outline: 0;
  background-color: transparent;
`

const PlayIcon = styled(MIcon)`
  font-size: 6rem;
  color: white;
  cursor: pointer;
`

const Stop = styled.button`
  position: absolute;
  right: -10px;
  bottom: 12px;
  border: 0;
  outline: 0;
  width: 12px;
  height: 12px;
  padding: 0;
  background-color: white;
  cursor: pointer;
`

const Player = props => {
  return (
    <Progress>
      <Circle>
        <Play>
          <PlayIcon icon="mi-play-circle-filled"/>
          <Stop/>
        </Play>
      </Circle>
    </Progress>
  )
}

export default Player
