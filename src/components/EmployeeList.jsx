import React from 'react'
import EmployeeListItem from './EmployeeListItem';

function EmployeeList(props) {

	const allEmployees = props.employees.map((e, index) => {
		return <EmployeeListItem employee={e}></EmployeeListItem>
	})

	return (
		<div className="EmployeeList">{allEmployees}</div>
	)
}

export default EmployeeList
