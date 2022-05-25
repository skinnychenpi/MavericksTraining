import {createSlice, configureStore} from '@reduxjs/toolkit'

const initialState = {employees: [{id : 1, name : 'Lee', department: 'HR', salary : 123}, {id : 1, name : 'Lee', department: 'HR', salary : 123}, {id : 1, name : 'Lee', department: 'HR', salary : 123},
{id : 1, name : 'Lee', department: 'HR', salary : 123}, {id : 1, name : 'Lee', department: 'HR', salary : 123}, {id : 1, name : 'Lee', department: 'HR', salary : 123}, {id : 1, name : 'Lee', department: 'HR', salary : 123},
{id : 1, name : 'Lee', department: 'HR', salary : 123}, {id : 1, name : 'Lee', department: 'HR', salary : 123}, {id : 1, name : 'Lee', department: 'HR', salary : 123}, {id : 1, name : 'Lee', department: 'HR', salary : 123},
{id : 1, name : 'Lee', department: 'HR', salary : 123}, {id : 1, name : 'Lee', department: 'HR', salary : 123}], pageNum : 1}

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
    }
})

const store = configureStore({
    reducer:{employee: employeeSlice.reducer}
});

export const employeeActions = employeeSlice.actions;

export default store;