import { Routes, Route, Link } from "react-router-dom";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import ProductPage from "./pages/ProductPage";
import ResetPage from "./pages/ResetPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import WishlistPage from "./pages/WishlistPage";


function App() {
    return (
        <>
        <Routes>
            <Route exact path="*" element={ <NotFound /> }></Route>

            <Route exact path="/" element={ <HomePage /> }></Route>
            <Route exact path="/product/:productId" element={ <ProductPage /> }></Route>
            <Route exact path="/cart" element={ <CartPage /> }></Route>
            <Route exact path="/checkout" element={ <CheckoutPage /> }></Route>
            <Route exact path="/wishlist" element={ <WishlistPage /> }></Route>

            <Route exact path="/sign-in" element={ <SignInPage /> }></Route>
            <Route exact path="/sign-up" element={ <SignUpPage /> }></Route>
            <Route exact path="/forget-pass" element={ <ResetPage /> }></Route>

        </Routes>
        </>
    );
}

export default App;
