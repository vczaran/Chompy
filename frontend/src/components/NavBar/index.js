import "./NavBar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import LogOut from "../LogOut";

function DropDown () {
    const [show, setShow] = useState(false);
    const loggedin = sessionStorage.getItem("currentUser");

    // <button onMouseEnter={() => setShow(true)}
    //         onMouseLeave={() => setShow(false)}>sign in   
    // </button>

    // if (show && !loggedin) {
    //   return (
    //     <div className="splash-nav-links">
    //              <Link id="login" to="/login">Sign In</Link>
    //               <br/>
    //               <Link id="create" to="/register">Create an Account</Link>
    //      </div>
    //   )
    // } else if (show && loggedin) {
    //   return (
    //     <div className="logout-from-dropdown">
    //            <LogOut />
    //     </div>
    //   )
    // }
    return (
      <div className="DropDown"  
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}>sign in
          {/* <button> 
            {/* put carrot here */}
          {/* </button> */}
          
          {show && !loggedin && (
            <div className="splash-nav-links">
              <Link id="login" to="/login">Sign In</Link>
              <Link id="create" to="/register">Create an Account</Link>
            </div>
          )}
          {show && loggedin && (
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
            <img className="logo" src="images/chompy-logo.png" alt="Logo"></img>
            <DropDown />
        </header>
    )
}


export default NavBar;