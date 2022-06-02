import axios from 'axios';
import Employee from '../models/Employee'
import {RegisterDTO, RegisterResponseDTO, LoginDTO, LoginResponseDTO} from '../models/User'

interface Header {
    [key : string] : any
}

let header : Header = {
    'Content-Type': 'application/json',
};

const config = {
    method: 'GET',
    headers: header
  };

const serverEmployeeURL = 'http://localhost:5000/employee';

const serverAuthURL = "http://localhost:5000/auth";

const getData = async() : Promise<Employee[]> => {
    if (localStorage.getItem('token') === null) {
        throw Error("The user is not logged in! No available token.");
    } else {
        config.headers.Authorization = localStorage.getItem('token');
        let res = await axios.get(serverEmployeeURL, config);
        let serverEmployees : Employee[] = res.data.Employees;
        return serverEmployees;
    }
}

const deleteData = async (empID : number): Promise<string> => {
    let res = await axios.delete(serverEmployeeURL + "/" + String(empID), config);
    return await res.data.message;
};

const modifyData = async (employee : Employee) : Promise<string> => {
    let res = await axios.put(serverEmployeeURL + "/" + employee.id, {
            name :employee.name,
            department : employee.department,
            salary : employee.salary
        }, config
    );
    return await res.data.message;
}

const addData = async (employee : Employee) : Promise<Employee> => {
    let res = await axios.post(serverEmployeeURL, employee, config);
    return res.data.createdEmployee;
}

const register = async (newUser : RegisterDTO) : Promise<RegisterResponseDTO> => {
    let res = await axios.post(serverAuthURL + '/register', newUser);
    return res.data;
}

const login = async (user : LoginDTO) : Promise<LoginResponseDTO> => {
    let res = await axios.post(serverAuthURL + '/login', user);
    return res.data;
}



export {getData, deleteData, modifyData, addData, register, login};