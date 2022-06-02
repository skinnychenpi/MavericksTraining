import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AddEmployeeButton from './AddEmployeeButton';
import Button from "@mui/material/Button";
import { useDispatch } from 'react-redux';
import {authActions} from '../../../store/store';

const ButtonAppBar: React.FC = (props) => {

  const dispatch = useDispatch();

  const handleClickLogout = () => {
    dispatch(authActions.logout());
  }


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx = {{background : "#365271"}}>
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1, color: '#FFFFFF'}} align="left">
            Employees
          </Typography>
          <AddEmployeeButton/>
          <Button color="inherit" onClick = {handleClickLogout}>LOGOUT</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default ButtonAppBar;
