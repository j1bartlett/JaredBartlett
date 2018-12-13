// Home.js
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router';
import Bg1 from './../assets/Wire-man-400x800.png'
import Bg2 from './../assets/Wire-man-768x1024.png'
import Bg3 from './../assets/Wire-man-1280x800.png'
import Bg4 from './../assets/Wire-man-1600x900.png'
import Bg5 from './../assets/Wire-man-1920x1080.png'


// Import Button component
import Button from './../components/Button'

// Import Container component
import Container from './../components/Container'

// Import Section component
import Section from './../components/Section'

// Import typography components
import { Heading, Subheading } from './../components/Typography'

const HomeWrapper = styled(Section)`
  background-image: url(${Bg1});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (min-width: 480px) {
    background-image: url(${Bg2});
  }

  @media (min-width: 768px) {
    background-image: url(${Bg3});
  }

  @media (min-width: 1280px) {
    background-image: url(${Bg4});
  }

  @media (min-width: 1600px) {
    background-image: url(${Bg5});
  }

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    content: '';
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, ..1);
  }

  ${Container} {
    color: #444;
  }

  ${Subheading} {
    margin-bottom: 32px;
  }
`

// Using Button component but changing the element to 'a'
const HomeButton = Button.withComponent('a')

export default class Home extends React.Component {
  render () {
    return (
      <HomeWrapper centered>
        <Container>
          <Heading>Jared Bartlett</Heading>

          <Subheading>UX Designer / Developer</Subheading>

          <HomeButton href="/portfolio">My work</HomeButton><HomeButton href="/resume">Resume</HomeButton>
        </Container>
      </HomeWrapper>
    )
  }
}