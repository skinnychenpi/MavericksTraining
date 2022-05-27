import {createSlice, configureStore} from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk'
import {getData} from '../service/service'

const initialState = {employees: [], pageNum : 1}

const employeeSlice = createSlice({
    name: 'employee',
    initialState: initialState,
    reducers: {
        nextPage(state) {
            state.pageNum++;
        },
        prevPage(state) {
            if (state.pageNum > 1) state.pageNum--;
        },
        setEmployees(state, actions) {
            state.employees = actions.payload;
        }
    }
})

const alertSlice = createSlice({
    name:'alert',
    initialState: {
    openAddSuccessAlert: false, 
    openAddFailAlert: false, 
    openEditSuccessAlert: false,
    openEditFailAlert : false,
    openDeleteSuccessAlert: false,
    openDeleteFailAlert: false
},
    reducers: {
        turnOnAddSuccess(state) {
            state.openAddSuccessAlert = true;
        },
        turnOffAddSuccess(state) {
            state.openAddSuccessAlert = false;
        },
        turnOnAddFail(state) {
            state.openAddFailAlert = true;
        },
        turnOffAddFail(state) {
            state.openAddFailAlert = false;
        },
        turnOnEditSuccess(state) {
            state.openEditSuccessAlert = true;
        },
        turnOffEditSuccess(state) {
            state.openEditSuccessAlert = false;
        },
        turnOnEditFail(state) {
            state.openEditFailAlert = true;
        },
        turnOffEditFail(state) {
            state.openEditFailAlert = false;
        },
        turnOnDeleteSuccess(state) {
            state.openDeleteSuccessAlert = true;
        },
        turnOffDeleteSuccess(state) {
            state.openDeleteSuccessAlert = false;
        },
        turnOnDeleteFail(state) {
            state.openDeleteFailAlert = true;
        },
        turnOffDeleteFail(state) {
            state.openDeleteFailAlert = false;
        }
    }
})



const store = configureStore({
    reducer:{employee: employeeSlice.reducer, alert:alertSlice.reducer},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunkMiddleware),
});

export const employeeActions = employeeSlice.actions;


export const getEmployeeData = () : any => {
    return async (dispatch : any) => {
      getData()
      .then((data) => {
        dispatch(employeeActions.setEmployees(data))
      })
      .catch((err) => {console.log(err)});
    }
  };

export const alertActions = alertSlice.actions;

export default store;