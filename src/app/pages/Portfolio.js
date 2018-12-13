// Portfolio.js
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
import Button from './../components/Button'
const PortfolioWrapper = styled(Section)`
  padding-top: 120px;
  padding-bottom: 80px;
`
const PortfolioGrid = styled.div`
  padding-bottom: 32px;
  display: flex;
  flex-wrap: wrap;

`
const PortfolioItem = styled.a`
  display: block;
  cursor: pointer;
  width: 100%;
  transition: opacity .25s ease-in-out;
  border:20px solid #ccc;
  &:focus,
  &:hover {
    opacity: .5;
  }

  @media (max-width: 767px) {
    &:nth-child(n+2) {
      margin-top: 16px;
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: calc(50% - 32px);

    &:nth-child(odd) {
      margin-right: 32px;
    }

    &:nth-child(even) {
      margin-left: 32px;
    }

    &:nth-child(n+3) {
      margin-top: 48px;
    }
  }

  @media (min-width: 992px) {
    width: calc(33.33333% - 32px);

   
    &:nth-child(3n+1)
      {
      margin-right: 32px;
    }


    &:nth-child(3n) {
      
      margin-left: 32px;
    }


    &:nth-child(n+4) {
      margin-top: 24px;
    }
  }
`
const Sub = styled(Subheading)`
display:inline-block;
margin-right:20px;
`
// Using Button component but changing the element to 'a'
const Case = Button.withComponent('a')
const Case1 = styled(Case)`
margin-bottom:20px;
vertical-align:middle;
display: inline-block;`
const PortfolioItemThumbnail = styled.img`
  max-width: 100%;
  object-fit: contain;
`
let a = ["American-Racing-Packaging.jpg",
"American-Racing.jpg",
"Arnett_web.jpg",
"AZScooter_Web.png",
"AzScooter-Logo.png",
"AZTECH_Advert.png",
"BinaryOffice.png",
"BurningScorpion.png",
"CHW_Posters.jpg",
"Cinnamon-Roasted.png",
"DefensePest.png",
"Designr1_Web.png",
"EZPHX_logo.png",
"FED-Logo.png",
"Finlinson.png",
"Finlinsonproperties_web.png",
"Florence-Econimic-Development-Website.jpg",
"Florence-Economic-Development.jpg",
"FlorenceChamber.png",
"GlobeCorproation_Web.png",
"Healthfoodie.png",
"Heritage.jpg",
"improveCME_logo.png",
"ImproveCME.png",
"Longden_web.png",
"MealFactory.png",
"MontiRugs.jpg",
"NHFF_Web.jpg",
"NutritionGiants.jpg",
"PalmWestLeather.jpg",
"Perfect-Skin-Laser-Center.jpg",
"photomatronic.png",
"Pierpont.png",
"PolkadotPosh.png",
"PremierKitchen.jpg",
"QueenCreekAccounting.png",
"QueenCreekDental.png",
"ReedFamilyVision.png",
"Reyes-Logo.png",
"Rinaldi_adv.jpg",
"Rinaldi-Smile.jpg",
"RunFatBoy.png",
"Scottsdale.jpg",
"SealOutScorpions.png",
"Shelby.jpg",
"SteelInnovations_Web.jpg",
"Stoopid_tree.png",
"Summit-Asset.png",
"SWF_Brochure.png",
"SWF-Logo.png",
"SYAP.png",
"Syrus-Logo.jpg",
"Tassi_web.jpg",
"Tourism-Brochure.jpg",
"Vaquero-Estates.png",
"vGas_Packaging.png",
"VictoryAngelFilms-300x300.png",
"WhiteFox.png",
"Wonbid.jpg",
"ZipsEnergy-Poster.png"];

export default class Portfolio extends React.Component {
  render () {
    return (
      <PortfolioWrapper>
        <Container>
        
          <Heading>Jared Bartlett</Heading>
          <Sub>My Work</Sub><Case1 href="/CaseOne">Case Study</Case1>


          <Text>Selected examples of my work. If you want to see more, drop me an email.</Text>
          <PortfolioGrid>
{a.map(i => {
  //const string = "./../assets/portfolio/AZScooter_Web.png";
  let path = "http://www.rzn8.com/portfolio/"+i;
  
        return <PortfolioItem href="">
              <PortfolioItemThumbnail src={path} srcSet={(path+" 1x")} alt="Example of work" />
            </PortfolioItem>
      })}
          
          </PortfolioGrid>

          <Text>Let's get in touch:</Text>

          <Link href="mailto:jared@rzn8.com">jared@rzn8.com</Link>
        </Container>
      </PortfolioWrapper>
    )
  }
}