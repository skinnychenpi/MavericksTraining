import React, {useState} from 'react';
import Employee from '../../models/Employee'
import EmployeeCard from '../card/EmployeeCard';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';





const Cards : React.FC<{employees : Employee[], pageNum : number}> = (props) => {

    return (
        <Container maxWidth = "lg">
        <Grid container spacing = {2} columns = {12}>
        {props.employees.slice(props.pageNum * 10 - 10, props.pageNum * 10).map((employee) => 
            <Grid item xs = {12} md = {6} lg = {6}>
            <EmployeeCard item = {employee}/>
            </Grid>
            )}
        </Grid>
        </Container>
    )
}


export default Cards;