import styled from "styled-components";
import ProductListItem from "./ProductListItem";


const ProductListWrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
padding-left: 368px;
padding-right: 465px;
`


function ProductList() {

    return (

        <ProductListWrapper>
            
            <ProductListItem />
            <ProductListItem />
            <ProductListItem />
            <ProductListItem />
            <ProductListItem />
            <ProductListItem />
            <ProductListItem />
            <ProductListItem />
            <ProductListItem />
            <ProductListItem />
            <ProductListItem />
            
            
        </ProductListWrapper>
       
    )
}

export default ProductList