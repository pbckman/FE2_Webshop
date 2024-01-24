import styled from "styled-components";
import ShoppingCartListItem from "./ShoppingCartListItem";
import OrderSummary from "./OrderSummary";

const CartWrapper = styled.div`

`
const CartHeader = styled.div`

width: 1230px;
height: 60px;
display: flex;
flex-direction: row;

 h3 {
    font-family: "Montserrat", sans-serif;
    font-size: 35px;
    margin-right: 20px;
    margin-top: 15px;
 }

 p {
    font-size: 15px;
    margin-top: 30px;
    font-family: "Montserrat", sans-serif;
 }
`

const Underline = styled.div`

margin-top: 20px;
margin-bottom: 30px;

.underline {
  width: 1230px;
  position: relative;
}

.underline::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px; 
  background-color: #e6e6e6; 
}
`

const ShoppingCartItem = styled.div`
display: flex;
flex-direction: column;
position: absolute;
left: 400px;
`

const OrderSummaryCart = styled.div`
width: 315px;
height: 400px;
position: absolute;
right: 401px;
`

function ShoppingCart() {
    return (
        <CartWrapper>
                <h3>Nav-bar</h3>
            <CartHeader className="underline">
                <h3>Varukorg </h3> <p> 3 varor</p>
            </CartHeader>
            
            <Underline><div className="underline"></div></Underline>

            <ShoppingCartItem>
                <ShoppingCartListItem />
                <ShoppingCartListItem />
                <ShoppingCartListItem />
            </ShoppingCartItem>

            <OrderSummaryCart>
                <OrderSummary />
            </OrderSummaryCart>

        </CartWrapper>
    )
}

export default ShoppingCart