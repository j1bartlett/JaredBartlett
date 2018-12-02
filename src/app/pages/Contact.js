//Contact.js
import React from 'react'
import styled from 'styled-components'

// Import AwesomeIcon
import AwesomeIcon from './../components/AwesomeIcon'

// Import Container component
import Container from './../components/Container'

// Import Link component
import Link from './../components/Link'

// Import Section component
import Section from './../components/Section'

// Import typography components
import { Heading, Text } from './../components/Typography'

const ContactLink = styled(Link)`
  margin-bottom: 32px;
  display: inline-block;
  font-size: 16px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`

const SocialMediaList = styled.ul`
  padding: 0;
  margin: 0;

  li {
    display: inline-block;
    list-style-type: none;

    &:not(:last-child) {
      margin-right: 16px;
    }
  }


  a {
    font-size: 18px;

    @media (min-width: 480px) {
      font-size: 24px;
    }
  }
`

export default class Contact extends React.Component {
  render () {
    return (
      <Section centered>
        <Container>
          <Heading>Say Hello</Heading>

          <Text>I'd love to discuss new opportunities. If you are interested in a new project, collaboration, or just to chat, feel free to contact me.</Text>

          <ContactLink href="mailto:jared@rzn8.com">jared@jared.com</ContactLink>

          <Text>Follow me on the web:</Text>

          <SocialMediaList>
           
            <li>
              <Link href="https://www.linkedin.com/in/jaredbartlett/">
                <AwesomeIcon icon="linkedin" />
              </Link>
            </li>

           
            <li>
              <Link href="https://github.com/j1bartlett">
                <AwesomeIcon icon="github" />
              </Link>
            </li>

            <li>
              <Link href="https://www.facebook.com/jared.bartlett2">
                <AwesomeIcon icon="facebook" />
              </Link>
            </li>
           <li>
              <Link href="https://www.instagram.com/bartlett_collection/">
                <AwesomeIcon icon="instagram" />
              </Link>
            </li>
             </SocialMediaList>
        </Container>
      </Section>
    )
  }
}