//List.js
import React from "react"
import Skill from "./Skill"
function SkillList(props) {
  return (
    <div>{props.skill.map(c=><Skill key={c.id} name={c.name} />)}</div>
  );
}

export default SkillList;