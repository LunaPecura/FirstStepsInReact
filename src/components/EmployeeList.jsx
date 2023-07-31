import React from 'react'
import EmployeeListItem from './EmployeeListItem'

function EmployeeList(props) {

	const allEmployees = props.employees.map((employee, index) => {
		const onClickFn = props.ff(index)
		return <EmployeeListItem 
					key={index} 
					employee={employee} 
					onClickFn={onClickFn} />
	})

	return (
		<div className="EmployeeList">{allEmployees}</div>
	)
}

export default EmployeeList
