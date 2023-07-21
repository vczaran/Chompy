import { useDispatch } from "react-redux";
import { signupUser } from "../../store/sessionReducer";
import { useState } from "react";

function SignupForm() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(signupUser({email, password}));
    }
    return (
        <>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label>Name
                <input type="text" value={name} onChange={(e) => {setName(e.target.value)}} required/>
                </label>

                <label>Email
                    <input type="text" value={email} onChange={(e) => {setEmail(e.target.value)}} required/>
                </label>

                <label>Password
                    <input type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} required/>
                </label>

                <input type="submit" value="Sign Up"></input>
            </form>
    
        </>
    )
}


export default SignupForm;