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
            <Route path="*" element={ <NotFound /> }></Route>

            <Route path="/" element={ <HomePage /> }></Route>
            <Route path="/product/:productId" element={ <ProductPage /> }></Route>
            <Route path="/cart" element={ <CartPage /> }></Route>
            <Route path="/checkout" element={ <CheckoutPage /> }></Route>
            <Route path="/wishlist" element={ <WishlistPage /> }></Route>

            <Route path="/sign-in" element={ <SignInPage /> }></Route>
            <Route path="/sign-up" element={ <SignUpPage /> }></Route>
            <Route path="/forget-pass" element={ <ResetPage /> }></Route>

        </Routes>
        </>
    );
}

export default App;
