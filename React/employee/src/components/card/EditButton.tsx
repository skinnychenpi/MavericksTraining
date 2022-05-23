import React from 'react';
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import {getData, modifyData} from '../../service/service'
import Employee from "../../models/Employee";
import {departments} from "../../models/Department"

const EditButton: React.FC<{employeeUpdater : any, employee: Employee}> = (props) => {

  const [department, setDepartment] = React.useState(props.employee.department.trimEnd());

  const [name, setName] = React.useState(props.employee.name);

  const [salary, setSalary] = React.useState("" + props.employee.salary);



  const handleSetDepartment = (event: React.ChangeEvent<HTMLInputElement>) => {
      setDepartment(event.target.value);
      if (!nameError && !salaryError) setDisableEdit(false);
  };

  const [disableEdit, setDisableEdit] = React.useState(true);

  const [wantEdit, setWantEdit] = React.useState(false);

  const handleClickEdit = () => {
    setWantEdit(true);
    setSalary("" + props.employee.salary)
    setName(props.employee.name)
    setDepartment(props.employee.department)
  };

  const handleCancelEdit = () => {
    setWantEdit(false);
  };

  const [nameError, setNameError] = React.useState(false);
  const [nameHelperText, setNameHelperText] = React.useState("");

  const handleNameChange = (name : string) : void => {
    setName(name);
    if (! nameValidator(name)) {
      setNameError(true);
      setDisableEdit(true);
    }
    else {
      setNameError(false);
      setNameHelperText("");
      if (!salaryError) setDisableEdit(false);
    }
  }

  const nameValidator = (name : string) : Boolean => {
    if (name.length < 2 || name.length > 30) {
      setNameHelperText("The name should be of length 2 - 30.");
      return false;
    }
    return true;
  }

  const[salaryError, setSalaryError] = React.useState(false);
  const[salaryHelperText, setSalaryHelperText] = React.useState("");

  const handleSalaryChange = (salary : string) : void => {
    setSalary(salary);
    if (! salaryValidator(salary)) {
      setSalaryError(true);
      setDisableEdit(true);
    }
    else {
      setSalaryError(false);
      setSalaryHelperText("");
      if (!nameError) setDisableEdit(false);
    }
  }

  const salaryValidator = (salary : string) : Boolean => {
    let salaryNum = Number(salary);
    if (Number.isNaN(salaryNum) || salaryNum < 0) {
      setSalaryHelperText("The salary must be a positive number.");
      return false;
    }
    return true;
  }

  const handleConfirmEdit = () => {
    setWantEdit(false);
    let employee : Employee = new Employee(props.employee.id, name.trimEnd(), department.trimEnd(), Number(salary));
    modifyData(employee)
    .then(() => {getData().then((data) => props.employeeUpdater(data)).catch((err) => {console.log(err)})})
    .catch((err) => {console.log(err)});

  };

  return (
    <>   
    <IconButton aria-label="edit" onClick = {handleClickEdit}>
    <EditIcon sx={{ color: "#FFC32E"}}/>
    </IconButton>
    <Dialog open={wantEdit} onClose={handleCancelEdit}>
        <DialogTitle>Edit</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To modify the employee's information, please input the information below.
          </DialogContentText>
          <Grid container spacing = {3} justifyContent = 'space-between'>
          <Grid item xs = {12} md = {6} lg = {6}>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="email"
            fullWidth
            variant="standard"
            error = {nameError}
            onChange = {e => handleNameChange(e.target.value)}
            helperText = {nameHelperText}
            defaultValue = {props.employee.name.trimEnd()}
          />
          </Grid>
          <Grid item xs = {12} md = {6} lg = {6}>
          <TextField
            autoFocus
            margin="dense"
            id="salary"
            label="Salary"
            type="email"
            fullWidth
            variant="standard"
            error = {salaryError}
            onChange = {e => handleSalaryChange(e.target.value)}
            helperText = {salaryHelperText}
            defaultValue = {props.employee.salary}
          />
        </Grid>
          <Grid item xs = {12} md = {12} lg = {12}>
          <TextField
          id="select-department"
          select
          label="Department"
          defaultValue={props.employee.department.trimEnd()}
          onChange={handleSetDepartment}
          helperText="Please select department"
        >
          {departments.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </Grid>
        </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelEdit}>Cancel</Button>
          <Button onClick={handleConfirmEdit} disabled = {disableEdit}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </> 
  );
}

export default EditButton;
