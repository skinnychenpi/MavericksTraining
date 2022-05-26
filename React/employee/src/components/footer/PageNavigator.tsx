import React from 'react';
import Grid from '@mui/material/Grid';
import PreviousButton from './PreviousButton';
import PageNum from './PageNum';
import NextButton from './NextButton';



const PageNavigator : React.FC<{numOfEmployees: number, pageNum: number}> = (props) => {
    
    return (
        <Grid item spacing = {2} columns = {16}>
            <PreviousButton currentPage={props.pageNum} numOfEmployees = {props.numOfEmployees}/>
            <PageNum currentPage={props.pageNum}/>
            <NextButton currentPage={props.pageNum} numOfEmployees = {props.numOfEmployees}/>
        </Grid>
    )
}


export default PageNavigator;