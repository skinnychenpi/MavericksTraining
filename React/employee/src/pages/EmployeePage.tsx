import React, {useEffect} from 'react';
import Cards from '../components/body/EmployeeBody/cards/Cards';
import NavBar from '../components/header/employeeHeader/NavBar'
import Footer from '../components/footer/Footer'
import {useDispatch} from 'react-redux';
import {getEmployeeData} from '../store/store';
const EmployeePage : React.FC = () => {
  // const employeeSample : Employee[] = [new Employee(1,'Leo',"HR", 123), new Employee(2,'Lee',"HR", 125), new Employee(3, 'Cris', 'SD', 250),
  // new Employee(3, 'Cris', 'SD', 250), new Employee(3, 'Cris', 'SD', 250), new Employee(3, 'Cris', 'SD', 250), new Employee(3, 'Cris', 'SD', 250),
  // new Employee(3, 'Cris', 'SD', 250), new Employee(3, 'Cris', 'SD', 250), new Employee(3, 'Cris', 'SD', 250), new Employee(3, 'Cris', 'SD', 250),
  // new Employee(3, 'Cris', 'SD', 250), new Employee(3, 'Cris', 'SD', 250)]; 

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployeeData());
  }, [dispatch]);

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
