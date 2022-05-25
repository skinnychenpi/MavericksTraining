import React from 'react';
import Button from '@mui/material/Button';
import {useSelector} from 'react-redux';


const PageNum : React.FC<{currentPage: number}> = (props) => {

    const pageNum = useSelector((state : any) => state.employee.pageNum);

    return (
        <Button color="inherit">{pageNum}</Button>
    )
}


export default PageNum;