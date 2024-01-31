import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Frontpage from "../components/images/backgroundimages/Frontpage.jpg";
import Checkout from './Checkout';
import Skis from './Skis';
import NewProductList from '../components/NewProductList';
import Footer from "../components/Footer.jsx";


const FrontPic = styled.div`
  background: url(${Frontpage}) no-repeat center center;
  background-size: cover;
  height: 600px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
`;

const HeroText = styled.div`
  position: absolute;
  left: 10%; 
  top: 50%;
  transform: translateY(-50%);
  color: white;
  text-align: left;
`;

const HeroHeading = styled.h2`
  font-size: 1.5em; 
  margin-bottom: 0.25em;
  text-shadow: 2px 2px 2px #000;
`;

const HeroSubheading = styled.h1`
  font-size: 2.5em; 
  margin: 0.25em 0 1em 0;
  text-shadow: 2px 2px 2px #000;
`;

const OrderButton = styled.button`
  background-color: #000;
  color: white;
  padding: 1em 2em;
  font-size: 1em;
  border: none;
  cursor: pointer;
  transition: background-color 0.5s ease;
  margin: 0em 0 1em 0;

  &:hover {
    background-color: #444;
  }
`;

const ContainersWrapper = styled.div`
  display: flex;
  justify-content: space-around; // Ger mellanrum mellan varje container
  align-items: center; // Centrerar innehållet vertikalt inuti varje container
  margin: 20px 0; // Ger lite utrymme ovanför och under containrarna
`;

const Container = styled.div`
  flex-basis: 22%; // Ger varje container en basbredd, lite mindre än en fjärdedel för att kompensera för mellanrum
  height: 150px; // Ersätt med önskad höjd
  background-color: #f0f0f0; // Lägg till en bakgrundsfärg så att containrarna syns
  border: 1px solid #ccc; // Lägg till en gräns för att definiera containerns kanter
  margin: 0 10px; // Ger mellanrum mellan containrarna

  // Lägg till responsivitet om det behövs
  @media (max-width: 768px) {
    flex-basis: 48%; // Större basbredd för att visa två containrar per rad på mindre skärmar
    margin: 10px; // Mindre marginal för att passa innehållet
  }

  @media (max-width: 480px) {
    flex-basis: 98%; // En container per rad på mycket små skärmar
  }
`;
const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;
padding-inline-start: 370px;
padding-inline-end: 370px;
margin: 15px;
`
function Home (props) {
   
    const handleOrderClick = () => {
        // Här kan du använda props.history.push('/desired-path') om du använder React Router
    };

    return (
        <>
            <Navbar />
            <FrontPic>
                <HeroText>
                    <HeroHeading>Ny Kollektion</HeroHeading>
                    <HeroSubheading>2024 Säsong</HeroSubheading>
                    <OrderButton onClick={handleOrderClick}>Beställ Nu</OrderButton>
                </HeroText>
                
            </FrontPic>
        <Footer />

        </>
    );
}

export default Home;