import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../store/sessionReducer";
import { useState } from "react";
import { Redirect } from "react-router-dom";

function LoginForm() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const currentUser = useSelector(state => state.session.user);

    if (currentUser) {
        return <Redirect to="/" />;
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(loginUser({email, password}));
    }
    return (
        <>
            <h1>Log In</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <input placeholder="Email Address" type="text" value={email} onChange={(e) => {setEmail(e.target.value)}} required/>

                <input placeholder="Password(Must be at least 8 characters)" type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} required/>

                <input type="submit" value="Log In"></input>
            </form>
    
        </>
    )
}


export default LoginForm;