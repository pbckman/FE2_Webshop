import React from 'react';
import Navbar from "../components/Navbar.jsx";
import styled from "styled-components";
import Footer from "../components/Footer.jsx";
import AboutImg from "../components/images/backgroundimages/AboutPic.png";

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

const BoxesContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 40px;
  @media(max-width: 720px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Box = styled.div`
  margin: 0 40px 0 40px;
  height: 200px;
  width: 200px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  box-sizing: border-box;
  @media (max-width: 720px) {
    margin-top: 40px;
  }
`



const SvgWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  svg{
    width: 100px;
    height: 100px;
    color: #007BECFF;
  }
`

const BoxText = styled.div`
  display: flex;
  justify-content: center;
  font-weight: bold;
  padding: 20px 20px 0 20px;
  text-align: center;
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
                        <p>Utforska vårt sortiment online eller besök vår fysiska butik för att uppleva skid- och snowboardvärlden på nära håll. Oavsett om du är ute efter skidor, snowboards, pjäxor, eller goggles, kan du lita på att vårt engagerade team kommer att göra allt för att ge dig en exceptionell shoppingupplevelse.</p>

                        <p>Välkommen till vår skid- och snowboardbutik – där passion och prestanda möts för att skapa minnesvärda vinteräventyr!</p></MainText>
                </TextWrapper>
                <BoxesContainer>
                    <Box>
                        <SvgWrapper>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-truck-delivery" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" /><path d="M3 9l4 0" /></svg>
                        </SvgWrapper>
                        <BoxText>Fri frakt</BoxText>
                    </Box>
                    <Box>
                        <SvgWrapper>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-rocket" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3" /><path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3" /><path d="M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>
                        </SvgWrapper>
                        <BoxText>Leverans samma dag</BoxText>
                    </Box>
                    <Box>
                        <SvgWrapper>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-exchange" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M19 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M19 8v5a5 5 0 0 1 -5 5h-3l3 -3m0 6l-3 -3" /><path d="M5 16v-5a5 5 0 0 1 5 -5h3l-3 -3m0 6l3 -3" /></svg>
                        </SvgWrapper>
                        <BoxText>30 dagars öppet köp</BoxText>
                    </Box>
                </BoxesContainer>
            </AboutWrapper>
            <Footer />
        </>
    );
}
export default About;
