import React from 'react'
import styled from 'styled-components'

import MIcon from './share/MIcon'
import { blue } from './global-styles'

const SideBarWrapper = styled.div`
  width: 180px;
  background-color: ${blue};
  display: flex;
  flex-direction: column;
  padding-left: 59px;
  box-sizing: border-box;
`

const Navs = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding-top: 48px;
`

const Col = styled.div`
  margin-bottom: 48px;
`

const Nav = styled.a`
  display: inline-block;
  cursor: pointer;
`

const LogoWrapper = styled.div`
  min-height: 215px;
`

const Logo = styled.span`
  display: inline-block;
  transform: rotate(90deg);
  transform-origin: 18px 18px;
  color: white;
  font-size: 24px;
  font-weight: 800;
  width: 28px; /* remove invisible width */
`

const SideBar = props => {
  return (
    <SideBarWrapper>
      <Navs>
        <Col>
          <Nav>
            <MIcon icon="mi-list" size={36} color="white"/>
          </Nav>
        </Col>
        <Col>
          <Nav>
            <MIcon icon="mi-poll" size={36} color="white"/>
          </Nav>
        </Col>
        <Col>
          <Nav>
            <MIcon icon="mi-library-music" size={36} color="white"/>
          </Nav>
        </Col>
      </Navs>

      <LogoWrapper>
        <Nav>
          <Logo>POMODORO</Logo>
        </Nav>
      </LogoWrapper>
    </SideBarWrapper>
  )
}

export default SideBar
