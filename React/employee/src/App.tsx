import React, {useState} from 'react';
import './App.css';
import Employee from './models/Employee';
import Cards from './components/cards/Cards';
import NavBar from './components/header/NavBar'
import Footer from './components/footer/Footer'
function App() {
  const employees : Employee[] = [new Employee(1,'Leo',"HR", 123), new Employee(2,'Lee',"HR", 125), new Employee(3, 'Cris', 'SD', 250),
  new Employee(3, 'Cris', 'SD', 250), new Employee(3, 'Cris', 'SD', 250), new Employee(3, 'Cris', 'SD', 250), new Employee(3, 'Cris', 'SD', 250),
  new Employee(3, 'Cris', 'SD', 250), new Employee(3, 'Cris', 'SD', 250), new Employee(3, 'Cris', 'SD', 250), new Employee(3, 'Cris', 'SD', 250),
  new Employee(3, 'Cris', 'SD', 250), new Employee(3, 'Cris', 'SD', 250)]; 
  const [pageNum, setPageNum] = useState(1);


  return (
    <div className="App">
        <NavBar></NavBar>
        <br></br>
        <Cards employees={employees} pageNum = {pageNum}></Cards>
        <br></br>
        <Footer numOfEmployees={employees.length} pageNum = {pageNum} pageNumUpdater = {setPageNum}/>
    </div>
  );
}

export default App;
