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


const EditButton: React.FC = () => {

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

  const [department, setDepartment] = React.useState('SD');

  const handleSetDepartment = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDepartment(event.target.value);
  };


  const [wantEdit, setWantEdit] = React.useState(false);

  const handleClickEdit = () => {
    setWantEdit(true);
  };

  const handleCancelEdit = () => {
    setWantEdit(false);
  };

  const handleConfirmEdit = () => {

  };

  return (
    <>   
    <IconButton aria-label="edit" onClick = {handleClickEdit}>
    <EditIcon />
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
          />
        </Grid>
          <Grid item xs = {12} md = {12} lg = {12}>
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
        </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelEdit}>Cancel</Button>
          <Button onClick={handleConfirmEdit}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </> 
  );
}

export default EditButton;
