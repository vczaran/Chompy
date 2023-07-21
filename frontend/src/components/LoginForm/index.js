import { useDispatch } from "react-redux";
import { loginUser } from "../../store/sessionReducer";
import { useState } from "react";

function LoginForm() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(loginUser({email, password}));
    }
    return (
        <>
            <h1>Log In</h1>
            <form onSubmit={handleSubmit}>
                <label>Email
                    <input type="text" value={email} onChange={(e) => {setEmail(e.target.value)}} required/>
                </label>

                <label>Password
                    <input type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} required/>
                </label>

                <input type="submit" value="Log In"></input>
            </form>
    
        </>
    )
}


export default LoginForm;