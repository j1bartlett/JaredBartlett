//List.js
import React from "react"
import styled from 'styled-components'
import Experience from "./Experience"
const Exp = styled.div`
color:#666;
& h2{
  font-size:20px;
  text-transform:uppercase;
  & span{
    font-size:14px;
    font-weight:normal;
    
  }
}
& h3{
    font-size:16px;
    font-weight:normal;
`
function ExperienceList(props) {
  return (
    <Exp>
    <h2> {props.emp}, <span>{props.location}, {props.date}</span></h2>
    <h3>{props.role}</h3>
    <ul>
    {props.skills.map(c => <Experience key={c.id} name={c.name} />)}
    </ul>
    </Exp>
  ); 
} 
export default ExperienceList;

