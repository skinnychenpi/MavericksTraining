import React from 'react';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { employeeActions } from '../../store/store';


const NextButton : React.FC<{currentPage: number, pageNumUpdater: any, numOfEmployees: number}> = (props) => {

    const dispatch = useDispatch();

    const nextHandler = ():void => {
        dispatch(employeeActions.nextPage());
    };

    const pageNum = useSelector((state : any) => state.employee.pageNum);
    const numOfEmployees = useSelector( (state : any) => state.employee.employees.length);
    
    if (pageNum * 10 + 1 > numOfEmployees) {
        return (
            <Button disabled color="inherit">Next</Button>
        )
    }
    return (
        <Button onClick = {nextHandler} color="inherit">Next</Button>
    )
}


export default NextButton;