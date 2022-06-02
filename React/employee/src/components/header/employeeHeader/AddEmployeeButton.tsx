import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import Employee from "../../../models/Employee";
import {addData} from '../../../service/service';
import {departments} from "../../../models/Department";
import {useDispatch} from 'react-redux';
import {getEmployeeData} from '../../../store/store';
import { alertActions } from '../../../store/store';


const AddEmployeeButton: React.FC = () => {
  const dispatch = useDispatch();

  const GreenButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText("#34933B"),
    backgroundColor: "#34933B",
    "&:hover": {
      backgroundColor: "#34933B",
    },
  }));

  const IDErrorText = "The ID must be a positive number.";

  const nameErrorText = "The name should be of length 2 - 30.";

  const salaryErrorText = "The salary must be a positive number.";

  const [department, setDepartment] = React.useState("SD");

  const handleSetDepartment = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDepartment(event.target.value);
  };

  const [name, setName] = React.useState("");

  const [nameError, setNameError] = React.useState(true);
  const [nameHelperText, setNameHelperText] = React.useState(nameErrorText);

  const handleNameChange = (name: string): void => {
    setName(name);
    if (!nameValidator(name)) {
      setNameError(true);
      setDisableAdd(true);
    } else {
      setNameError(false);
      setNameHelperText("");
      if (!salaryError && !IDError) setDisableAdd(false);
    }
  };

  const nameValidator = (name: string): Boolean => {
    if (name.length < 2 || name.length > 30) {
      setNameHelperText(nameErrorText);
      return false;
    }
    return true;
  };

  const [salary, setSalary] = React.useState("");

  const [salaryError, setSalaryError] = React.useState(true);
  const [salaryHelperText, setSalaryHelperText] = React.useState(IDErrorText);

  const handleSalaryChange = (salary: string): void => {
    setSalary(salary);
    if (!salaryValidator(salary)) {
      setSalaryError(true);
      setDisableAdd(true);
    } else {
      setSalaryError(false);
      setSalaryHelperText("");
      if (!nameError && !IDError) setDisableAdd(false);
    }
  };

  const salaryValidator = (salary: string): Boolean => {
    let salaryNum = Number(salary);
    if (salary.length === 0 || Number.isNaN(salaryNum) || salaryNum < 0) {
      setSalaryHelperText(salaryErrorText);
      return false;
    }
    return true;
  };

  const [ID, setID] = React.useState("");

  const [IDError, setIDError] = React.useState(true);
  const [IDHelperText, setIDHelperText] = React.useState(IDErrorText);

  const handleIDChange = (ID: string): void => {
    setID(ID);
    if (!IDValidator(ID)) {
      setIDError(true);
      setDisableAdd(true);
    } else {
      setIDError(false);
      setIDHelperText("");
      if (!salaryError && !nameError) setDisableAdd(false);
    }
  };

  const IDValidator = (ID: string): Boolean => {
    let IDNum = Number(ID);
    if (ID.length === 0 || Number.isNaN(IDNum) || IDNum < 0) {
      setIDHelperText(IDErrorText);
      return false;
    }
    return true;
  };

  const [disableAdd, setDisableAdd] = React.useState(true);

  const [wantAdd, setWantAdd] = React.useState(false);

  const handleClickAdd = () => {
    setWantAdd(true);
  };

  const handleCancelAdd = () => {
    setWantAdd(false);
  };

  const handleConfirmAdd = () => {
    setWantAdd(false);
    
    // Restore to default
    setName("");
    setDepartment("SD");
    setSalary("");
    setID("");
    setNameError(true);
    setSalaryError(true);
    setIDError(true);
    setNameHelperText(nameErrorText);
    setSalaryHelperText(salaryErrorText);
    setIDHelperText(IDErrorText);

    let EmpToAdd = new Employee(Number(ID), name, department, Number(salary));
    addData(EmpToAdd)
    .then(() => {
      dispatch(alertActions.turnOnAddSuccess());
      dispatch(getEmployeeData())
    })
    .catch ((err) => {
      dispatch(alertActions.turnOnAddFail());
      console.log(err);
    })
  };

  return (
    <>
      <IconButton aria-label="addEmployee" onClick={handleClickAdd}>
        <GreenButton
          variant="contained"
          color="inherit"
          startIcon={<AddIcon />}
        >
          Add Employee
        </GreenButton>
      </IconButton>
      <Dialog open={wantAdd} onClose={handleCancelAdd}>
        <DialogTitle>Add</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add the employee's information, please input below.
          </DialogContentText>
          <Grid container spacing={2} justifyContent="space-around">
            <Grid item xs={12} md={5} lg={5}>
              <TextField
                autoFocus
                margin="dense"
                id="id"
                label="ID"
                fullWidth
                variant="standard"
                error={IDError}
                onChange={(e) => handleIDChange(e.target.value)}
                helperText={IDHelperText}
              />
            </Grid>
            <Grid item xs={12} md={5} lg={5}>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Name"
                type="email"
                fullWidth
                variant="standard"
                error={nameError}
                onChange={(e) => handleNameChange(e.target.value)}
                helperText={nameHelperText}
              />
            </Grid>
            <Grid item xs={12} md={5} lg={5}>
              <TextField
                id="select-department"
                select
                label="Department"
                value={department}
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
            <Grid item xs={12} md={5} lg={5}>
              <TextField
                autoFocus
                margin="dense"
                id="salary"
                label="Salary"
                type="email"
                fullWidth
                variant="standard"
                error={salaryError}
                onChange={(e) => handleSalaryChange(e.target.value)}
                helperText={salaryHelperText}
              />
            </Grid>
          </Grid>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleCancelAdd}>Cancel</Button>
          <Button onClick={handleConfirmAdd} disabled={disableAdd}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddEmployeeButton;
