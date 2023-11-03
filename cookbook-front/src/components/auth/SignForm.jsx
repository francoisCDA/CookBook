
import axios from 'axios';
import { useRef } from 'react';
import { useDispatch } from "react-redux"
import { adminConnect, setToken } from './authSlice';




const SignForm = () => {
    
   
    const URL_API = 'http://127.0.0.1:3333/' + 'admin' ;
    console.log(URL_API)

    const refLogin = useRef();
    const refPassword = useRef();

    const dispatch = useDispatch();

    // fonction à appeler par le formulaire d'identification
    // les login et passord attendus sont défins dans le fihier .env de l'API
    // login = Admin
    // password = unepressionen50
    const axiosGetAdmin = async () => {

        const monCredentials = `${refLogin.current.value}:${refPassword.current.value}`;
        const monCredentialsBase64 = btoa(monCredentials);         

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
            <h2>Identification</h2>
            <form action="#">
                <label htmlFor="login">Login : </label>
                <input type="text" id="login" name="login" ref={refLogin} required/>

                <br/>

                <label htmlFor="passwrd">Mot de passe : </label>
                <input type="password" id="passwrd" name="passwrd" ref={refPassword} required />

                <hr/>

                <button type='button' onClick={axiosGetAdmin}>Sign In</button>
            

            </form>

        </>

    )
}
export default SignForm