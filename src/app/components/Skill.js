//Skill.js
import React, {Component} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const SkillItem = styled.div`
& :before{
	content:"- ";
}
`

function Skill(props){
	return(
		<SkillItem className="skill">
		<span>{props.name}</span>
		</SkillItem>
		);
}
Skill.propTypes = {
	name: PropTypes.string.isRequired
};
export default Skill;