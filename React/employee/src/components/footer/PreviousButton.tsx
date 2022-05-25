import React from 'react';
import Button from '@mui/material/Button';
import { employeeActions } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';


const PreviousButton : React.FC<{currentPage: number, pageNumUpdater: any, numOfEmployees: number}> = (props) => {

    const dispatch = useDispatch();

    const prevHandler = ():void => {
        dispatch(employeeActions.prevPage());
    };

    const pageNum = useSelector((state : any) => state.employee.pageNum);

    if (pageNum === 1) {
        return  (
            <Button disabled color="inherit">Preivous</Button>
        )
    }
    return (
        <Button onClick = {prevHandler} color="inherit">Preivous</Button>
    )
}


export default PreviousButton;