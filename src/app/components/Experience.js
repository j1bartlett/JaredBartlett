//Skill.js
import React, {Component} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Item = styled.li`


`
function Experience(props){
	return(
		
		<Item>{props.name}</Item>
		
		);
}
Experience.propTypes = {
	name: PropTypes.string.isRequired
};
export default Experience;