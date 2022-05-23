import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AddEmployeeButton from './AddEmployeeButton';

const ButtonAppBar: React.FC<{employeeUpdater : any}>  = (props) => {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx = {{background : "#365271"}}>
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1, color: '#FFFFFF'}} align="left">
            Employees
          </Typography>
          {/* <GreenButton variant = "contained" color="inherit" startIcon={<AddIcon />}>Add Employee</GreenButton> */}
          <AddEmployeeButton employeeUpdater = {props.employeeUpdater}/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default ButtonAppBar;
