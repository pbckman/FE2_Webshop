import styled from "styled-components";
import SkiLengthDropdown from "./SkiLengthDropdown";
import SkiQuantitySelector from "./QuantityOfProductSelector";

const ShoppingCartWrapper = styled.div`
height: 270px;
width: 910px;
background-color: aliceblue;
position: relative;
border-radius: 30px;
border: 3px solid #f0f8ff;
overflow: hidden;
margin-top: 20px;
h3, p, label {
    font-family: "Montserrat", sans-serif;
    }
`

const ImageWrapper = styled.div`
height: 310px;
width: 300px;
background-color: #ffffff;
position: relative;
display: flex;
justify-content: center;
img {
    max-width: 90%;
    max-height: 90%;
}

`

const HeadlineWrapper = styled.div`
height: 90px;
width: 500px;
background-color: aliceblue;
position: absolute;
right: 100px;
top: 0px;
`

const PriceWrapper = styled.div`
height: 90px;
width: 100px;
background-color: aliceblue;
position: absolute;
right: 0px;
top: 0px;
`

const ItemSpecifics = styled.div`
height: 60px;
width: 600px;
background-color: aliceblue;
position: absolute;
right: 0px;
bottom: 110px;
`

const ItemAmount = styled.div`
height: 110px;
width: 600px;
background-color: aliceblue;
position: absolute;
right: 0px;
bottom: 0px;
`

function ShoppingCartListItem() {
    return (
        <ShoppingCartWrapper>

        <ImageWrapper>
        <img src="\src\components\images\skis\ski_atomic_1.avif" alt="" />
        </ImageWrapper>

        <HeadlineWrapper>
            <h3>Atomic Bent 100</h3>
        </HeadlineWrapper>

        <PriceWrapper>
            <h3>$399</h3>
        </PriceWrapper>

        <ItemSpecifics>
            <SkiLengthDropdown />
        </ItemSpecifics>
    
        <ItemAmount>
            <SkiQuantitySelector />
        </ItemAmount>

        </ShoppingCartWrapper>
    )
}

export default ShoppingCartListItem