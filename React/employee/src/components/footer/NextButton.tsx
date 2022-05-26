import React from 'react';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { employeeActions } from '../../store/store';


const NextButton : React.FC<{currentPage: number, numOfEmployees: number}> = (props) => {

    const dispatch = useDispatch();

    const nextHandler = ():void => {
        dispatch(employeeActions.nextPage());
    };
    
    if (props.currentPage * 10 + 1 > props.numOfEmployees) {
        return (
            <Button disabled color="inherit">Next</Button>
        )
    }
    return (
        <Button onClick = {nextHandler} color="inherit">Next</Button>
    )
}


export default NextButton;