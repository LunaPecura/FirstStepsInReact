import React from 'react'

function EmployeeHeader(props) {
	return (
		<div className="EmployeeHeader">
			{props.employee.name}
		</div>
	)
}

export default EmployeeHeader
