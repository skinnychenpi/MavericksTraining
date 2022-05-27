import React, {useState} from 'react';
import './App.css';
import Cards from './components/cards/Cards';
import NavBar from './components/header/NavBar'
import Footer from './components/footer/Footer'
import {useDispatch } from 'react-redux';
import {getEmployeeData} from './store/store';
import Alert from './components/alert/Alert';
function App() {
  // const employeeSample : Employee[] = [new Employee(1,'Leo',"HR", 123), new Employee(2,'Lee',"HR", 125), new Employee(3, 'Cris', 'SD', 250),
  // new Employee(3, 'Cris', 'SD', 250), new Employee(3, 'Cris', 'SD', 250), new Employee(3, 'Cris', 'SD', 250), new Employee(3, 'Cris', 'SD', 250),
  // new Employee(3, 'Cris', 'SD', 250), new Employee(3, 'Cris', 'SD', 250), new Employee(3, 'Cris', 'SD', 250), new Employee(3, 'Cris', 'SD', 250),
  // new Employee(3, 'Cris', 'SD', 250), new Employee(3, 'Cris', 'SD', 250)]; 

  const dispatch = useDispatch();

  const [isInitialState, setInitialState] = useState(true);

  if (isInitialState) {
    setInitialState(false);
    dispatch(getEmployeeData());
  }

  return (
    <div className="App">
        <NavBar></NavBar>
        <br></br>
        <Cards></Cards>
        <br></br>
        <Alert/>
        <Footer/>
    </div>
  );
}

export default App;
