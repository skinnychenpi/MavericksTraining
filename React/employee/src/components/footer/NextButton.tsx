import React from 'react';
import Button from '@mui/material/Button';



const NextButton : React.FC<{currentPage: number, pageNumUpdater: any, numOfEmployees: number}> = (props) => {
    const increasePageNum = ():void => {
        props.pageNumUpdater(props.currentPage + 1);
    };
    if (props.currentPage * 10 + 1 > props.numOfEmployees) {
        return (
            <Button disabled color="inherit">Next</Button>
        )
    }
    return (
        <Button onClick = {increasePageNum} color="inherit">Next</Button>
    )
}


export default NextButton;