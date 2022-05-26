import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AddEmployeeButton from './AddEmployeeButton';

const ButtonAppBar: React.FC = (props) => {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx = {{background : "#365271"}}>
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1, color: '#FFFFFF'}} align="left">
            Employees
          </Typography>
          <AddEmployeeButton/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default ButtonAppBar;
