import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../store/sessionReducer";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import "./LoginForm.css";
import { Link } from "react-router-dom";
import { storeErrors } from "../../store/errors";

function LoginForm() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const currentUser = useSelector(state => state.session.user);
    const errors = useSelector(state => state.errors);

    if (currentUser) {
        return <Redirect to="/" />;
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(loginUser({email, password}))
            .catch(async (res) => {
                let data;
                try {
                data = await res.clone().json();
                } catch {
                data = await res.text();
                }
                if (data?.errors) dispatch(storeErrors(data.errors));
            });
    }
     
        return (
            <>
            <h1 className="login-form-title">Sign in or register</h1>
            {errors.length ? <p className="invalid-login-error">{errors}</p> : null}
                <div className="login-page">  
                    <form className="login-form" onSubmit={handleSubmit}>
                        <h3>I'm a Returning Customer</h3>
                        <ul className="login-info">
                            <input placeholder="Email Address" type="text" value={email} onChange={(e) => {setEmail(e.target.value)}} required/>

                            <input placeholder="Password" type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} required/>
                        </ul>
                        <input id="signin-button" type="submit" value="Sign In"></input>
                    </form>

                    <label>I'm a New Customer
                        <p>Creating an account is fast, easy, and free!</p>
                        <br/>
                        <Link to="/register">Create Account</Link>
                    </label>
                </div>
            </>
        )
}


export default LoginForm;