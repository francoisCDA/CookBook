import { useRef } from 'react';
import { useDispatch } from "react-redux"
import { axiosPostAdmin } from './authSlice';




const SignForm = () => {
    
   
    const refLogin = useRef();
    const refPassword = useRef();

    const dispatch = useDispatch();

    
    // les login et passord attendus sont défins dans le fihier .env de l'API
    // login = Admin
    // password = unepressionen50


    const postAdmin = () => {
        dispatch(axiosPostAdmin({login: refLogin.current.value,password: refPassword.current.value}))
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

                <button type='button' onClick={postAdmin}>Sign In</button>
            

            </form>

        </>

    )
}
export default SignForm