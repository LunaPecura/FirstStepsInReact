import React from 'react'
import Header from '../components/Header'
import EmployeeSection from '../components/EmployeeSection'

function EmployeePage(props) {
	return (
		<div className="EmployeePage">
			<Header content="Who's Who"></Header>
			<EmployeeSection employee={props.employee} />
		</div>
	)
}

export default EmployeePage
