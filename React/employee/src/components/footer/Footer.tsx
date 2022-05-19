import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import ResultShower from './ResultShower';
import PageNavigator from './PageNavigator';





const Footer : React.FC<{numOfEmployees: number, pageNum:number, pageNumUpdater: any}> = (props) => {
    return (
        <Container maxWidth = "lg">
        <Grid container spacing = {6} columns = {12} wrap = 'nowrap' alignItems = "center" justifyContent="space-between">
        <Grid item>
        <ResultShower numOfEmployees={props.numOfEmployees} pageNum = {props.pageNum}/>
        </Grid>
        <Grid item xs="auto">
        <PageNavigator numOfEmployees={props.numOfEmployees} pageNum = {props.pageNum} pageNumUpdater = {props.pageNumUpdater}/>
        </Grid> 
        </Grid>
        </Container>
    )
}


export default Footer;