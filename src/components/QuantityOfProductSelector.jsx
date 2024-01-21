import React, { useState } from "react";
import styled from "styled-components";

const StyledQuantitySelector = styled.div`
  display: flex;
  align-items: center;
  

  label {
    margin-right: 10px;
    font-weight: bold;
    padding-right: 30px;
  }

`

const StyledQuantityButton = styled.div`
  display: flex;
  align-items: center;
  border-radius: 20px;
  background-color: #f1f1f1;
  font-weight: bold;

button {
    padding: 8px 14px;
    font-size: 18px;
    margin: 2px 10px;
    cursor: pointer;
    border-radius: 50px;
    border: none;
  }

.increaseButton {
  color: white;
background-color: #007bec;
margin-right: 2px;
margin-left: 20px;
}

.decreaseButton {
  color: black;
  background-color: white;
  margin-left: 2px;
  margin-right: 20px;
}
`

function SkiQuantitySelector() {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <StyledQuantitySelector>
      <label>Antal</label>
      <StyledQuantityButton>
        <button className="decreaseButton" onClick={decreaseQuantity}>-</button>
        <span>{quantity}</span>
        <button className="increaseButton" onClick={increaseQuantity}>+</button>
      </StyledQuantityButton>
    </StyledQuantitySelector>
  );
};

export default SkiQuantitySelector;