import { useDispatch } from "react-redux";
import { signupUser } from "../../store/sessionReducer";
import { useState } from "react";
import './SignupForm.css';
import { Link } from "react-router-dom";


function SignupForm() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [name, setName] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (password === confirmPassword) {
        dispatch(signupUser({name, email, password}));
        };
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

                    <input placeholder="Confirm Password" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>
                </ul>

                <ul className="password-tips" style={{listStyle: 'disc'}}>Tips for a strong password:
                    <li>Create a unique password that you're not using anywhere else</li>
                    <li>Use a combination of uppercase and lowercase letters and numbers</li>
                    <li>Use special characters</li>
                </ul>

                <input className="signup-button" type="submit" value="Create Account"></input>
                <p className="sign-in-link-from-signup">Already have an account?
                    <Link to="/login">Sign In</Link>
                </p>
            </form>
    
        </>
    )
}


export default SignupForm;