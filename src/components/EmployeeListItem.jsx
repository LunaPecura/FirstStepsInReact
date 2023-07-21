import React from 'react'

function EmployeeListItem(props) {
	
	return (
		<div className="EmployeeListItem" onClick={props.onClickFn}>

			<div className="picDiv">
				<img className="profilePic" src={props.employee.img}></img>
			</div>
			
			<div className="profileDescription">
				<div className="profileDescriptionName">{props.employee.name}</div>
				<div className="profileDescriptionTitle">{props.employee.title}</div>
			</div>

		</div>
	)
}

export default EmployeeListItem
