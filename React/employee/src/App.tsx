import React, {useState} from 'react';
import './App.css';
import {useSelector, useDispatch } from 'react-redux';
import Alert from './components/alert/Alert';
import EmployeePage from './pages/EmployeePage';
import { Route, Redirect, Switch } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import {getEmployeeData} from './store/store';
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

  const isLoggedIn : boolean = useSelector((state : any) => state.auth.isLoggedIn);

  return (
    <div className="App">
      <Switch>
      <Redirect exact from="/" to="/index" />
      <Route exact path="/index">
      {isLoggedIn ? <Redirect to="/employee" /> : <WelcomePage />}
      </Route>
      <Route path = '/employee'>
      {isLoggedIn ? <EmployeePage/> : <Redirect to = "/index" />}
      </Route>
      <Route path = '/sign-up'>
        <SignUpPage/>
      </Route>
      <Route path = '/login'>
        <LoginPage/>
      </Route>   
      </Switch>
      <Alert/> 
    </div>
  );
}

export default App;
