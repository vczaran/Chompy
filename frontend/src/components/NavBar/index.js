import "./NavBar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import LogOut from "../LogOut";
import { useSelector } from "react-redux";

function DropDown () {
    const [show, setShow] = useState(false);
    const currentUser = useSelector(state => state.session.user);
    const dropdownTitle = currentUser ? `Hello, ${currentUser.name}!`: "sign in";

    return (
      <div className="DropDown"  
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}>{dropdownTitle}
          {/* <button> 
            {/* put carrot here */}
          {/* </button> */}
          
          {show && !currentUser && (
            <div className="splash-nav-links">
              <Link id="login" to="/login">Sign In</Link>
              <Link id="create" to="/register">Create an Account</Link>
            </div>
          )}
          {show && currentUser && (
          <div className="logout-from-dropdown">
            <LogOut />
          </div>
          )}
          
        </div>
    );
  }
  

function NavBar () {
  
    return (
        <header className="nav-bar">
            <Link to="/"><img className="logo" src="/images/chompy-logo.png" alt="Logo"></img></Link>
            <input className="searchbar" type="text" placeholder="Search"/>
            <DropDown />
        </header>
    )
}


export default NavBar;