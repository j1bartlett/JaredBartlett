//Resume.js
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

import SkillList from './../components/SkillList'
import ExperienceList from './../components/ExperienceList'
// Import Button component
import Button from './../components/Button'
const Download = Button.withComponent('a')
const Sub = styled(Subheading)`
display:inline-block;
margin-right:20px;
`
const Download1 = styled(Download)`
margin-bottom:20px;
vertical-align:middle;`
const ResumeWrapper = styled(Section)`
  padding-top: 120px;
  padding-bottom: 80px;
`
const skills = [
  { id: 1, name: "Brand / Identity" },
  { id: 2, name: "Print Media" },
  { id: 3, name: "Graphic Design" },
  { id: 4, name: "Ad Campaigns" },
  { id: 5, name: "Media Buying" },
  { id: 6, name: "Broadcast Media"},
  { id: 7, name: "Outdoor Advertising"},
  { id: 8, name: "Copywriting"},
  { id: 9, name: "Photography"}
];
const skillsb = [
  { id: 10, name: "LAMP Server Administration" },
  { id: 11, name: "UI / UX Design & Development" },
  { id: 12, name: "eCommerce Development" },
  { id: 13, name: "Social Media Development" },
  { id: 14, name: "Global / Local Search Marketing" },
  { id: 15, name: "Statistical Performance Tracking" },
  { id: 16, name: "Conversion Optimization"},
  { id: 17, name: "CRM API Integration "},
  { id: 18, name: "CRM and Marketing Automation"},
  { id: 19, name: "SaaS Development"}
];
const skillsc = [
  { id: 21, name: "Manage Creative Teams" },
  { id: 22, name: "Estimate Work and Assemble Resources" },
  { id: 23, name: "Offshore Team Management" },
  { id: 24, name: "Leadership Skills" },
  { id: 25, name: "Account Management" },
  { id: 26, name: "Vendor Relationships"},
  { id: 27, name: "Contract Negotiation"}
];

