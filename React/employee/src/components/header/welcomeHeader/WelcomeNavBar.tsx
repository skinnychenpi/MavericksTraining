import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";

const ButtonAppBar: React.FC = (props) => {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx = {{background : "#365271"}}>
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1, color: '#FFFFFF'}} align="left">
            Employees
          </Typography>
          <Button color="inherit" href="/login">Login</Button>
          <Button color="inherit" href="/sign-up">Sign Up</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default ButtonAppBar;