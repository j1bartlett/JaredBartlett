//CaseOne.js
import React from 'react'
import styled from 'styled-components'

// Import Container component
import Container from './../components/Container'

// Import Link component
import Link from './../components/Link'

// Import Section component
import Section from './../components/Section'

// Import typography components
import { Heading, Subheading, Minorheading, Highlight, Text } from './../components/Typography'
const CaseWrapper = styled(Section)`
  padding-top: 120px;
  padding-bottom: 80px;
`
export default class Case extends React.Component {
  render () {
    return (
      <CaseWrapper>
        <Container>
          <Subheading>Case</Subheading>

          <Heading>Cosmetic Product</Heading>

          <Text>This case company was a small single-product home business started by a woman with a great product idea to keep her hair out of the way as she cleaned her face and applied makeup. The owner hired a talented graphic designer to develop an attractive brand identity and a website.</Text>
         <Minorheading>The problem</Minorheading>
		<Text>The product was also sold via QVC and did extremely well on that network but the website sales were not performing, only yielding approximately $500 a month. I was asked to boost sales with SEO and SEM campaigns.</Text>
         </Container>
 		<Container>
 		<Minorheading>Assessment</Minorheading>
		<Text>I wanted to understand the path the existing traffic was taking before any campaigns were deployed so I installed two different analytic trackers Google Analytics, and Woopra. I suspected there was a problem with the UX first and foremost. Analytics revealed that most existing traffic was coming from established bloggers linking directly to the home page. Unfortunately there was an extremely high bounce rate on the home page in the 70%-80% range.</Text>
 		</Container>
 		<Container>
 		<Minorheading>Analysis</Minorheading>
		
<Text>There were a few things happening that needed to be addressed in order to improve sales.</Text>
<Container bg>
	<ul>
	<li>The homepage consisted of large brand-establishing graphics that occupied most of the valuable real estate. </li>
	<li>The home page contained a very small demo video, with rather loud and energetic music set on auto-play.</li>
	<li>Although there was only a single product it came in a variety of colors. The homepage didn't provide immediate links to view or purchase high-performing product options.</li>
	<li>With only a single product to sell, special promotions are a vital part of leveraging past customers to come back or empower them to refer friends with incentives.</li>
	<li>The company also sold wholesale packs to retailers but was taking paper orders by fax for these and had no way of servicing retailers from their website.</li>
	</ul>
</Container>
 		</Container>

 <Container>
 		<Minorheading>UX Recommendations</Minorheading>
<Text>There were a few things happening that needed to be addressed in order to improve sales.</Text>
 <Container bg>
 <ul>
<li>The product is extremely simple there's not much marketing value in a demo video. If a demo video is required then most certainly it would serve the user experience to allow them to decide if they want to watch it or not.</li>

<li>Reduce brand-graphics and let the experience establish the brand. Customers come to gather information about a product to decide if the value of that product exceeds the value of their cash. The job of a retail website is to get out of the way and build perceived value in the most direct way possible.</li>

<li>Variety is the key to selling a single product multiple times to the same person. Knowing what colors are the most popular boosts confidence and reduces perceptions of risk. I recommended leveraging sales analytics to dynamically display three of most popular color choices.</li>

<li>I recommended using a small but prominent section of the homepage to promote current sales events and associated promotional codes.</li>

<li>With retailers representing the largest revenue I recommended redeveloping the simple retail ecommerce site to leverage a more robust shopping engine capable of registering wholesale accounts and separate products, categories, promotions, and shipping options just for retailers who are logged in.</li>
</ul>
</Container>
</Container>
<Container>
 		<Minorheading>Results</Minorheading>
		<Text>After development we released the new website just in time for the upcoming holiday season. Without any additional search marketing the site sold $15M to retail customers the first month. This continued and climbed for years afterwards yielding $1.25MM  and eventually allowing the owners to sell the company for an undisclosed but lucrative sum.</Text>
 		</Container>
 <Container>
 		<Minorheading>Maintenance</Minorheading>
		<Text>Making a few successful changes early did not mean that the job was done. I spent approx 8 years working with this client refining the user experience to improve sales and decrease customer complaints by analyzing traffic patterns and improving the end-to-end experience from first-click to shipping label.</Text>
 		</Container>
<Container>
          <a href="mailto:jared@rzn8.com">jared@rzn8.com</a>
        </Container>
      </CaseWrapper>
    )
  }
}