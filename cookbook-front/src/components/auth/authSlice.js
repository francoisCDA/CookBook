import { createSlice } from '@reduxjs/toolkit' ;

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: false  // peut être plus logique de mettre admin, mais tu as dû utiliser user.
    },
    reducers: {
        connect: (state, action) => {
            state.user = true;
        },
        disconnect: (state, action) => {
            state.user = false;
        }
    }
})

export const { connect, disconnect } = authSlice.actions ;
export default authSlice.reducer ;
