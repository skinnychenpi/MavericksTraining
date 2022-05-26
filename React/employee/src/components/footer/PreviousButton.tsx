import React from 'react';
import Button from '@mui/material/Button';
import { employeeActions } from '../../store/store';
import { useDispatch } from 'react-redux';


const PreviousButton : React.FC<{currentPage: number, numOfEmployees: number}> = (props) => {

    const dispatch = useDispatch();

    const prevHandler = ():void => {
        dispatch(employeeActions.prevPage());
    };

    if (props.currentPage === 1) {
        return  (
            <Button disabled color="inherit">Preivous</Button>
        )
    }
    return (
        <Button onClick = {prevHandler} color="inherit">Preivous</Button>
    )
}


export default PreviousButton;