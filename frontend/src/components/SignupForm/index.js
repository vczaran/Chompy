import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../../store/sessionReducer";
import { useState } from "react";
import './SignupForm.css';
import { Link } from "react-router-dom";
import { removeErrors, storeErrors } from "../../store/errors";


function SignupForm() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [name, setName] = useState("");
    const errors = useSelector(state => state.errors);

    function handleSubmit(e) {
        e.preventDefault();
        if (password === confirmPassword) {
        dispatch(signupUser({name, email, password}))
            .catch(async (res) => {
                let data;
                try {
                data = await res.clone().json();
                } catch {
                data = await res.text();
                }
                if (data?.errors) {
                    dispatch(storeErrors(data.errors));
                } else {
                    dispatch(removeErrors());
                }
            });
        } else {
            dispatch(storeErrors({errors: "Passwords must match"}));
        }
      };

    return (
        <>
        <div className="signup-page">
            <form className="signup-form" onSubmit={handleSubmit}>
                <h1>Create an Account</h1>
                <h3>Please enter your information</h3>
                <ul className="signup-info">
                    <input placeholder="Full Name" type="text" value={name} onChange={(e) => {setName(e.target.value)}} required/>
                    {errors.length ? <p className="signup-errors">Name is required</p> : null}
                    <input placeholder="Email Address" type="text" value={email} onChange={(e) => {setEmail(e.target.value)}} required/>
                    {errors.length ? <p className="signup-errors">{errors[0]}</p> : null}
                    <input placeholder="Password (At least 8 characters)" type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} required/>
                    {errors.length ? <p className="signup-errors">{errors[1]}</p> : null}

                    <input placeholder="Confirm Password" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>
                    {errors ? <p className="signup-errors">{errors.errors}</p> : null}

                </ul>

                <ul className="password-tips" style={{listStyle: 'disc'}}>Tips for a strong password:
                    <li>Create a unique password that you're not using anywhere else</li>
                    <li>Use a combination of uppercase and lowercase letters and numbers</li>
                    <li>Use special characters</li>
                </ul>

                <input className="signup-button" type="submit" value="Create Account"></input>
                <p className="sign-in-link-from-signup">Already have an account?
                    <Link onClick={(() => {dispatch(removeErrors())})} to="/login">Sign In</Link>
                </p>
            </form>

            <ul className="signup-page-text" style={{listStyle: 'disc'}}>Creating an account is fast, easy, and free. You'll be able to browse products, manage your cart, write reviews, and more!
                    <li>BROWSE PRODUCTS</li>
                    <li>MANAGE CART</li>
                    <li>RATE AND REVIEW PRODUCTS</li>
            </ul>
        </div>
    
        </>
    )
}


export default SignupForm;