const Dev = [
{ id: 1, name: "Command Line / Terminal" },
{ id: 2, name: "Sublime Text" },
{ id: 3, name: "Transmit FTP" },
{ id: 4, name: "UXPin" },
{ id: 5, name: "Axure" }

];
const Lang = [
{ id: 1, name: "HTML5" },
{ id: 2, name: "Sass, Scss" },
{ id: 3, name: "Javascript" },
{ id: 4, name: "JSON" },
{ id: 5, name: "PHP" },
{ id: 6, name: "ASP.Net" },
{ id: 7, name: "Python" }
];
const Frame = [
{ id: 1, name: "Node.js" },
{ id: 2, name: "React" },
{ id: 3, name: "jQuery" },
{ id: 4, name: "Foundation" },
{ id: 5, name: "GrapesJS" },
{ id: 6, name: "Drupal" },
{ id: 7, name: "Joomla" },
{ id: 8, name: "Ruby" },
{ id: 9, name: "Django" },
{ id: 10, name: "Magento" }
];
const Work1 = [
{ id: 1, name: "Developed Email Marketing UI/UX Suite for Sonic Automotive." },
{ id: 5, name: "Developed nodejs-based software to automate production of email marketing materials." },
{ id: 6, name: "Established processes and project management procedures now in used by the marketing department." },
{ id: 2, name: "Assembled and managed a remote team of developers to produce 3k unique email templates." },
{ id: 7, name: "Negotiated vendor contract for 20% under original estimates representing significant savings and profitability." },
{ id: 3, name: "Traveled in-market to introduced newly developed marketing products and services to Sonic Automotive dealerships in Houston and San Francisco. " },
{ id: 4, name: "Managed 20 dealership relationships as a marketing consultant." },

];
const Work2 = [
{ id: 1, name: "Managed day to day operations of sales, production and maintenance." },
{ id: 2, name: "Responsible for strategic planning and execution of creative and technical campaigns." },
{ id: 3, name: "Serves as chief point of contact for most client relationships, some relationships lasting over a decade since the companies inception." },
{ id: 4, name: "Interviews and hires comprehensive global creative, administrative and technical teams." },
{ id: 5, name: "Develop project management software infrastructure and vets all third party software tools." },
{ id: 6, name: "Provides primary creative and technical direction to production staff." },
{ id: 7, name: "Creates sales and business development goals and compensation plans." }
];
const Work3 = [
{ id: 1, name: "Designed brand resources for professional sports teams, internet start-ups, and large corporations." },
{ id: 2, name: "Designed print layouts and marketing collateral for a variety of high level businesses and industries." },
{ id: 3, name: "Designed UX/UI and programmed websites and software in the emerging web-based marketplace." },
{ id: 4, name: "Designed exhibits for and installations for professional sports arenas and public concourses." },
{ id: 5, name: "Designed graphic banners for use in professional sports arenas." },
{ id: 6, name: "Assembled presentations and resources for sales and campaign pitches to high level clients and sports teams." },
{ id: 7, name: "Worked with teams of other designers in a competitive atmosphere to deliver cutting edge design and technical solutions to brand and advertising challenges." }
];
const EDU = [
]
export default class Resume extends React.Component {
  render () {
    return (
      <ResumeWrapper>
        <Container>
          <Heading>Jared Bartlett</Heading>

          <Sub>Resume</Sub><Download1 href="https://www.dropbox.com/s/8bwupmgbs55yw8l/Jared%20Bartlett%20Resume%2012%2018.pdf?dl=0" target="_blank">Download</Download1>

          <Text><Highlight>Profile</Highlight>Possesses cross-discipline skills providing the ability to give creative as well as technical direction to teams with role-specific skill sets effectively stitching together dissimilar personalities and capabilities. Experience in the creative and technical industries for 20 years ranging from offset printing press operation to web-based software development. Ran a profitable creative marketing and advertising company for 16 years. Programs in a variety of modern programming/scripting languages, frameworks, and platforms. Senior designer with a body of work with a variety of clients including professional sports teams, American racing legends, rock icons, and large national healthcare companies. Experience hiring and managing full-time in-house staff, remote teams of local and offshore developers and designers to complete projects on time and on budget.</Text>
         <Text><Highlight>Objective</Highlight>Develop skillsets working within a formal production lifecycle. Work towards a role as Product Owner to deliver superior products and user experiences.</Text>
         </Container>
         <Container bg>
         <Minorheading>Qualifications Highlights</Minorheading>
         <SkillList title="Creative" className="left" skills={skills} />
         <SkillList title="Technical" className="middle" skills={skillsb} />
         <SkillList title="Management" className="right" skills={skillsc} />
    </Container>
    <Container>
        <Minorheading>Achievements</Minorheading>
         <Text>Performed brand audit and redesign for American Racing a 50-year-old legacy brand valued at 30 million dollars. New brand identities presented were expected to be durable for the next 50 years of business. </Text>
         <Text nopad><Highlight dark>Result</Highlight>New brand merchandising and product design yielding greatly increased revenue and refreshed opportunities as well as a stable brand extension to a loyal-but-dated brand following.</Text>
        <Text>Directed in-house design team to design and develop brand identities, general print materials, sales collateral, product packaging, exhibits, print advertising, OHH advertising, web display advertising, interior and exterior signage for the 5th largest hospital system in the United States. 
</Text>
        <Text nopad><Highlight dark>Result</Highlight>Met and exceeded compliance goals and increased scoring and positive response to by 108% representing an increase above stated desired achievement goals.</Text>
<Text>Developed financial software tracking investment capital with live tracking of calculated interest rates. The system managed investment groups, products, expenses, profitability, and withdrawals. Dynamically generated legal contracts and facilitated secure digital signatures. </Text>
        <Text nopad><Highlight dark>Result</Highlight>In addition to it’s primary function managing $35,000,000 of investment capital this system was used by the Department of Justice as a modeling aid in the prosecution of criminal entities involved in financial fraud schemes.</Text>
<Text>Developed an e-commerce system for an under-performing product online. Deployed advanced tracking software with custom programmed API interface calls to extend the software and identify sales and performance problems. Redesigned the site interface and the e-commerce software to allow for role-based tracking of retail and wholesale orders, shipping, pricing and discount policies and capabilities. 
</Text>
        <Text nopad><Highlight dark>Result</Highlight>This sales channel has yielded 1.25 million dollars consistently over 5 years.</Text>
</Container>
         <Container bg>
         <Minorheading>Relevant Applications & Capabilities</Minorheading>
         <SkillList medium title={["Development",<br/>, "Tools"]} skills={Dev} />
         <SkillList medium title={["Languages",<br/>, "Formats"]} skills={Lang} />
         <SkillList medium title={["Frameworks",<br/>," & Libraries"]} skills={Frame} />
    </Container>
 <Container>
 <Minorheading>Work Experience</Minorheading>
 <ExperienceList emp="Elead1One" location="Valdosta, GA" date="2017-Present" role="Marketing & Software Development" skills={Work1}/>
 <ExperienceList emp="RZN8 Media" location="Phoenix, AZ" date="2002-2017" role="Creative & Technical Director, Principal" skills={Work2}/>
 <ExperienceList emp="Campbell Fisher Design (CFD)" location="Phoenix, AZ" date="2000-2002" role="UI/UX Designer" skills={Work3}/>
 </Container>
 <Container>
 <Minorheading>Education</Minorheading>
 <ExperienceList emp="Center For Creative Studies" location="Detroit, MI" date="1995-1996" role="BFA Industrial / Automotive Design" skills={EDU}/>
  </Container>
    <Container>
         <a href="mailto:jared@rzn8.com">jared@rzn8.com</a>

        </Container>
      </ResumeWrapper>
    )
  }
}