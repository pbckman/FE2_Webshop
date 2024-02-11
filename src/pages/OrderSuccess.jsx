import React from 'react';
import styled from "styled-components"
import SkiLiftImage from "../components/images/backgroundimages/Skiers.jpg";
import {NavLink} from "react-router-dom";

const OrderSuccessBackgroundImage = styled.div`
  position: relative;
  background: url(${SkiLiftImage}) no-repeat center center fixed;
  background-size: cover;
  height: 100vh;
`;

const Logo = styled.div`
    display: flex;
  justify-content: center;
  padding-top: 50px;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  font-size: 30px;
  & span {
    color: #007BECFF;
  }
`;

const OrderSuccessWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  height: 70vh;
  width: 90vh;
  border-radius: 70px;
  opacity: 0.9;
  @media (max-width: 600px) {
    width: fit-content;
    height: fit-content;
    padding: 40px;
  }
`;

const OrderSuccessTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OrderSuccessH1 = styled.h1`
  font-size: 50px;
  font-weight: 600;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const OrderSuccessH2 = styled.h2`
  font-size: 17px;
  font-weight: 500;
  text-align: center;
  padding: 0 100px 0 100px;
  @media (max-width: 800px) {
    font-size: 13px;
  }
`;

const ReturnToSite = styled.div`
  display: flex;
  justify-content: center;
  font-size: 13px;
  a:visited { text-decoration: none; color:black; }
  a:hover { text-decoration: none; color: #007bec; }
`;




function OrderSuccess(props) {
    return (
        <>
        <OrderSuccessBackgroundImage />
        <OrderSuccessWrapper>
            <Logo>Alpine<span>Store</span></Logo>
            <OrderSuccessTextWrapper>
                <OrderSuccessH1>Tack för din order!</OrderSuccessH1>
                <OrderSuccessH2>Ditt äventyr på snöklädda berg är på väg! Vi vill uttrycka vår uppskattning för din order hos AlpineStore.
                    Vi ser fram emot att se dig njuta av spänningen och glädjen med våra produkter.
                    Tack för att du valde oss!</OrderSuccessH2>
            </OrderSuccessTextWrapper>
            <ReturnToSite>
            <NavLink to="/">Klicka här för att återgå till AlpineStore</NavLink>
            </ReturnToSite>
        </OrderSuccessWrapper>
        </>
    );
}

export default OrderSuccess;