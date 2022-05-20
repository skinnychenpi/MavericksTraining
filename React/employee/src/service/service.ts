import axios from 'axios';
import Employee from '../models/Employee'

const config = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  };

const serverURL = 'http://localhost:5000/employee';

const getData = async() : Promise<Employee[]> => {
    let res = await axios.get(serverURL, config);
    let serverEmployees : Employee[] = res.data.Employees;
    return await serverEmployees;
}

const deleteData = async (empID : number): Promise<string> => {
    let res = await axios.delete(serverURL + "/" + String(empID), {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    return await res.data.message;
};

const modifyData = async (employee : Employee) : Promise<string> => {
    let res = await axios.put(serverURL + "/" + employee.id, {
            name :employee.name,
            department : employee.department,
            salary : employee.salary
        }
    );
    return await res.data.message;
}

const addData = async (employee : Employee) : Promise<Employee> => {
    let res = await axios.post(serverURL, employee);
    return await res.data.createdEmployee;
}

export {getData, deleteData, modifyData, addData};