import React, {useState} from 'react';
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import styled from "styled-components";
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow} from "@vis.gl/react-google-maps";

const FindUsWrapper = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BoxesContainer = styled.div`
  display: flex;
  justify-content: center;
  @media(max-width: 850px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Box = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 70vh;
  box-sizing: border-box;
  text-align: center;
  font-weight: bold;
  & > p:nth-of-type(1) {
    font-weight: normal
  }
  @media (max-width: 1000px) {
        width: 40vh
  } 
    @media (max-width: 600px) {
      width: 30vh
    }
  `;

function FindUs(props) {
    const key="AIzaSyCouw3X2DSkoxkQc5J8bJVw6NXYmbpBS6A"
    const mapId="43ea6d09da7e9a1d"
    const position = { lat: 59.34589, lng: 18.02383 };
    const [open, setOpen] = useState(false)
    return (
        <>
            <Navbar />
                <FindUsWrapper>
                    <BoxesContainer>
                        <Box>
                            <h1>Hitta oss!</h1>
                            <p>Välkommen till vår butik belägen i hjärtat av Solna, precis vid gränsen till Stockholm och nära Vasastan! Hos oss hittar du ett brett utbud av skidor, snowboards och tillbehör för din nästa äventyrsresa i snön. Kom och upptäck vår passion för vintersport!</p>

                                <p>Tomtebodavägen 3A</p>
                                    <p>171 65 Solna</p>
                                    <p>Sverige</p>
                            <APIProvider apiKey={key}>
                                <Map zoom={15} center={position} mapId={mapId}>
                                    <AdvancedMarker position={position} onClick={() => setOpen(true)}>
                                        <Pin background={"dodgerblue"} borderColor={"black"} glyphColor={"white"}/>
                                    </AdvancedMarker>

                                    {open && (
                                        <InfoWindow position={position} onCloseClick={() => setOpen(false)}>
                                            <p>Köp dina skidor och snowboards här!np</p>
                                        </InfoWindow>
                                        )}
                                </Map>
                            </APIProvider>
                        </Box>
                    </BoxesContainer>
                </FindUsWrapper>
            <Footer />

        </>
    );
}

export default FindUs;