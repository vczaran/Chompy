import { Route, Switch } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import LogOut from "./components/LogOut";
import SignupForm from "./components/SignupForm";
import NavBar from "./components/NavBar";


function App() {
  return (
    <>
      <NavBar />
        <Switch>
          <Route path="/login" >
            <LoginForm />
          </Route>
          <Route path="/register" >
            <SignupForm />
          </Route>
        </Switch>
        {/* <LogOut /> */}
  </>
  
  );
}

export default App;
