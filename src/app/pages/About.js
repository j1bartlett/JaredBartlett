//About.js
import React from 'react'
import styled from 'styled-components'

// Import Container component
import Container from './../components/Container'

// Import Link component
import Link from './../components/Link'

// Import Section component
import Section from './../components/Section'

// Import typography components
import { Heading, Subheading, Text } from './../components/Typography'

export default class About extends React.Component {
  render () {
    return (
      <Section centered>
        <Container>
          <Subheading>Jared Bartlett</Subheading>

          <Heading>About Me</Heading>

          <Text>I am a digital designer and developer with 20 years of experience developing websites, brands, print, and advertising. I studied Industrial & Transportation Design at Center For Creative Studies (CCS) in Detroit, MI.</Text>
          <Text>I operated a successful digital creative agency for 16 years in Arizona before re-joining the automotive world to design marketing materials and software for industry-leading automotive CRM software company, Elead1One.</Text>

          <Text>I am now developing a nodejs-based email marketing templating automation tool call Automail that compiles Automotive Sales and Fixed-Ops offers into modular template components. Automail has drastically increased productivity and virtually eliminated costly mistakes commonly made while hand-building email marketing materials.</Text>

          <a href="mailto:jared@rzn8.com">jared@rzn8.com</a>
        </Container>
      </Section>
    )
  }
}