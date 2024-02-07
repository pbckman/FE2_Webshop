import React from 'react';
import styled from "styled-components";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import TOPImage from "../components/images/backgroundimages/TOPImage.jpg";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap; 
  justify-content: center;
  align-items: flex-start; 
  gap: 20px;
  padding: 30px 50px 30px 50px;
  background-image: url(${TOPImage});
  background-size: cover;
  background-position: center;
`;

const BoxContainer = styled.div`
  flex: 0 0 calc(50% - 20px); 
`;

const Box = styled.div`
  opacity: 85%;
  background-color: white;
  border: 3px solid #b1dcff;
  border-radius: 20px;
  padding: 20px;
  height: 450px;
  h1 {
    text-align: center;
  }
  h2 {
    font-size: 20px;
    padding: 0 40px 0 40px;
  }
  p {
    padding: 0 40px 0 40px;
    font-size: 14px;
  }
`;

function TermsOfPurchase(props) {
    return (
        <>
            <Navbar />
            <Container>
                <BoxContainer>
                    <Box><h1>Köpvillkor</h1>
                        <p>
                            <h2>Beställning och Betalning:</h2>

                            <p>Genom att placera en beställning hos oss godkänner du våra köpvillkor.
                            Betalning sker säkert via våra godkända betalningsmetoder.
                            </p>

                            <p>Alla priser på vår hemsida anges i SEK.
                            Priserna kan ändras utan förvarning, men din beställning kommer att faktureras till det pris som gäller vid tidpunkten för beställningen.
                            </p>

                            <h2>Säkerhet:</h2>
                            <p>Din säkerhet och sekretess är av yttersta vikt för oss. Vi använder säkra betalningsmetoder och skyddar dina personuppgifter enligt vår integritetspolicy.
                            Om du har några frågor eller funderingar är du välkommen att kontakta vår kundtjänst.
                            </p>
                        </p>
                    </Box>
                </BoxContainer>
                <BoxContainer>
                    <Box><h1>Leveranser</h1>
                        <p>
                            <h2>Leveranstid:</h2>

                            <p>Vi strävar efter att behandla och skicka din beställning så snabbt som möjligt. Normal leveranstid är 1-3 arbetsdagar, men vänligen notera att leveranstiden kan variera beroende på produkt och destination.
                            </p>

                            <h2>Frakt:</h2>
                            <p>Fraktkostnader kan tillkomma och varierar beroende på leveransdestinationen och storleken på din beställning. Priser för frakt presenteras tydligt vid kassan.
                            Spårning av Leverans:</p>

                            <p>När din beställning har skickats kommer du att få en bekräftelse via e-post tillsammans med en spårningslänk för att följa din leverans i realtid.
                            Problem med Leverans:</p>


                            <p>Om det skulle uppstå några problem med din leverans, vänligen kontakta vår kundtjänst så snart som möjligt så att vi kan hjälpa till att lösa situationen.
                            </p>
                        </p>
                    </Box>
                </BoxContainer>
                <BoxContainer>
                    <Box>
                        <p>
                        <h1>Öppet köp</h1>
                        <h2>Flexibilitet och Trygghet:</h2>

                        <p>Vi förstår att ibland kan en produkt inte uppfylla dina förväntningar. Med vårt öppna köp kan du känna dig trygg med ditt köp och ha möjlighet att returnera produkten om den inte passar dina behov.
                        </p>
                        <h2>Tidsram:</h2>

                        <p>Du har 30 dagar från mottagningsdatumet för att returnera produkten om du inte är helt nöjd med den. Detta ger dig gott om tid att testa produkten och fatta ett beslut.
                        </p>
                        <h2>Villkor för Retur:</h2>
                        <p>För att vara berättigad till öppet köp måste produkten vara oanvänd, i originalförpackning och i oskadat skick. Vi ber dig att returnera produkten i samma skick som den mottogs för att underlätta en smidig återbetalning.
                        </p>
                        </p>
                    </Box>
                </BoxContainer>
                <BoxContainer>
                    <Box><h1>Byten och returer</h1>
                    <p>
                        <h2>Returer:</h2>
                        <p>Om du av någon anledning inte är helt nöjd med ditt köp, har du rätt att returnera produkten inom 30 dagar från mottagningsdatumet.
                        Produkten måste vara oanvänd, i originalförpackning och i oskadat skick för att vara berättigad till retur. Se mer under "Öppet Köp".
                        </p>

                        <h2>Byten:</h2>
                        <p>Vi erbjuder också möjligheten till byte av produkt om du önskar en annan färg, storlek eller modell.
                        För att genomföra ett byte, vänligen kontakta vår kundtjänst för att arrangera den nödvändiga processen.
                        </p>

                        <h2>Återbetalning:</h2>
                        <p>När returen har mottagits och godkänts kommer återbetalningen att behandlas inom [antal arbetsdagar] och krediteras till det ursprungliga betalningsmedlet.
                        </p>
                    </p>
                    </Box>
                </BoxContainer>
            </Container>
            <Footer />
        </>
    );
}

export default TermsOfPurchase;