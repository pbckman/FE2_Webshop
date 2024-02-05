import styled from "styled-components";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

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
    h6 {
    font-size: 10px;
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
const TitleWrapper = styled.div`
position: relative;
bottom: 5px;
width: 170px;
left: 10px;

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    transition: color 0.3s ease-in-out;
  }

  a:hover {
    cursor: pointer;
    color: #00abfb; 
  }

`

const ProductQuantity = styled.div`
position: absolute;
left: 170px;
bottom: 6px;
 p {
    font-size: 10px;
    font-weight: bold;
}
`

const PriceWrapper = styled.div`
position: absolute;
bottom: 0px;
left: 10px;
`


const ProductListItem = (props) => {

    const  { isInStock } = props;

    console.log('ProductListItem props:', props);

    return (
        <ProductWrapper>
            <ImgWrapper>
                <ShoppingCart>
                    
                </ShoppingCart>
                <img src={`http://localhost:1337${props.image}`} alt="" />
                
            </ImgWrapper>

            <TitleWrapper>
                <Link to={`/products/${props.id}`} >  
                <h3>{props.title}</h3>
                </Link>
            </TitleWrapper>

            <ProductQuantity style={{ color: isInStock ? "green" : "red" }}>
                <p>
                    {isInStock
                        ? `Finns i lager`
                        : "Finns ej i lager"
                    }
                </p>
            </ProductQuantity>

            <PriceWrapper>
                <p>{props.price} kr </p>
            </PriceWrapper>

        </ProductWrapper>
    )
}


export default ProductListItem;