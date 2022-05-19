import React from 'react';
import Button from '@mui/material/Button';



const PreviousButton : React.FC<{currentPage: number, pageNumUpdater: any, numOfEmployees: number}> = (props) => {
    const decreasePageNum = ():void => {
        props.pageNumUpdater(props.currentPage - 1);
    };

    if (props.currentPage === 1) {
        return  (
            <Button disabled color="inherit">Preivous</Button>
        )
    }
    return (
        <Button onClick = {decreasePageNum} color="inherit">Preivous</Button>
    )
}


export default PreviousButton;