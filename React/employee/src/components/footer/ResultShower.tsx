import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';



const ResultShower : React.FC<{numOfEmployees: number, pageNum:number}> = (props) => {
    const startItemID = props.pageNum * 10 - 9;
    const endItemID = props.pageNum * 10 > props.numOfEmployees ? props.numOfEmployees : props.pageNum * 10;

    return (
        <Grid item spacing = {2} columns = {16}>
            <Typography variant = "h6" component = "div" align = "left"> Showing {startItemID}-{endItemID} out of {props.numOfEmployees} entires</Typography>
        </Grid>
    )
}


export default ResultShower;