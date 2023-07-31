import React from 'react'

const EmployeeQuote = (props) => {
	return (
		<div className="EmployeeQuote">
			<q>{props.employee.quote}</q>
		</div>
	)
}

export default EmployeeQuote
