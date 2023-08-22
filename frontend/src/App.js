import { Route, Switch } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import NavBar from "./components/NavBar";
import SplashPage from "./components/SplashPage";
import ProductsIndex from "./components/ProductsIndex";
import ProductShow from "./components/ProductShow";
import CartIndex from "./components/Cart/CartIndex";
import ReviewForm from "./components/ReviewForm";
import EditReviewForm from "./components/ReviewForm/EditReviewForm";
import CheckoutPage from "./components/CheckoutPage";
import SearchPage from "./components/SearchPage";
import Footer from "./components/Footer/Footer";


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

          <Route path="/checkout" >
            <CheckoutPage />
          </Route>

          <Route path="/cart" >
            <CartIndex />
          </Route>

          <Route path="/search" >
            <SearchPage />
          </Route>

          <Route exact path="/review/:productId" >
            <ReviewForm />
          </Route>

          <Route exact path="/reviews/edit/:reviewId" >
            <EditReviewForm />
          </Route>

          <Route exact path="/products/:productId" >
            <ProductShow />
          </Route>

          <Route path="/products" >
            <ProductsIndex />
          </Route>

           <Route path="/" >
            <SplashPage />
          </Route>

        </Switch>
        <Footer />
  </>
  
  );
}

export default App;
