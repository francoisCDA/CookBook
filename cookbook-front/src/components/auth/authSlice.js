import { createSlice } from '@reduxjs/toolkit' ;




const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: false,  // peut être plus logique de mettre admin, mais tu as dû utiliser user.
        token: ''
    },
    reducers: {
        adminConnect: (state, action) => {
            state.user = true;
        },
        adminDisconnect: (state, action) => {
            state.user = false;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        }
    }
})

export const { adminConnect, adminDisconnect, setToken } = authSlice.actions ;
export default authSlice.reducer ;
