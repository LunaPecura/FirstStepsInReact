import React from 'react'
import EmployeeHeader from '../components/EmployeeHeader'

function EmployeeSection(props) {
	return (
		<div className="EmployeeSection">
			<EmployeeHeader employee={props.employee} />
		</div>
	)
}

export default EmployeeSection
