// Nav.js
import React from 'react'
import styled, { css } from 'styled-components'
import Button from './Button'

const NavButton = styled(Button)`
margin-right:40px;
  @media (min-width: 515px) {
    display: none;
  }
`
const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  background-color:rgba(255,255,255,0.90);
`
const NavWrapper = styled.nav`
  padding: 16px;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 515px) {
    flex-direction: column;
    align-items: flex-end;

    /* If navigation is open (show is true) */
    ${props => props.isOpen && css`
      ul {
        position: absolute;
        top: 64px;
        max-height: 1000px;
        background-color:rgba(255,255,255,.9);
        padding:20px;
      }
    `}
  }
`
const NavList = styled.ul`
  margin: 0;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-end;
  list-style-type: none;
  height: auto;
  max-height: 0;

  @media (min-width: 515px) {
    flex-direction: row;
    justify-content: flex-end;
    max-height: 1000px;
  }
`
const NavItem = styled.li`
  & + & {
    margin-top: 12px;
  }

  @media (min-width: 480px) {
    & + & {
      margin-top: 0;
      margin-left: 32px;
    }
  }

  a {
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
    color: #78BB2C;
    text-transform:uppercase;
    transition: color .25s ease-in-out;

    &:hover {
      color: #888;
    }
  }
`

export default class Nav extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      show: false
    }

    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu() {
    this.setState({
      show: !this.state.show
    })
  }

  render () {
    return (
      <Header>
      <NavWrapper isOpen={this.state.show}>
      <NavButton onClick={this.toggleMenu}>Menu</NavButton>
      <NavList>
        <NavItem>
              <a href="/">Home</a>
            </NavItem>

            <NavItem>
              <a href="/about">UX Approach</a>
            </NavItem>

            <NavItem>
              <a href="/portfolio">Portfolio</a>
            </NavItem>

            <NavItem>
              <a href="/resume">Resume</a>
            </NavItem>
             <NavItem>
              <a href="/contact">Contact</a>
            </NavItem>
        </NavList>
         </NavWrapper>
      </Header>
    )
  }
}