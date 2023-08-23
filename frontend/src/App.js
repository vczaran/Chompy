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
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";


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

          <Route exact path="/checkout" >
            <CheckoutPage />
          </Route>

          <Route exact path="/cart" >
            <CartIndex />
          </Route>

          <Route exact path="/search" >
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

          <Route exact path="/products" >
            <ProductsIndex />
          </Route>

           <Route exact path="/" >
            <SplashPage />
          </Route>

          <Route exact path="*" >
            <NotFoundPage/>
          </Route>

        </Switch>
        <Footer />
  </>
  
  );
}

export default App;
