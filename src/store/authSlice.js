import { createSlice } from '@reduxjs/toolkit';
import { getAuth } from '../utils/authUtils';

const authReducer = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: getAuth(),
    },
    reducers: {
        login: (state) => {
            state.isLoggedIn = true;
        },
        logout: (state) => {
            state.isLoggedIn = false;
        },
    },
});

export const { login, logout } = authReducer.actions;
export default authReducer.reducer;
