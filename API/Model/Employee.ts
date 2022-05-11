export type Dept = "MKT" | "HR" | "SD";
export class Employee {
    public name: String
    public ID: Number
    public salary: Number
    public department: Dept

    constructor(ID, name, salary, department : Dept) {
        this.ID = ID
        this.name = name
        this.salary = salary
        this.department = department
    }
}