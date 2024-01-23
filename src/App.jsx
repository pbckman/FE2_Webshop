import ProductListItem from "./components/ProductListItem"
import ShoppingCartListItem from "./components/ShoppingCartListItem"
import styled, {createGlobalStyle} from "styled-components"
import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Skis from "./pages/Skis.jsx";
import Snowboards from "./pages/Snowboard.jsx";
import Accessories from "./pages/Accessories.jsx";
import Cart from "./pages/Cart.jsx";
import About from "./pages/About.jsx";

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    font-family: "Montserrat", sans-serif;
  }
`

function App() {
  return(
      <>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/skis" element={<Skis />} />
              <Route path="/snowboards" element={<Snowboards />} />
              <Route path="/accessories" element={<Accessories />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/cart" element={<Cart/>} />
          </Routes>
          <GlobalStyle />
    </>
  )
}

export default App
