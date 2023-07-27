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
          <Route path="/login" >
            <LoginForm />
          </Route>

          <Route path="/register" >
            <SignupForm />
          </Route>

          <Route path="/products/:productId" >
            <ProductShow />
          </Route>

          <Route path="/products" >
            <ProductsIndex />
          </Route>

           <Route path="/" >
            <SplashPage />
          </Route>
        </Switch>
  </>
  
  );
}

export default App;
