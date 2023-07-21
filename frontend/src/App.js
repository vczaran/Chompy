import { Route, Switch } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import LogOut from "./components/LogOut";


function App() {
  return (
    <>
      <h1>Welcome to Chompy!</h1>
        <Switch>
          <Route path="/login" >
            <LoginForm />
          </Route>
        </Switch>
        <LogOut />
  </>
  
  );
}

export default App;
