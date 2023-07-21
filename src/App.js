import {useState} from 'react'
import './App.css'
import HomePage from './components/HomePage'
import EmployeePage from './components/EmployeePage'
import employees from './models/employeeList'

function App() {

	const [index, setIndex] = useState(0);
	const updateIndex = (i) => () => setIndex(i);

	return (
		<div className="App">
			<HomePage employees={employees} setterFunction={updateIndex} />
			<EmployeePage employee={employees[index]} />
		</div>
	)
}

export default App;
