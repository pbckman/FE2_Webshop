import React from 'react';
import Navbar from "../components/Navbar.jsx";
import styled from "styled-components";
import Footer from "../components/Footer.jsx";
import AboutImg from "../components/images/backgroundimages/AboutPic1.png";

const AboutWrapper = styled.div`
  height: auto;
  
`;

const AboutPic = styled.div`
  background: url(${AboutImg}) no-repeat;
  background-size: contain;
  height: 250px;
  width: 100%;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h1`
  text-align: center;
`;

const SubHeading = styled.h2`
  text-align: center;
  padding: 0 20px 0 20px;
`;

const MainText = styled.div`
    width: 50%;
  & > p:nth-of-type(4) {
    font-weight: bold;
    text-align: center;
    padding: 20px 0 40px 0;
  }
`;




function About(props) {
    return (
        <>
            <Navbar />
            <AboutWrapper>
                <AboutPic />
                <TextWrapper>
                    <Heading>Om butiken</Heading>
                    <SubHeading>Skräddarsydda alpinupplevelser för alla – Upptäck vårt sortiment och expertis!</SubHeading>
                    <MainText>Välkommen till vår skidbutik, din ultimata destination för skidälskare och vinterentusiaster! Hos oss hittar du inte bara ett brett sortiment av högkvalitativa skidprodukter, utan också expertis och passion för att göra din skidupplevelse oförglömlig.

                        <p>Vi förstår att varje skidåkare är unik, och därför strävar vi efter att erbjuda skräddarsydda lösningar som passar just dina behov och preferenser. Oavsett om du är nybörjare som letar efter det perfekta utrustningspaketet eller en erfaren åkare som söker de senaste tekniska innovationerna, finns vårt kunniga team här för att vägleda dig.</p>

                        <p>Men det är inte allt - vi är stolta över att erbjuda inte bara skidor utan även ett omfattande utbud av snowboards och tillbehör. Vårt fokus på kvalitet och hållbarhet sträcker sig över hela vårt sortiment, och vi kuraterar noggrant produkter från ledande varumärken inom både skid- och snowboardindustrin.</p>

                        <p>Utforska vårt sortiment online eller besök vår fysiska butik för att uppleva skid- och snowboardvärlden på nära håll. Oavsett om du är ute efter skidor, snowboards, stavar, kläder eller tillbehör, kan du lita på att vårt engagerade team kommer att göra allt för att ge dig en exceptionell shoppingupplevelse.</p>

                        <p>Välkommen till vår skid- och snowboardbutik – där passion och prestanda möts för att skapa minnesvärda vinteräventyr!</p></MainText>
                </TextWrapper>
            </AboutWrapper>
            <Footer />
        </>
    );
}

export default About;