import React from 'react'
import EmployeeListItem from './EmployeeListItem'

function EmployeeList(props) {

	const allEmployees = props.employees.map((employee, index) => {
		return <EmployeeListItem key={index} employee={employee} 
					onClickFn={props.setterFunction(index)} />
	})

	return (
		<div className="EmployeeList">{allEmployees}</div>
	)
}

export default EmployeeList
