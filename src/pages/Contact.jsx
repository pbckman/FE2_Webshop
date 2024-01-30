import React, {useRef} from 'react';
import Navbar from "../components/Navbar.jsx";
import styled from "styled-components";
import Footer from "../components/Footer.jsx";
import ContactImg from "../components/images/backgroundimages/ContactPic2.jpg";
import * as emailjs from "@emailjs/browser";
import EmailForm from "../components/EmailForm.jsx";
import {Form} from "react-router-dom";

const ContactWrapper = styled.div`
  height: auto;
`;

const BoxesContainer = styled.div`
  display: flex;
  justify-content: center;
  @media(max-width: 720px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Box = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70vh;
  width: 70vh;
  margin: 20px;
  box-sizing: border-box;
  h1, h2, p{
    margin: 10px;
    padding: 0;
  }
  h2 {
    text-align: center;
  }
  & > p:nth-of-type(3) {
    font-weight: bold;
    text-align: center;
    font-size: 20px;
    padding-top: 40px;
  }
  img{
      width: 600px;
      height: 600px;
      object-fit: cover;
    }
  @media (max-width: 1190px) {
    width: 400px;
    img{
      display: none;
    }
  }`

const SoMeBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 720px) {
    flex-direction: column;
  }
  `;


const SoMeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 150px;
  width: 150px;
  margin: 10px;
  background-color: #f0f0f0;
  border-radius: 20px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  cursor: pointer;
`;

const SvgWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  
  svg{
    width: 100px;
    height: 100px;
    color: #007BECFF;

    &:hover {
      color: #005fa3;
  }
;`
const FormWrapper = styled.div`
  padding-bottom: 75px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    font-size: 30px;
    padding: 0;
    margin: 0;
  }
  p {
    width: 500px;
    margin: 0;
    padding: 10px;
    
  }
  & > p:nth-of-type(3) {
    font-weight: bold;
    text-align: center;
    font-size: 20px;
    padding: 40px;
  }
  @media (max-width: 720px) {
    margin-top: 500px;
  }
`;


function Contact(props) {

    return (
        <>
        <Navbar />
          <ContactWrapper>
              <BoxesContainer>
                  <Box>
                    <h1>Kontakt</h1>
                      <h2>Vi uppskattar ditt intresse för vår skid- och snowboard-community.</h2>
                      <p>Om du har några frågor, funderingar eller om det är något specifikt du vill dela med oss, tveka inte att kontakta oss. Vi finns här för att hjälpa till och göra din upplevelse på vår sida så smidig och givande som möjligt.</p>
                      <p>Följ oss på sociala medier för de senaste uppdateringarna och gemenskap med likasinnade skid- och snowboardentusiaster. Du hittar oss på Facebook, Instagram, och Twitter.

                          Vi ser fram emot att höra från dig och önskar dig fantastiska skid- och snowboardupplevelser!</p>
                      <p>Följ oss på sociala medier!</p>
                      <SoMeBoxWrapper>
                          <SoMeBox>
                              <SvgWrapper>
                                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M16.5 7.5l0 .01" /></svg>
                              </SvgWrapper>
                          </SoMeBox>
                          <SoMeBox>
                              <SvgWrapper>
                                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-twitter" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z" /></svg>
                              </SvgWrapper>
                          </SoMeBox>
                          <SoMeBox>
                              <SvgWrapper>
                                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg>
                              </SvgWrapper>
                          </SoMeBox>
                      </SoMeBoxWrapper>
                  </Box>
              </BoxesContainer>
              <FormWrapper>
                  <h3>Hör av dig till oss!</h3>
                  <p>Vi uppskattar din passion för skidor och snowboards och är här för att göra din upplevelse ännu bättre. Har du frågor, önskemål eller behöver råd?</p>
                      <p>Fyll i formuläret nedan, och vårt team kommer att återkomma till dig snabbt.</p>
                      <p>Tack för att du väljer AlpineStore - din partner för en fantastisk vintersäsong!</p>
            <EmailForm />
              </FormWrapper>
          </ContactWrapper>
            <Footer />
        </>
    );
}

export default Contact;