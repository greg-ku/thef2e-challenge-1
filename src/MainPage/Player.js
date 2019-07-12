import React from 'react'
import styled from 'styled-components'

import MIcon from './../share/MIcon'
import { workTheme } from './../global-styles'

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
Progress.defaultProps = { theme: workTheme }

const Circle = styled.div`
  background-color: ${props => props.isRunning ? 'white' : props.theme.primary};
  border-radius: 100%;
  width: 510px;
  height: 510px;
  display: flex;
  justify-content: center;
  align-items: center;
`
Circle.defaultProps = { theme: workTheme }

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
Icon.defaultProps = { theme: workTheme }

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
Stop.defaultProps = { theme: workTheme }

const A = styled.a`
  display: inline-block;
`

const Player = ({ player, onPlay, onPause, onStop }) => {
  const isRunning = player.status === 'WORKING' || player.status === 'BREAKING'
  return (
    <Progress>
      <Circle isRunning={isRunning}>
        <Play>
          {
            !isRunning &&
            <A onClick={onPlay}><Icon icon="play_circle_filled" play/></A>
          }
          {
            isRunning &&
            <A onClick={onPause}><Icon icon="pause_circle_filled" pause/></A>
          }
          <Stop onClick={onStop} isRunning={isRunning}/>
        </Play>
      </Circle>
    </Progress>
  )
}

export default Player
