import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Employee from '../../models/Employee'
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit'
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteButton from './DeleteButton'
import EditButton from './EditButton';

const EmployeeCard: React.FC<{item: Employee}> = (props) => {

  const [wantDeleted, setWantDeleted] = React.useState(false);

  const handleClickDelete = () => {
    setWantDeleted(true);
  };

  const handleCancelDelete = () => {
    setWantDeleted(false);
  };

  const handleConfirmDelete = () => {

  };

  return (
    <Card sx={{ minWidth: 275 }} variant = "outlined">
      <Grid container wrap = 'nowrap' spacing = {1} alignItems = "center" justifyContent="space-between">
      <Grid item xs = {8} md = {8} lg = {8} direction = 'column'>
      <CardContent>
        <Typography variant="h5" component="div" align = "left">
          {props.item.name}
        </Typography>
        <Typography sx={{ mb: 2 }} component="div" color="text.secondary" align = "left">
          {props.item.department}
        </Typography>
        <Typography sx={{ mb: 2 }} component="div" color="text.secondary" align = "left">
          ${props.item.salary}
        </Typography>
      </CardContent>
      </Grid>
      
      <Grid item xs = {3} md = {3} lg = {3} direction = 'column'>
      <CardActions>
      <EditButton/>        
      <DeleteButton/>
      </CardActions>
      </Grid>
      
      </Grid>
    </Card>
  );
}

export default EmployeeCard;
