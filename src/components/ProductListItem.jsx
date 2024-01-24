import styled from "styled-components";

const ProductWrapper = styled.div`
position: relative;
    width: 250px;
    height: 380px;
    background-color: #f0f8ff;
    border: 3px solid #f0f8ff;
    border-radius: 20px;
    overflow: hidden;
    margin-top: 40px;
    h3, p {
        font-family: "Montserrat", sans-serif;
        font-size: 15px;
    }
`
const ImgWrapper = styled.div`
position: relative;

    img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 0px;
}
    display: flex;
    
`

const ShoppingCart = styled.div`
position: absolute;
top: 10px;
right: 10px;
`
const DescriptionWrapper = styled.div`
position: relative;
bottom: 5px;
width: 170px;
left: 10px;
`

const ProductQuantity = styled.div`
position: absolute;
left: 170px;
width: 100px;
bottom: 0px;
`

const PriceWrapper = styled.div`
position: absolute;
bottom: 0px;
left: 10px;
`


function ProductListItem() {
    return (
        <ProductWrapper>
            <ImgWrapper>
            <ShoppingCart>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M17 17h-11v-14h-2" />
                    <path d="M6 5l14 1l-1 7h-13" />
                </svg>
            </ShoppingCart>

            
                <img src="\src\components\images\skis\ski_atomic_1.avif" alt="" />
            </ImgWrapper>

            <DescriptionWrapper>
                <h3>Atomic Bent 100</h3>
            </DescriptionWrapper>

            <ProductQuantity>
                <h3>x i lager</h3>
            </ProductQuantity>

            <PriceWrapper>
                <p>4 999kr</p>
            </PriceWrapper>

        </ProductWrapper>
    )
}


export default ProductListItem;