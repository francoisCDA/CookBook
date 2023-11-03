import { Link } from "react-router-dom";
// import { logOutAction } from "../auth/authSlice";
import { useDispatch } from "react-redux";


function Navbar() {
    // const dispatch = useDispatch()
    // const user = useSelector(state => state.auth.user)
    const user = false
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">

            <div class="d-flex justify-content-evenly">

                <div className="navbar-brand ">Mes recettes</div>

                <Link className="navbar-brand " to={"/"}>
                    <i className="bi bi-globe "></i> Home
                </Link>


                <div className="collapse navbar-collapse ms-auto">
                    {user ? (
                        <button className="btn btn-secondary ms-auto" onClick={() => dispatch(logOutAction())}>
                            Déconnexion
                        </button>
                    ) : (
                        <Link className="btn btn-primary ms-auto" to="/SignForm">
                            Sign In
                        </Link>
                    )}
                </div>
            </div>

        </nav>
    );

}
export default Navbar;