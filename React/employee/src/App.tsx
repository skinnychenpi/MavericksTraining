import React, {useState} from 'react';
import './App.css';
import Employee from './models/Employee';
import Cards from './components/cards/Cards';
import NavBar from './components/header/NavBar'
import Footer from './components/footer/Footer'
import {getData} from './service/service'

function App() {
  const employeeSample : Employee[] = [new Employee(1,'Leo',"HR", 123), new Employee(2,'Lee',"HR", 125), new Employee(3, 'Cris', 'SD', 250),
  new Employee(3, 'Cris', 'SD', 250), new Employee(3, 'Cris', 'SD', 250), new Employee(3, 'Cris', 'SD', 250), new Employee(3, 'Cris', 'SD', 250),
  new Employee(3, 'Cris', 'SD', 250), new Employee(3, 'Cris', 'SD', 250), new Employee(3, 'Cris', 'SD', 250), new Employee(3, 'Cris', 'SD', 250),
  new Employee(3, 'Cris', 'SD', 250), new Employee(3, 'Cris', 'SD', 250)]; 
  
  const [pageNum, setPageNum] = useState(1);
  let serverEmployees : Employee[] = [];
  const [employees, setEmployees] = React.useState(serverEmployees);

  getData().then((data) => {setEmployees(data)}).catch((err) => {console.log(err)});

  return (
    <div className="App">
        <NavBar employeeUpdater = {setEmployees}></NavBar>
        <br></br>
        <Cards employees={employees} pageNum = {pageNum} employeeUpdater = {setEmployees}></Cards>
        <br></br>
        <Footer numOfEmployees={employees.length} pageNum = {pageNum} pageNumUpdater = {setPageNum}/>
    </div>
  );
}

export default App;
