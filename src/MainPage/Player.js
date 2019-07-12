import React from 'react'
import styled, { withTheme } from 'styled-components'

import MIcon from './../share/MIcon'

const Progress = styled.div`
  border: 4px solid ${props => props.theme.primary};
  border-radius: 100%;
  background-color: transparent;
  width: 540px;
  height: 540px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;
`
const ProgressWithTheme = withTheme(Progress)

const Circle = styled.div`
  background-color: ${props => props.isRunning ? 'white' : props.theme.primary};
  border-radius: 100%;
  width: 510px;
  height: 510px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const CircleWithTheme = withTheme(Circle)

const Play = styled.button`
  position: relative;
  border: 0;
  outline: 0;
  background-color: transparent;
`

const Icon = styled(MIcon)`
  font-size: 6rem;
  color: ${props => props.play ? 'white' : props.theme.primary};
  cursor: pointer;
`
const IconWithTheme = withTheme(Icon)

const Stop = styled.button`
  position: absolute;
  right: -10px;
  bottom: 12px;
  border: 0;
  outline: 0;
  width: 12px;
  height: 12px;
  padding: 0;
  background-color: ${props => props.isRunning ? props.theme.primary : 'white'};
  cursor: pointer;
`
const StopWithTheme = withTheme(Stop)

const A = styled.a`
  display: inline-block;
`

const Player = ({ player, onPlay, onPause, onStop }) => {
  const isRunning = player.status === 'WORKING' || player.status === 'BREAKING'
  return (
    <ProgressWithTheme>
      <CircleWithTheme isRunning={isRunning}>
        <Play>
          {
            !isRunning &&
            <A onClick={onPlay}><IconWithTheme icon="play_circle_filled" play/></A>
          }
          {
            isRunning &&
            <A onClick={onPause}><IconWithTheme icon="pause_circle_filled" pause/></A>
          }
          <StopWithTheme onClick={onStop} isRunning={isRunning}/>
        </Play>
      </CircleWithTheme>
    </ProgressWithTheme>
  )
}

export default Player
