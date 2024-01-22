import ProductListItem from "./components/ProductListItem"
import ShoppingCartListItem from "./components/ShoppingCartListItem"
import ShoppingCart from "./components/ShoppingCart";
import OrderSummary from "./components/OrderSummary";
import styled from "styled-components"
import React, { useState } from "react";

const Box = styled.div`
margin: 10px;
display: flex;
justify-content: space-evenly;
`

function App() {
  return(
    <Box>
    <ShoppingCart/>
    </Box>
  )
}

export default App
