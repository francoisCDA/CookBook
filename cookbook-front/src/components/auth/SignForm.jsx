import 'dotenv';
import axios from 'axios';
import { useRef } from 'react';
import { useDispatch } from "react-redux"
import { adminConnect, setToken } from './authSlice';




const SignForm = () => {


const URL_API = process.env.URL_API + 'admin' ;

    const refLogin = useRef();
    const refPassword = useRef();

    const dispatch = useDispatch();

    // fonction à appeler par le formulaire d'identification
    // les login et passord attendus sont défins dans le fihier .env de l'API
    // login = Admin
    // password = unepressionen50
    const axiosGetAdmin = async () => {

        const monCredentials = `${refLogin}:${refPassword}`;
        const monCredentialsBase64 = Buffer.from(monCredentials).toString('base64');         

        try {
            const reponse = await axios.get(URL_API, {headers:{Authorization:'Basic '+ monCredentialsBase64}});
            
            if (reponse.data.admin == true) {
                dispatch(setToken(monCredentialsBase64))
                dispatch(adminConnect())
            } else {

            console.log('usenavigate redirection vers page connexion echouée')
            }

        } catch (error) {
            console.error(error.message);
        }

    }
    

    



    return (
        
        <>
        
        
        </>

    )
}
export default SignForm