import {createSlice, configureStore} from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk'
import { LoginDTO, RegisterDTO } from '../models/User'
import {getData, login, register} from '../service/service'

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

export const getEmployeeData = () : any => {
    return async (dispatch : any) => {
      try {
        let data = await getData();
        dispatch(employeeActions.setEmployees(data))
        // If we can successfully download the data, we can set the status as logged in.
        dispatch(authActions.login());
        dispatch(authActions.setToken(localStorage.getItem('token')));
      } catch (err : any) {
        if (err.response.data.tokenError) {
            dispatch(authActions.logout());
        }
        console.log(err);
      };
    }
  };

export const employeeActions = employeeSlice.actions;




const alertSlice = createSlice({
    name:'alert',
    initialState: {
    openAddSuccessAlert: false, 
    openAddFailAlert: false, 
    openEditSuccessAlert: false,
    openEditFailAlert : false,
    openDeleteSuccessAlert: false,
    openDeleteFailAlert: false,
    openLoginFailAlert: false,
    openRegisterFailAlert : false
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
        },

        // Authentication
        turnOnLoginFail(state) {
            state.openLoginFailAlert = true;
        },
        turnOffLoginFail(state) {
            state.openLoginFailAlert = false;
        },
        turnOnRegisterFail(state) {
            state.openRegisterFailAlert = true;
        },
        turnOffRegisterFail(state) {
            state.openRegisterFailAlert = false;
        }
    }
})


export const alertActions = alertSlice.actions;



const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn : false,
        token : ""
    },
    reducers: {
        login(state) {
            state.isLoggedIn = true;
        },
        logout(state) {
            state.isLoggedIn = false;
            state.token = "";
            localStorage.removeItem('token');
        },
        setToken(state, actions) {
            state.token = actions.payload;
            localStorage.setItem('token' , actions.payload);
        }
    }
})

export const userLogin = (user : LoginDTO) : any => {
    return async (dispatch : any) => {
        try {
            let data = await login(user);
            dispatch(authActions.setToken(data.token));
            dispatch(authActions.login());
        } catch (err) {
            dispatch(alertActions.turnOnLoginFail());
          }
        }
    };

export const userRegister = (user : RegisterDTO) : any => {
    return async (dispatch : any) => {
        try {
            let data = await register(user);
            dispatch(authActions.setToken(data.token));
            dispatch(authActions.login());
        } catch (err) {
            dispatch(alertActions.turnOnRegisterFail());
        }
    }
}

export const authActions = authSlice.actions;


const store = configureStore({
    reducer:{employee: employeeSlice.reducer, alert:alertSlice.reducer, auth: authSlice.reducer},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunkMiddleware),
});
export default store;