import { Route, Switch } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import NavBar from "./components/NavBar";
import SplashPage from "./components/SplashPage";
import ProductsIndex from "./components/ProductsIndex";
import ProductShow from "./components/ProductShow";


function App() {
  return (
    <>
      <NavBar />
        <Switch>
          <Route exact path="/login" >
            <LoginForm />
          </Route>

          <Route exact path="/register" >
            <SignupForm />
          </Route>

          <Route exact path="/products/:productId" >
            <ProductShow />
          </Route>

          <Route exact path="/products" >
            <ProductsIndex />
          </Route>

           <Route exact path="/" >
            <SplashPage />
          </Route>
        </Switch>
  </>
  
  );
}

export default App;
