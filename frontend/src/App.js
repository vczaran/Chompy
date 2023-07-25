import { Route, Switch } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import NavBar from "./components/NavBar";
import SplashPage from "./components/SplashPage";


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
           <Route exact path="/" >
            <SplashPage />
          </Route>
        </Switch>
  </>
  
  );
}

export default App;
