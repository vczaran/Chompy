import "./NavBar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import LogOut from "../LogOut";

function DropDown () {
    const [show, setShow] = useState(false);

    return (
      <div className="DropDown">
        <button
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}>
          sign in
        </button>
        {show && (
          <div className="splash-nav-links">
            <Link to="/login">Sign In</Link>
            <br/>
            <Link to="/register">Create an Account</Link>
            <br/>
            <LogOut />
          </div>
        )}
      </div>
    );
  }
  

function NavBar () {
    return (
        <header className="nav-bar">
            <img className="logo" src="images/chompy-logo.png" alt="Logo"></img>
            <DropDown />
        </header>
    )
}


export default NavBar;