import React from 'react'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import EmployeeList from '../components/EmployeeList'


function HomePage(props) {
	
return (
	<div className="HomePage">
		<Header content={"Southpark Directory"} />
		<SearchBar></SearchBar>
		<EmployeeList employees={props.employees} ff={props.ff} />
	</div>
)}

export default HomePage
