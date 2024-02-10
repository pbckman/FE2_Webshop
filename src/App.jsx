import styled, {createGlobalStyle} from "styled-components"
import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Skis from "./pages/Skis.jsx";
import Snowboards from "./pages/Snowboard.jsx";
import Accessories from "./pages/Accessories.jsx";
import Cart from "./pages/Cart.jsx";
import About from "./pages/About.jsx";
import OrderSuccess from "./pages/OrderSuccess.jsx";
import Checkout from './pages/Checkout';
import Product from "./pages/Product.jsx";
import TermsOfPurchase from "./pages/TermsOfPurchase.jsx";
import AllProducts from "./pages/AllProducts.jsx"

import { CartProvider } from "./components/CartContext.jsx";
import FindUs from "./pages/FindUs.jsx";
const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-family: "Montserrat", sans-serif;
  }
`

function App() {
  return(
      <>
      <CartProvider>
          <Routes>´
              <Route path="/" element={<Home />} />
              <Route path="/skis" element={<Skis />} />
              <Route path="/snowboards" element={<Snowboards />} />
              <Route path="/accessories" element={<Accessories />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/cart" element={<Cart/>} />
              <Route path="/ordersuccess" element={<OrderSuccess/>} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/products/:id" element={<Product />} />
              <Route path="/termsofpurchase" element={<TermsOfPurchase/>} />
              <Route path="/allproducts" element={<AllProducts />} />
              <Route path="findus" element={<FindUs />} />
          </Routes> 
        </CartProvider>
        <GlobalStyle />
    </>
  )
}

export default App
