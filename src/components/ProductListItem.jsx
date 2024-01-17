import styled from "styled-components";

const ProductWrapper = styled.div`
position: relative;
    width: 250px;
    height: 310px;
    background-color: #f0f8ff;
    padding: 15px;
    border-radius: 30px;
`
const ImgWrapper = styled.div`
position: relative;
    img {
    max-width: 60%;
    max-height:60%;
    border-radius: 20px;
}
    display: flex;
    justify-content: center;
`

const ShoppingCart = styled.div`
position: absolute;
top: 10px;
right: 10px;
`
const DescriptionWrapper = styled.div`
position: absolute;
bottom: 20px;
width: 170px;
`
const PriceWrapper = styled.div`
position: absolute;
right: 10px;
width: 50px;
bottom: 20px;
`

const ProductQuantity = styled.div`
position: absolute;
bottom: 7px;
`


function ProductListItem() {
    return (
        <ProductWrapper>
            <ShoppingCart>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart" width="34" height="34" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M17 17h-11v-14h-2" />
                    <path d="M6 5l14 1l-1 7h-13" />
                </svg>
            </ShoppingCart>

            <ImgWrapper>
                <img src="\src\components\images\skis\ski_atomic_1.avif" alt="" />
            </ImgWrapper>

            <DescriptionWrapper>
                <h3>K2 Mindbender</h3>
                <p>Men's Mindbender 96C allmountainskidor</p>
            </DescriptionWrapper>

            <PriceWrapper>
                <h3>299$</h3>
            </PriceWrapper>

            <ProductQuantity>
                *Prod quant*
            </ProductQuantity>

        </ProductWrapper>
    )
}


export default ProductListItem;