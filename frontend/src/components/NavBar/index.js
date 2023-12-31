import "./NavBar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import LogOut from "../LogOut";
import { useSelector } from "react-redux";
import Cart from "../Cart";
import SearchBar from "./SearchBar";

function DropDown () {
    const [show, setShow] = useState(false);
    const currentUser = useSelector(state => state.session.user);
    const dropdownTitle = currentUser ? `Hello, ${currentUser.name}!`: "sign in";

    return (
      <>
      
      <div className="DropDown"  
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}>{dropdownTitle}
          <i class="fa-solid fa-user" style={{color: "#ffffff"}}></i>
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

        <div className="cart">
          <Cart />
        </div>

        </>
  
    );
  }
  

function NavBar () {
  
    return (
        <header className="nav-bar">
            <Link to="/"><img className="logo" src="/images/chompy-logo.png" alt="Logo"></img></Link>
            <SearchBar />
            <DropDown />
        </header>
    )
}


export default NavBar;