import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useDispatch, useSelector } from 'react-redux';

import { userRegister } from '../../../store/store';
import { RegisterDTO } from '../../../models/User';

import { Redirect } from 'react-router-dom';

const SignUp : React.FC = () => {
    
    const dispatch = useDispatch();

    const isLoggedIn = useSelector((state : any) => state.auth.isLoggedIn);

    interface State {
        userName: string;
        password: string;
        email: string;
        showPassword: boolean;
    };


    const [values, setValues] = React.useState<State>({
        userName: '',
        email: '',
        password: '',
        showPassword: false,
      });

    const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
        ...values,
        showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleClickSignUp = () => {
        const user : RegisterDTO = {userName: values.userName, email : values.email, password : values.password};
        dispatch(userRegister(user));
    }


    return (
        <>
        {isLoggedIn ? <Redirect exact to = "/" /> : <React.Fragment/>}
        <Container maxWidth = "sm">
        <Grid container spacing = {3} columns = {12} direction="column" justifyContent="center" alignItems="stretch">
        <Grid container columns = {12} justifyContent="center" alignItems="stretch" direction = "column">
        <Grid item xs = {12} md = {12} lg = {12}>
            <br/><br/>
            <Typography variant = "h4" align = "center">SIGN UP</Typography>
        </Grid>
        </Grid>
       
        <br/>
       
        <Grid container spacing = {0} columns = {12} justifyContent="center" alignItems="stretch" direction = "column">
        <Grid item xs = {12} md = {12} lg = {12}>
            <Typography variant = "subtitle1" align = "left">EMAIL</Typography>
        </Grid>
        <Grid item xs = {12} md = {12} lg = {12}>
            <TextField
                autoFocus
                margin="dense"
                id="id"
                fullWidth
                variant="outlined"
                onChange={handleChange('email')}
            />
        </Grid>
        </Grid>
        
        <Grid container spacing = {0} columns = {12} justifyContent="center" alignItems="stretch" direction = "column">
        <Grid item xs = {12} md = {12} lg = {12}>
            <Typography variant = "subtitle1" align = "left">USER NAME</Typography>
        </Grid>
        <Grid item xs = {12} md = {12} lg = {12}>
            <TextField
                autoFocus
                margin="dense"
                id="id"
                fullWidth
                variant="outlined"
                onChange={handleChange('userName')}
            />
        </Grid>
        </Grid>

        <Grid container spacing = {0} columns = {12} justifyContent="center" alignItems="stretch" direction = "column">
        <Grid item xs = {12} md = {12} lg = {12}>
            <Typography variant = "subtitle1" align = "left">PASSWORD</Typography>
        </Grid>
        <Grid item xs = {12} md = {12} lg = {12}>
            <FormControl fullWidth variant="outlined">
            {/* <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel> */}
            <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                endAdornment={
                <InputAdornment position="end">
                    <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </InputAdornment>
                }
            />
            </FormControl>
        </Grid>
        </Grid>

        <Grid container columns = {12} justifyContent="center" alignItems="stretch" direction = "column">
        <Grid item xs = {12} md = {12} lg = {12}>
            <br></br>
            <Button variant="contained" endIcon={<SendIcon />} onClick = {handleClickSignUp}>
                SIGN UP
            </Button>
        </Grid>
        </Grid>

        </Grid>
        </Container>
        </>
    );
};
export default SignUp;