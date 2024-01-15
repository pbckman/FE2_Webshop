import styled from "styled-components";
import SkiLengthDropdown from "./SkiLengthDropdown";
import SkiQuantitySelector from "./QuantityOfProductSelector";

const ShoppingCartWrapper = styled.div`
height: 310px;
width: 910px;
background-color: aliceblue;
position: relative;
border-radius: 30px;
overflow: hidden;
`

const ImageWrapper = styled.div`
height: 310px;
width: 300px;
background-color: #f1f1f1;
position: relative;
display: flex;
justify-content: center;
img {
    max-width: 100%;
    max-height:100%;
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
        <img src="https://media.viskanassets.com/v2/sportshopenprod/normal/A141263_NOCOLOUR_01.jpg" alt="" />
        </ImageWrapper>

        <HeadlineWrapper>
            <h3>K2 Mindbender</h3>
        </HeadlineWrapper>

        <PriceWrapper>
            <h3>$299</h3>
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