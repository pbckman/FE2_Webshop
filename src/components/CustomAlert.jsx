import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  box-sizing: border-box;
`;

const Message = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  align-self: flex-end;
  background-color: #0076ff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: auto;
`;

const CustomAlert = ({ message, onClose }) => {
  return (
    <Container>
      <Message>{message}</Message>
      <Button onClick={onClose}>Stäng</Button>
    </Container>
  );
};

export default CustomAlert;