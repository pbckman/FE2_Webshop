import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import Navbar from "../components/Navbar.jsx";
import { CartContext } from '../components/CartContext.jsx';
import Checkout from './Checkout.jsx';

const StyledButton = styled.button`
  width: 150px;
  padding: 15px;
  margin: 15px;
  background-color: ${(props) => (props.disabled ? '#003b6b' : '#007BECFF')};
  color: ${(props) => (props.disabled ? '#b9b9b9' : '#ffffff')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  border-radius: 10px;
  border: 1px solid lightgrey;

  &:hover {
    background-color: ${(props) => (props.disabled ? '#007BECFF' : '#005fa3')};
  }
  @media (max-width: 800px) {
    width: 200px;
  }
`;

const StyledLabel = styled.div`
font-size: 2em; 
font-weight: bold;
margin-top: 10px;
margin-bottom: 10px;
padding: 20px;
`;

const StyledRemoveButton = styled.button`
width: 150px;
padding: 15px;
background-color: ${(props) => (props.disabled ? '#003b6b' : '#FF0000FF')}; 
color: ${(props) => (props.disabled ? '#b9b9b9' : '#ffffff')};
cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
border-radius: 10px;
border: 1px solid lightgrey;

&:hover {
  background-color: ${(props) => (props.disabled ? '#FF0000FF' : '#FF00007F')};
}

margin-left: 20px;


@media (max-width: 800px) {
  width: 200px;
}
`;

const Wrapper = styled.button`

flex-wrap: wrap;
justify-content: space-around;
align-items: center;
padding-inline-start: 50px;
padding-inline-end: 50px;
margin: 15px;
`;

function Cart() {
    const { cart, dispatch } = useContext(CartContext);
    const [orderPlaced, setOrderPlaced] = useState(false); 
    const totalPrice = cart.items.reduce((total, item) => total + item.product.price * item.product.quantity, 0);

    const handleRemoveFromCart = (productId, selectedSize) => {
        const updatedItems = cart.items.map((item) => {
            if (item.product.id === productId && item.product.selectedSize === selectedSize) {
                if (item.product.quantity > 1) {
                    return { ...item, product: { ...item.product, quantity: item.product.quantity - 1 } };
                } else {
                    return null;
                }
            } else {
                return item;
            }
        }).filter(item => item !== null);
    
        dispatch({ type: 'UPDATE_CART', payload: updatedItems });
    };
    const handleOrder = () => {
        setOrderPlaced(true); 
    };


    
      const handleRemoveEntireItem = (productId, selectedSize) => {
        dispatch({
          type: 'REMOVE_FROM_CART',
          payload: {
            productId,
            selectedSize,
          },
        });
      };
   

    const sizeMappings = {
        size_boot42: "42",
        size_boot43: "43",
        size_boot44: "44",
        size_ski160: "160cm",
        size_ski170: "170cm",
        size_ski180: "180cm",
        size_snowboard144: "144cm",
        size_snowboard152: "152cm",
        size_snowboard160: "160cm",
        size_onesize: "Onesize"
    }

    return (
        <>
            <Navbar />
            {!orderPlaced ? (
                <>
                    <StyledLabel style={{position: 'relative', left: '100px'}}>Varukorg</StyledLabel>
                    {cart.items.map((item, index) => (
                        <div key={index} style={{ border: '1px solid #ddd', padding: '15px', margin: '10px 0' }}>
                            <Wrapper>
                            <h1 style = {{position: 'relative', left: '10px'}}>{item.product.title} </h1>
                            <h3>Storlek: {sizeMappings[item.product.selectedSize]}</h3>
                            <h3>Antal: {item.product.quantity}</h3>
                            <h3>Pris: {item.product.price} kr</h3>
                            </Wrapper>
                            <StyledRemoveButton onClick={() => handleRemoveFromCart(item.product.id, item.product.selectedSize)}>-</StyledRemoveButton>
                            <StyledButton onClick={() => handleAddOneToCart(item.product)}>+</StyledButton>
                            <StyledButton onClick={() => handleRemoveEntireItem(item.product.id, item.product.selectedSize)}>Ta bort</StyledButton>
                        </div>
                    ))}
                    
                    <StyledLabel style={{position: 'relative', left: '10px'}}>Total Pris: {totalPrice} kr</StyledLabel>
                    <StyledButton onClick={() => window.history.back()}>Tillbaka</StyledButton>
                    <StyledButton onClick={handleOrder}>Beställ</StyledButton>
                </>
            ) : (
                <>
                    <StyledLabel>Total Pris: {totalPrice} kr </StyledLabel>
                    <Checkout />
                    <StyledButton onClick={() => setOrderPlaced(false)}>Tillbaka</StyledButton>
                </>
            )}
        </>
    );
}

export default Cart;
