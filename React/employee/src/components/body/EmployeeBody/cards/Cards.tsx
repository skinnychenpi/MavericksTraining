import React from 'react';
import Employee from '../../../../models/Employee';
import EmployeeCard from '../card/EmployeeCard';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useSelector } from 'react-redux';

const Cards : React.FC = () => {

    const employees : Employee[] = useSelector((state : any) => state.employee.employees);
    const pageNum = useSelector((state : any) => state.employee.pageNum);

    return (
        <Container maxWidth = "lg">
        <Grid container spacing = {2} columns = {12}>
        {employees.slice(pageNum * 10 - 10, pageNum * 10).map((employee) => 
            <Grid item xs = {12} md = {6} lg = {6}>
            <EmployeeCard item = {employee}/>
            </Grid>
            )}
        </Grid>
        </Container>
    )
}


export default Cards;