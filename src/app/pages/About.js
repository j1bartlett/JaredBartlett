//About.js
import React from 'react'
import styled from 'styled-components'
import CaseOne from './../pages/CaseOne'

// Import Container component
import Container from './../components/Container'

// Import Link component
import Link from './../components/Link'

// Import Section component
import Section from './../components/Section'
import Button from './../components/Button'

// Import typography components
import { Heading, Subheading, Minorheading, Highlight, Text } from './../components/Typography'
const AboutWrapper = styled(Section)`
  padding-top: 120px;
  padding-bottom: 80px;
`
// Using Button component but changing the element to 'a'
const Case = Button.withComponent('a')
const Case1 = styled(Case)`
margin-bottom:20px;
vertical-align:middle;
display: inline-block;`
const Sub = styled(Subheading)`
display:inline-block;
margin-right:20px;
`
export default class About extends React.Component {
  render () {
    return (
      <AboutWrapper>
        <Container>
          

          <Heading>Jared Bartlett</Heading>
          <Sub>About Me</Sub>
          <Text>I am a UX designer and developer with 20 years of experience developing websites, brands, print, and advertising. I studied Industrial & Transportation Design at Center For Creative Studies (CCS) in Detroit, MI.</Text>
          <Text>I operated a successful digital creative agency for 16 years in Arizona before re-joining the automotive world to design marketing materials and software for industry-leading automotive CRM software company, Elead1One.</Text>

          <Text>I am currently developing a nodejs-based email marketing templating automation tool call Automail that compiles Automotive Sales and Fixed-Ops offers into modular template components. Automail has drastically increased productivity and virtually eliminated costly mistakes commonly made while hand-building email marketing materials.</Text>
</Container>
<Container>
        <Sub>Approach To UX</Sub> <Case1 href="/CaseOne">Case Study</Case1>
         <Container bg>
         <ul>
         <li>Research and Analytics</li>
           <li>Reinforce The Brand</li>
           <li>Trigger Wakefullness (RAS)</li>
           <li>Engagement Hook</li>
           <li>Elevate Value Perceptions</li>
           <li>Reduce Perceptions of Risk</li>

         </ul>
         </Container>
         <Minorheading>Research and Analytics</Minorheading>
         <Text>It's easy to rely on past experience and gut feelings to make UX decisions but that isn't a very informed process and the stakes are too high to get it wrong. UX is a cycle of measurement, development, deployment, analysis and augmentation. This iterative process leads to intelligent and highly optimized user experiences.</Text>
         <Text nopad><Highlight>UX Value</Highlight>Data dictates decisions. Every decision we make is a product of empirical and qualitative data gathering. The more data we gather the more informed our analysis becomes. The quality of our analysis is paramount to productive decisions. We can use this intelligence to accurately and effectively develop experiences for users.</Text>
         <Minorheading>Reinforce The Brand</Minorheading>
         <Text>A brand is built upon "Brand Sentiment" or the sum-total of a collection of experiences a customer or user has with a brand. Often a customers experience begins and ends with interactions online, whether by way of product research or direct interaction with a brands website. </Text>
         <Text nopad><Highlight>UX Value</Highlight>My approach to UX is informed first by the principles of brand development and permeates all levels of design and development. While design, decoration, and innovative interfaces make for fun projects and portfolio pieces, a designer must critically examine the impact a design decision has on the users perception of the brand.</Text>
         <Minorheading>Trigger Wakefullness (RAS)</Minorheading>
          <Text>Human primitive instincts provide a mechanism for recognizing danger, and opportunity called a "Reticular Activator System" (RAS) Our minds aren't programmed to pay attention to all things at all times so the reticular activator his serves as a radar constantly running in the background. RAS switches our brains between passive awareness and active wakefulness. I call the triggers to this system "Hot-buttons". For instance if I called you by your first name you would become alert and seek more information about what alerted you and why. </Text>
          <Text nopad><Highlight>UX Value</Highlight>We can use RAS to get the attention of the user by leveraging visuals, layouts, and graphics as hot-buttons that trigger alertness. </Text>
          <Minorheading>Hook Engagement</Minorheading>
          <Text>Imagine being in a busy place like an airport someone says triggers your RAS with your first name as a hot-button. As mentioned above you'd seek information about what and why someone might be calling your attention. But what happens if no one approaches you and you find no further information about it? That's right, You dismiss the alert and continue on your way. This is due to a lack of "Engagement". </Text>
          <Text nopad><Highlight>UX Value</Highlight>We must not settle for simply getting attention. We have to engage the user in a dialogue about the value of the product, service, or whatever the next step may be. This occurs usually in the form a quantified value statement like "Our product will make you 30% happier, find out how - Take Action Here." </Text>
          <Minorheading>Elevate Value Perceptions</Minorheading>
          <Text>Here's where the real work get's done. We must layout a convincing case to the user why the value of the product, service, or effort to take the next step is worth more than the value of their money, time, or energy.</Text>
          <Text nopad><Highlight>UX Value</Highlight>We have to make this part as easy to consume as possible and get out of the way. </Text>
          <Minorheading>Reduce Perceptions of Risk</Minorheading>
          <Text >We are primitively wired for self-preservation although we may sometimes act contrary to our instincts. This means we are keenly aware of risk and we constantly seek information to mitigate the risks of our actions. </Text>
          <Text nopad><Highlight>UX Value</Highlight>We have to address the perceived risks and prepare methods for the user to alleviate the anxiety of harm. The effects of this cannot be understated. Greater perceived risk elevates the level of perceived value we must build to make it worth the transaction. Risk lengthens sales cycles, increases the cost of marketing and generally makes it difficult to achieve your goals. </Text>
          
          </Container>
<Container>
          <a href="mailto:jared@rzn8.com">jared@rzn8.com</a>
        </Container>
      </AboutWrapper>
    )
  }
}