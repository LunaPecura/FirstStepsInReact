import React from 'react';
import EmployeeHeader from '../components/EmployeeHeader';
import EmployeeQuote from '../components/EmployeeQuote';

function EmployeeSection(props) {
	return (
		<div className="EmployeeSection">
			<EmployeeHeader employee={props.employee} />
			<EmployeeQuote employee={props.employee} />
		</div>
	)
}

export default EmployeeSection
