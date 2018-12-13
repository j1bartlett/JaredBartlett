//List.js
import React from "react"
import styled from 'styled-components'
import Skill from "./Skill"
const List = styled.div.attrs({
	className: "left",
})`
  padding: 8px 12px;
  font-size: 16px;
  font-weight: normal;
  text-decoration: none;
  color: #666;
  display:inline-block;
  margin-right: 32px;
  vertical-align:top;

   /* Breakpoint for tablets */
  @media (min-width: 576px) {

      color:#666;
  
  }

  /* Breakpoint for small desktops */
  @media (min-width: 768px) {
    font-size:14px ;
    margin-right:0;
    max-width:33%;
    color:#666;
  }

  /* Breakpoint for medium desktops */
  @media (min-width: 992px) {
     max-width:33%;
     font-size:16px;
     margin-right:32px;
      color:#666;
  }

  /* Breakpoint for large desktops and HD devices */
  @media (min-width: 1200px) {
     max-width:33%;
     margin-right:50px;
      color:#666;
  }
`

function SkillList(props) {
  return (
    <List className={props.className}>
    <h2>{props.title}</h2>
      {props.skills.map(c => <Skill key={c.id} name={c.name} />)}
     </List> 
  ); 
} 
export default SkillList;

