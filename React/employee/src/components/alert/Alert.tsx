import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import {alertActions} from '../../store/store';
import React from 'react';
import {useDispatch , useSelector} from 'react-redux';

const Alert : React.FC = () => {
    const dispatch = useDispatch();

    const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
        props,
        ref,
      ) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
      });
      
    const successAddAlertOpen = useSelector((state : any) => state.alert.openAddSuccessAlert);
  
    const handleAddSuccessAlertClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(alertActions.turnOffAddSuccess());
  };

  const failAddAlertOpen = useSelector((state : any) => state.alert.openAddFailAlert);
  const handleAddFailAlertClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(alertActions.turnOffAddFail());
  };

  const successEditAlertOpen = useSelector((state : any) => state.alert.openEditSuccessAlert);
  const handleEditSuccessAlertClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(alertActions.turnOffEditSuccess());
  };

  const failEditAlertOpen = useSelector((state : any) => state.alert.openEditFailAlert);
  const handleEditFailAlertClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(alertActions.turnOffEditFail());
  };

  const successDeleteAlertOpen = useSelector((state : any) => state.alert.openDeleteSuccessAlert);
  const handleDeleteSuccessAlertClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(alertActions.turnOffDeleteSuccess());
  };

  const failDeleteAlertOpen = useSelector((state : any) => state.alert.openDeleteFailAlert);
  const handleDeleteFailAlertClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(alertActions.turnOffDeleteFail());
  };

  //Authentication

  const failLoginAlertOpen = useSelector((state : any) => state.alert.openLoginFailAlert);
  const handleLoginFailAlertClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(alertActions.turnOffLoginFail());
  };

  const failRegisterAlertOpen = useSelector((state : any) => state.alert.openRegisterFailAlert);
  const handleRegisterFailAlertClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(alertActions.turnOffRegisterFail());
  };

    return (
        <React.Fragment>
        <Snackbar open={successAddAlertOpen} autoHideDuration={6000} onClose={handleAddSuccessAlertClose}>
          <Alert onClose={handleAddSuccessAlertClose} severity="success" sx={{ width: '100%' }}>
            Successfully add the employee!
          </Alert>
        </Snackbar>
        <Snackbar open={failAddAlertOpen} autoHideDuration={6000} onClose={handleAddFailAlertClose}>
          <Alert onClose={handleAddFailAlertClose} severity="error" sx={{ width: '100%' }}>
            Errors at adding the employee!
          </Alert>
        </Snackbar>
        <Snackbar open={successDeleteAlertOpen} autoHideDuration={6000} onClose={handleDeleteSuccessAlertClose}>
          <Alert onClose={handleDeleteSuccessAlertClose} severity="success" sx={{ width: '100%' }}>
            Successfully delete the employee!
          </Alert>
        </Snackbar>
        <Snackbar open={failDeleteAlertOpen} autoHideDuration={6000} onClose={handleDeleteFailAlertClose}>
          <Alert onClose={handleDeleteFailAlertClose} severity="error" sx={{ width: '100%' }}>
            Errors at deleting the employee!
          </Alert>
        </Snackbar>
        <Snackbar open={successEditAlertOpen} autoHideDuration={6000} onClose={handleEditSuccessAlertClose}>
          <Alert onClose={handleEditSuccessAlertClose} severity="success" sx={{ width: '100%' }}>
            Successfully edit the employee!
          </Alert>
        </Snackbar>
        <Snackbar open={failEditAlertOpen} autoHideDuration={6000} onClose={handleEditFailAlertClose}>
          <Alert onClose={handleEditFailAlertClose} severity="error" sx={{ width: '100%' }}>
            Errors at editing the employee!
          </Alert>
        </Snackbar>
        <Snackbar open={failLoginAlertOpen} autoHideDuration={6000} onClose={handleLoginFailAlertClose}>
          <Alert onClose={handleLoginFailAlertClose} severity="error" sx={{ width: '100%' }}>
            Errors occurs when logging in!
          </Alert>
        </Snackbar>
        <Snackbar open={failRegisterAlertOpen} autoHideDuration={6000} onClose={handleRegisterFailAlertClose}>
          <Alert onClose={handleRegisterFailAlertClose} severity="error" sx={{ width: '100%' }}>
            Errors occurs when signing up!
          </Alert>
        </Snackbar>
        </React.Fragment>
    )
}


export default Alert;