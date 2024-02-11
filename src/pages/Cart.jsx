import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import Navbar from "../components/Navbar.jsx";
import { CartContext } from '../components/CartContext.jsx';
import Checkout from './Checkout.jsx';
import CustomAlert from '../components/CustomAlert.jsx';


const CartContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start; 
  gap: 10px; 
  margin-bottom: 20px; 
  margin-left: 20px;
`;

const CartItemWrapper = styled.div`
  flex: 0 1 calc(100% - 20px);
  background-color: lightblue;
  border-radius: 10px;
  margin: 0px 0;
  padding: 15px;
  box-sizing: border-box;
`;


const NormalButton = styled.button`
  font-family: Montserrat, sans-serif;
  width: 100px;
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

const StyledButton = styled.button`
  font-family: Montserrat, sans-serif;
  width: 50px;
  padding: 0px;
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
width: 50px;
padding: 10px;
margin: 15px;
background-color: ${(props) => (props.disabled ? '#003b6b' : '#FF0000FF')}; 
color: ${(props) => (props.disabled ? '#b9b9b9' : '#ffffff')};
cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
border-radius: 10px;
border: 1px solid lightgrey;

&:hover {
  background-color: ${(props) => (props.disabled ? '#FF0000FF' : '#FF00007F')};
}



@media (max-width: 800px) {
  width: 200px;
}
`;

const InfoContainer = styled.div`
flex-grow: 1; 
display: flex;
flex-direction: column;
justify-content: flex-start;
overflow: hidden;
`;

const Title = styled.h1`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1.5em;
  `

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px; 
`;

const SummaryWrapper = styled.div`
  position: fixed;
  top: 115px; 
  right: 50px; 
  width: 155px;
  background-color: #ADD8E6;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 4px 5px rgba(0,0,0,0.2);
  display: fixed;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 800px) {
    width: 100%;
    top: 150px;
    right: 0;
    left: 0;
    bottom: 0;
    padding: 20px;
    border-radius: 0;
    box-shadow: none;
    position: sticky;
  }
`;

const SummaryItem = styled.div`
  font-size: 1em;
  margin: 5px 0;
`;
const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15vh; // or the height of your header
`;

const ModalContainer = styled.div`
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1001;
`;


function Cart() {
    const { cart, dispatch } = useContext(CartContext);
    const [orderPlaced, setOrderPlaced] = useState(false); 
    const [showModal, setShowModal] = useState(false);
    const totalPrice = cart.items.reduce((total, item) => total + item.product.price * item.product.quantity, 0);
    const isCartEmpty = cart.items.length === 0;

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

    const Modal = ({ show, onClose, alertMessage }) => {
      return (
        <ModalContainer show={show}>
          <CustomAlert message={alertMessage} onClose={onClose} />
        </ModalContainer>
      );
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
   
      const handleAddOneToCart = (cartItem) => {
        const totalQuantityInCart = cartItem.quantity + 1;
      
        const maxAvailableQuantity = cartItem.availableQuantity || 1;
      
        if (totalQuantityInCart > maxAvailableQuantity) {
          setShowModal(true);
          setTimeout(() => setShowModal(false), 10000);
        } else {
          dispatch({
            type: 'ADD_TO_CART',
            payload: {
              product: {
                id: cartItem.id,
                title: cartItem.title,
                price: cartItem.price,
                selectedSize: cartItem.selectedSize,
                quantity: 1,
              },
            },
          });
        }
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
          <CenteredContainer>
            <StyledLabel>Varukorg</StyledLabel>
          </CenteredContainer>
          {isCartEmpty ? (
            <CenteredContainer>
              <StyledLabel>Oj, här var det tomt...</StyledLabel>
            </CenteredContainer>
          ) : (
            <CartContainer>
              {cart.items.map((item, index) => (
                        <div key={index} style={{ border: '1px solid #ddd', padding: '15px', margin: '10px 0' }}>
                            <CartItemWrapper key={index}>
                            <InfoContainer>
                              <Title>{item.product.title}</Title>
                              <h3>Storlek: {sizeMappings[item.product.selectedSize]}</h3>
                              <h3>Antal: {item.product.quantity}</h3>
                              <h3>Pris: {item.product.price} kr</h3>
                            </InfoContainer>

                            <ButtonContainer>
                              <StyledRemoveButton onClick={() => handleRemoveFromCart(item.product.id, item.product.selectedSize)}>-</StyledRemoveButton>
                              <StyledButton onClick={() => handleAddOneToCart(item.product)}>+</StyledButton>
                              <StyledButton onClick={() => handleRemoveEntireItem(item.product.id, item.product.selectedSize)}>x</StyledButton>
                              
                            </ButtonContainer>
                            </CartItemWrapper>
                            
                        </div>
                        
                        ))}
                        <Modal show={showModal} onClose={() => setShowModal(false)} alertMessage={`Var god och öka på antal via produktsidan`} />
                        </CartContainer>
                        
                      )}
                      {!isCartEmpty && (
                        <SummaryWrapper>
                          <SummaryItem>Summa: {totalPrice} kr</SummaryItem>
                          <SummaryItem>Leveransavgift: 0 kr</SummaryItem>
                          <NormalButton onClick={handleOrder}>Beställ</NormalButton>
                        </SummaryWrapper>
                      )}
                    </>
                  ) : (
                <>
                  <CenteredContainer>
                    <StyledLabel>Summa: {totalPrice} kr </StyledLabel>
                  </CenteredContainer>
                    <Checkout />
                    <CenteredContainer>
                    <NormalButton onClick={() => setOrderPlaced(false)}>Tillbaka</NormalButton>
                    </CenteredContainer>
                </>
            )}
        </>
    );
}

export default Cart;
