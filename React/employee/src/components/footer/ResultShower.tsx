import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {useSelector} from 'react-redux';



const ResultShower : React.FC<{numOfEmployees: number, pageNum:number}> = (props) => {
    const pageNum = useSelector((state : any) => state.employee.pageNum);
    const numOfEmployees = useSelector((state: any) => state.employee.employees.length);

    const startItemID = pageNum * 10 - 9;
    const endItemID = pageNum * 10 > numOfEmployees ? numOfEmployees : pageNum * 10;

    return (
        <Grid item spacing = {2} columns = {16}>
            <Typography variant = "h6" component = "div" align = "left"> Showing {startItemID}-{endItemID} out of {numOfEmployees} entires</Typography>
        </Grid>
    )
}


export default ResultShower;