import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import AddEmployeeButton from './AddEmployeeButton';

export default function ButtonAppBar() {

  const GreenButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText("#34933B"),
    backgroundColor: "#34933B",
    '&:hover': {
      backgroundColor: "#34933B",
    },
  }));


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }} align="left">
            Employees
          </Typography>
          {/* <GreenButton variant = "contained" color="inherit" startIcon={<AddIcon />}>Add Employee</GreenButton> */}
          <AddEmployeeButton/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
