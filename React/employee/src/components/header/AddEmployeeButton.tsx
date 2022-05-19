import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';

const AddEmployeeButton: React.FC = () => {

    const departments = [
        {
          value: 'HR',
          label: 'HR',
        },
        {
          value: 'SD',
          label: 'Software Development',
        },
        {
          value: 'MKT',
          label: 'Marketing',
        }
      ];

    const GreenButton = styled(Button)<ButtonProps>(({ theme }) => ({
        color: theme.palette.getContrastText("#34933B"),
        backgroundColor: "#34933B",
        '&:hover': {
            backgroundColor: "#34933B",
        },
        }));

    const [department, setDepartment] = React.useState('SD');

    const handleSetDepartment = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDepartment(event.target.value);
    };

  const [wantAdd, setWantAdd] = React.useState(false);

  const handleClickAdd = () => {
    setWantAdd(true);
  };

  const handleCancelAdd = () => {
    setWantAdd(false);
  };

  const handleConfirmAdd = () => {

  };

  return (
    <>   
    <IconButton aria-label="addEmployee" onClick = {handleClickAdd}>
    <GreenButton variant = "contained" color="inherit" startIcon={<AddIcon />}>Add Employee</GreenButton>
    </IconButton>
    <Dialog open={wantAdd} onClose={handleCancelAdd}>
        <DialogTitle>Add</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add the employee's information, please input below.
          </DialogContentText>
          <Grid container spacing = {2} justifyContent = 'space-around'>
          <Grid item xs = {12} md = {5} lg = {5}>
          <TextField
            autoFocus
            margin="dense"
            id="id"
            label="ID"
            fullWidth
            variant="standard"
          />
          </Grid>
          <Grid item xs = {12} md = {5} lg = {5}>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="email"
            fullWidth
            variant="standard"
          />
          </Grid>
          <Grid item xs = {12} md = {5} lg = {5}>
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
        <Grid item xs = {12} md = {5} lg = {5}>
          <TextField
            autoFocus
            margin="dense"
            id="salary"
            label="Salary"
            type="email"
            fullWidth
            variant="standard"
          />
        </Grid>
        </Grid>
        </DialogContent>
        
        <DialogActions>
          <Button onClick={handleCancelAdd}>Cancel</Button>
          <Button onClick={handleConfirmAdd}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </> 
  );
}

export default AddEmployeeButton;
