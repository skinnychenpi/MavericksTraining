import React from 'react';
import Cards from '../components/body/EmployeeBody/cards/Cards';
import NavBar from '../components/header/employeeHeader/NavBar'
import Footer from '../components/footer/Footer'
import {useSelector, useDispatch} from 'react-redux';
import {getEmployeeData} from '../store/store';
const EmployeePage = () => {
  // const employeeSample : Employee[] = [new Employee(1,'Leo',"HR", 123), new Employee(2,'Lee',"HR", 125), new Employee(3, 'Cris', 'SD', 250),
  // new Employee(3, 'Cris', 'SD', 250), new Employee(3, 'Cris', 'SD', 250), new Employee(3, 'Cris', 'SD', 250), new Employee(3, 'Cris', 'SD', 250),
  // new Employee(3, 'Cris', 'SD', 250), new Employee(3, 'Cris', 'SD', 250), new Employee(3, 'Cris', 'SD', 250), new Employee(3, 'Cris', 'SD', 250),
  // new Employee(3, 'Cris', 'SD', 250), new Employee(3, 'Cris', 'SD', 250)]; 

  const isLoggedIn = useSelector((state : any) => state.auth.isLoggedIn);

  const employees = useSelector((state : any) => state.employee.employees);

  const dispatch = useDispatch();


  // If the data is not downloaded, for example, after login, then download the data.
  if (isLoggedIn && employees.length === 0) {
    dispatch(getEmployeeData());
  }

  return (
    <div className="App">
        <NavBar></NavBar>
        <br></br>
        <Cards></Cards>
        <br></br>
        <Footer/>
    </div>
  );
}

export default EmployeePage;
