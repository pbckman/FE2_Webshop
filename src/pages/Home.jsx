import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Frontpage from "../components/images/backgroundimages/Frontpage.jpg";
import NewProdList from '../components/NewProdList.jsx';
import Footer from "../components/Footer.jsx";
import { Link } from 'react-router-dom';


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

const NewProducts = styled.div`
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
    };

    return (
        <>
            <Navbar />
            <FrontPic>
                <HeroText>
                    <HeroHeading>Ny Kollektion</HeroHeading>
                    <HeroSubheading>2024 Säsong</HeroSubheading>
                    <Link to="/allproducts">
                    <OrderButton onClick={handleOrderClick}>Beställ Nu</OrderButton>
                    </Link>
                </HeroText>
                
            </FrontPic>

            <NewProducts> <h1>Nyinkomna produkter</h1> </NewProducts>
            <NewProdList />
        <Footer />

        </>
    );
}

export default Home;