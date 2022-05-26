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



const store = configureStore({
    reducer:{employee: employeeSlice.reducer},
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

export default store;