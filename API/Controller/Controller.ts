import {Employee, Dept} from '../Model/Employee'

// export class Controller {
//     public employees : Employee[];
//     constructor() {
//         this.employees = []
//     }
//     public hello(req, res) {
//         return res.json({
//             message: 'Hello World!'
//           })
//     }

//     public showAllEmployee(req, res) {
//         var name = req.body.name;
//         var id = req.body.id;
//         var salary = req.body.salary;
//         try {
//             var department : Dept = req.body.department;
//         } catch (err) {
//             res.status(400).send({error: "Bad input of department."})
//         }

//         var newEmployee = new Employee(id, name, salary, department);
//         this.employees.push(newEmployee);
//         return res.json(this.jsonifyEmployee(newEmployee))
//     }





//     private jsonifyEmployee(emp : Employee) {
//         let json = {id : emp.ID, name: emp.name, salary: emp.salary, department: emp.department}
//         return json;
//     }

// }



export function hello(req, res) {
    res.json({
        message: 'Hello World!'
      })
}

export function createEmployee(req, res) {
    var name = req.body.name;
    var id = req.body.id;
    var salary = req.body.salary;
    try {
        var department : Dept = req.body.department;
    } catch (err) {
        res.status(400).send({error: "Bad input of department."})
    }

    var newEmployee = new Employee(id, name, salary, department);
    this.employees.push(newEmployee);
    res.json(this.jsonifyEmployee(newEmployee))
}