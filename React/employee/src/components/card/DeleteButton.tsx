import React from 'react';
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const DeleteButton: React.FC = () => {

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
    <> 
    <IconButton aria-label="delete" onClick = {handleClickDelete}>
    <DeleteIcon />
    </IconButton>
    <Dialog
    open={wantDeleted}
    onClose={handleCancelDelete}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
    >
    <DialogTitle id="alert-dialog-title">
        {"Are you sure?"}
    </DialogTitle>
    <DialogContent>
        <DialogContentText id="alert-dialog-description">
        You'll lose the employee data. Data is not able to be recovered.
        </DialogContentText>
    </DialogContent>
    <DialogActions>
        <Button onClick={handleCancelDelete}>Cancel</Button>
        
        {/* Should be replaced by new handler function. */}
        <Button onClick={handleConfirmDelete} autoFocus>
        Delete
        </Button>
    </DialogActions>
    </Dialog>
    </> 
  );
}

export default DeleteButton;
