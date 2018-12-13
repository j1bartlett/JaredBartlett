// Typography.js
import styled, { css } from 'styled-components'

export const Heading = styled.h1`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 36px;
  font-weight: bold;

  @media (min-width: 480px) {
    font-size: 48px;
    text-shadow: none;
  }

  @media (min-width: 768px) {
    font-size: 72px;
    text-shadow: none;
  }

  // Styles for handling spacing between typography elements
  & + h1,
  & + h2,
  & + p {
    margin-top: 21px;
  }
`

export const Subheading = styled.h2`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 24px;
  font-weight: bold;



  @media (min-width: 480px) {
    font-size: 36px;
  }

  @media (min-width: 768px) {
    font-size: 48px;
  }

  // Styles for handling spacing between typography elements
  & + h1,
  & + h2,
  & + p {
    margin-top: 21px;
  }
`
export const Highlight = styled.span`
  text-transform:uppercase;
  font-weight:bold;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 16px;
  display:inline;
  color:#666;
 &:after{
  content:':';
  padding-right:10px;
 }



  @media (min-width: 480px) {
    font-size: 16px;
  }

  @media (min-width: 768px) {
    font-size: 18px;
  }

  // Styles for handling spacing between typography elements
  & + h1,
  & + h2,
  & + p {
    margin-top: 21px;
  }
  ${props => props.dark && css`
    color:#fff;
    font-size:60% !important;
    background-color:#78BB2C;
    padding:5px 10px;
    Margin-right:10px;
    &:after{
  content:'';
  padding-right:0;

 }
  `}
`
export const Minorheading = styled.h4`

  margin-top: 0;
  margin-bottom: 0;
  font-size: 18px;
  font-weight: bold;

  @media (min-width: 480px) {
    font-size: 20px;
  }

  @media (min-width: 768px) {
    font-size: 24px;
  }

  // Styles for handling spacing between typography elements
  & + h1,
  & + h2,
  & + p {
    margin-top: 21px;
  }
`
export const Text = styled.p`
  margin-top: 0;
  font-size: 16px;

  @media (min-width: 768px) {
    font-size: 18px;
  }

  @media (min-width: 992px) {
    font-size: 21px;
  }

  & + & {
    margin-top: 32px;
  }

  
  
  ${props => props.nopad && css`
   margin-top:-10px;
   padding:0;
   margin-left:20px;
   margin-bottom:40px;
   background-color:#efefef;
   padding:1rem;
   @media (min-width: 768px) {
    font-size: 1rem;
  }
  `}
`