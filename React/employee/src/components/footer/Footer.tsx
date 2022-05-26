import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import ResultShower from './ResultShower';
import PageNavigator from './PageNavigator';
import { useSelector } from 'react-redux';




const Footer : React.FC = () => {
    const pageNum = useSelector((state : any) => state.employee.pageNum);
    const numOfEmployees = useSelector((state : any) => state.employee.employees.length);
    return (
        <Container maxWidth = "lg">
        <Grid container spacing = {6} columns = {12} wrap = 'nowrap' alignItems = "center" justifyContent="space-between">
        <Grid item>
        <ResultShower numOfEmployees={numOfEmployees} pageNum = {pageNum}/>
        </Grid>
        <Grid item xs="auto">
        <PageNavigator numOfEmployees={numOfEmployees} pageNum = {pageNum}/>
        </Grid> 
        </Grid>
        </Container>
    )
}


export default Footer;