import { useDispatch } from "react-redux";
import { signupUser } from "../../store/sessionReducer";
import { useState } from "react";
import './SignupForm.css';

function SignupForm() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(signupUser({name, email, password}));
    }
    return (
        <>
            <h1>Create an Account</h1>
            <h3>Please enter your information</h3>
            <form className="signup-form" onSubmit={handleSubmit}>
                <ul className="signup-info">
                    <input placeholder="Full Name" type="text" value={name} onChange={(e) => {setName(e.target.value)}} required/>

                    <input placeholder="Email Address" type="text" value={email} onChange={(e) => {setEmail(e.target.value)}} required/>

                    <input placeholder="Password (At least 8 characters)" type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} required/>
                </ul>

                <input className="signup-button" type="submit" value="Create Account"></input>
            </form>
    
        </>
    )
}


export default SignupForm;