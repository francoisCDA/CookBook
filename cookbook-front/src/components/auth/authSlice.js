import { createAsyncThunk, createSlice } from '@reduxjs/toolkit' ;
import axios from 'axios';

const URL_API = 'http://127.0.0.1:3333/' + 'admin' ;


export const axiosPostAdmin = createAsyncThunk(
    "auth.axiosPostAdmin",
    async ({login,password}) => {
    const monCredentialsBase64 = btoa(`${login}:${password}`);


    try {
            const reponse = await axios.post(URL_API, null,{ headers: {
                'Authorization': `Bearer ${monCredentialsBase64}`
            }})
            return {user: reponse.data.admin, token: monCredentialsBase64};
           
        } catch (error) {
            console.error(error.message);
        }

    }
)


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
            state.token = '';
        },
        setToken: (state, action) => {
            state.token = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(axiosPostAdmin.fulfilled, (state,action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;

        })
    }
})

export const { adminConnect, adminDisconnect, setToken } = authSlice.actions ;
export default authSlice.reducer ;
