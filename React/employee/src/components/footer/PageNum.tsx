import React from 'react';
import Button from '@mui/material/Button';



const PageNum : React.FC<{currentPage: number}> = (props) => {
    return (
        <Button color="inherit">{props.currentPage}</Button>
    )
}


export default PageNum;