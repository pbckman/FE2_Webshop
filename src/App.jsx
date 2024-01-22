import ProductListItem from "./components/ProductListItem"
import ShoppingCartListItem from "./components/ShoppingCartListItem"
import styled, {createGlobalStyle} from "styled-components"
import Navbar from "./components/Navbar.jsx";
import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Contact from "./pages/Contact.jsx";

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    font-family: "Montserrat Thin", sans-serif;
  }
`

const Box = styled.div`
margin: 10px;
display: flex;
justify-content: space-evenly;
`

function App() {
  return(
      <>
        <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact" element={<Contact/>} />
          </Routes>
{/*        <Box>
      <ShoppingCartListItem />
      <ProductListItem />
      </Box>*/}
          <GlobalStyle />
    </>
  )
}

export default App
