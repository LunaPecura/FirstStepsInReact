import React from 'react'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import EmployeeList from '../components/EmployeeList'
import employees from '../models/employeeList'

function HomePage() {
	
return (
	<div className="HomePage">
		<Header content={"Employee Directory"}></Header>
		<SearchBar></SearchBar>
		<EmployeeList employees={employees}></EmployeeList>
	</div>
)}

export default HomePage
