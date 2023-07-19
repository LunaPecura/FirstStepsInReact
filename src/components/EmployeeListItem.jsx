import React from 'react'

function EmployeeListItem(props) {
	
	let imgsrc = props.employee.img;

	return (
		<div className="EmployeeListItem">
			<div className="picDiv"><img className="profilePic" src={imgsrc}/></div>
			<div className="profileDescription">
				<div className="profileDescriptionName">{props.employee.name}</div>
				<div className="profileDescriptionTitle">{props.employee.title}</div>
			</div>
		</div>
	)
}

export default EmployeeListItem
