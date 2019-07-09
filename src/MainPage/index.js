import React from 'react'
import styled from 'styled-components'

import { blue } from './../global-styles'
import Player from './Player'

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  background-color: #FFEDF7;
`

const LeftHalf = styled.div`
  flex-grow: 1;
  min-width: 560px;
`

const RightHalf = styled.div`
  width: 540px;
  position: relative;
`

const VCentering = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`

const HalfBackground = styled.div`
  position: absolute;
  width: 50%;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: ${blue};
`

const MainPage = props => {
  return (
    <Wrapper>
      <LeftHalf/>
      <RightHalf>
        <VCentering>
          <Player/>
        </VCentering>
        <HalfBackground/>
      </RightHalf>
    </Wrapper>
  )
}

export default MainPage
