/ Nav.js
import React from 'react'
import styled, { css } from 'styled-components'

// Import Button component
import Button from './Button'

... styles for navigation

const NavButton = styled(Button)`
  @media (min-width: 479px) {
    display: none;
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
      <header>
        <NavWrapper isOpen={this.state.show}>
          <NavButton onClick={this.toggleMenu}>Menu</NavButton>

          <NavList>
            <NavItem>
              <a href="/">Home</a>
            </NavItem>

            <NavItem>
              <a href="/about">About</a>
            </NavItem>

            <NavItem>
              <a href="/portfolio">Portfolio</a>
            </NavItem>

            <NavItem>
              <a href="/contact">Contact</a>
            </NavItem>
          </NavList>
        </NavWrapper>
      </header>
    )
  }
}