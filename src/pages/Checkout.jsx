import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Stylade komponenter
const FormWrapper = styled.div`
  max-width: 500px;
  margin: 20px auto;
`;

const StepContainer = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  margin: 10px;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #007bff;
  color: white;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const Input = styled.input`
  width: 95%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;

  &:disabled {
    background-color: #f0f0f0;
    cursor: not-allowed;
  }
`;

const RadioGroup = styled.div`
  display: flex;
  align-items: center; // Centrerar radioknapparna vertikalt med texten
  margin-bottom: 10px;
`;


const Label = styled.label`
display: block;
margin-left: 5px;
`;

const Checkout = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [paymentDetails, setPaymentDetails] = useState({
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvc: '',
  });

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/ordersuccess');
  };

  const [deliveryOption, setDeliveryOption] = useState('');


  const handleInputChange = (e) => {
    let { name, value } = e.target;
  

    if (name === "postalCode" || name === "phoneNumber") {
      value = value.replace(/\D/g, '');
    } else if (name === "cardNumber") {
      value = value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();
    } else if (name === "expiryDate") {
      value = value.replace(/\D/g, '');
      if (value.length > 2) {
        value = value.substring(0, 2) + '/' + value.substring(2, 4);
      }
      value = value.slice(0, 5);
    } else if (name === "cvc") {
      value = value.replace(/\D/g, '').slice(0, 3);
    }
  
    setPaymentDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };

  return (
    <FormWrapper>
      <h2>Betalningsuppgifter</h2>

      <StepContainer>
        <h3>Steg 1: Kunduppgifter</h3>
        <Input type="text" placeholder="Fullständig Namn" required disabled={step !== 1} />
        <Input type="text" placeholder="Address" required disabled={step !== 1} />
        <Input
          type="text"
          name="postalCode"
          placeholder="Postnummer"
          value={paymentDetails.postalCode}
          onChange={handleInputChange}
          required
          disabled={step !== 1}
          maxLength="5"
        />
        <Input type="text" placeholder="Stad" required disabled={step !== 1} />
        <Input
          type="text"
          name="phoneNumber"
          placeholder="Telefonnummer"
          value={paymentDetails.phoneNumber}
          onChange={handleInputChange}
          required
          disabled={step !== 1}
          maxLength="11"
        />
        {step === 1 && <Button onClick={handleNext}>Fortsätt</Button>}
      </StepContainer>

      {step >= 2 && (
        <StepContainer>
          <h3>Steg 2: Leveransalternativ</h3>
          <RadioGroup>
            <input
              type="radio"
              id="homeDelivery"
              name="deliveryOption"
              value="homeDelivery"
              checked={deliveryOption === 'homeDelivery'}
              onChange={(e) => setDeliveryOption(e.target.value)}
              disabled={step > 2}
            />
            <Label htmlFor="homeDelivery">Hemleverans</Label>
          </RadioGroup>
          <RadioGroup>
            <input
              type="radio"
              id="pickup"
              name="deliveryOption"
              value="pickup"
              checked={deliveryOption === 'pickup'}
              onChange={(e) => setDeliveryOption(e.target.value)}
              disabled={step > 2}
            />
            <Label htmlFor="pickup">Pickup</Label>
          </RadioGroup>
          {step === 2 && (
            <>
              <Button onClick={handleBack}>Återgå</Button>
              <Button onClick={handleNext}>Fortsätt</Button>
            </>
          )}
        </StepContainer>
      )}

      {step >= 3 && (
        <StepContainer>
          <h3>Steg 3: Betalning</h3>
          <Input
            id="cardName"
            type="text"
            name="cardName"
            placeholder="Kortinnehavarens Namn"
            required
            value={paymentDetails.cardName}
            onChange={handleInputChange}
            
          />

          <Input
            id="cardNumber"
            type="text"
            name="cardNumber"
            placeholder="Kortnummer"
            required
            value={paymentDetails.cardNumber}
            onChange={handleInputChange}
            maxLength="19"
          />

          <Input
            id="expiryDate"
            type="text"
            name="expiryDate"
            placeholder="MM/ÅÅ"
            required
            value={paymentDetails.expiryDate}
            onChange={handleInputChange}
            maxLength="5"
          />

          <Input
            id="cvc"
            type="text"
            name="cvc"
            placeholder="CVC"
            required
            value={paymentDetails.cvc}
            onChange={handleInputChange}
            maxLength="3"
          />

          <Button onClick={handleBack}>Återgå</Button>
          <Button onClick={handleSubmit}>Slutför</Button>
        </StepContainer>
      )}
    </FormWrapper>
  );
};

export default Checkout;