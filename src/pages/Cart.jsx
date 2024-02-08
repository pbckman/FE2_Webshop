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
background-color: ${(props) => (props.disabled ? '#003b6b' : '#FF0000FF')}; /* changed to red */
color: ${(props) => (props.disabled ? '#b9b9b9' : '#ffffff')};
cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
border-radius: 10px;
border: 1px solid lightgrey;

&:hover {
  background-color: ${(props) => (props.disabled ? '#FF0000FF' : '#FF00007F')}; /* changed to darker red on hover */
}

margin-left: 20px;


@media (max-width: 800px) {
  width: 200px;
}
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

    return (
        <>
            <Navbar />
            {!orderPlaced ? (
                <div>
                    <StyledLabel>Varukorg</StyledLabel>
                    {cart.items.map((item, index) => (
                        <div key={index} style={{ border: '1px solid #ddd', padding: '15px', margin: '10px 0' }}>
                            <div>
                            <h3>{item.product.title}</h3>
                            <p>Size: {item.product.selectedSize}</p>
                            <p>Quantity: {item.product.quantity}</p>
                            <p>Price: {item.product.price} kr</p>
                            </div>
                            <StyledRemoveButton onClick={() => handleRemoveFromCart(item.product.id, item.product.selectedSize)}>Ta Bort</StyledRemoveButton>
                        </div>
                    ))}
                    
                    <StyledLabel>Total Pris: {totalPrice} kr</StyledLabel>
                    <StyledButton onClick={() => window.history.back()}>Tillbaka</StyledButton>
                    <StyledButton onClick={handleOrder}>Beställ</StyledButton>
                </div>
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
