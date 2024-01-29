import styled from "styled-components";
import ProductListItem from "./ProductListItem";
import { useEffect, useState } from "react";
import axios from "axios";


const ProductListWrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
padding-left: 368px;
padding-right: 465px;
`


const ProductList = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function fetchData() {
            const data = await axios.get('http://localhost:1337/api/products/?populate=*')
            const tempArr = data.data.data.map(element => ({
                    id: element.id,
                    title: element.attributes.title,
                    price: element.attributes.price,
                    image: element.attributes.image.data.attributes.url
                }))
            setProducts(tempArr)
        }
        fetchData()
    }, [])

    return (

        <ProductListWrapper>
            
            {products.map(product => (
                <ProductListItem
                    key={product.id}  
                    title={product.title}
                    price={product.price}
                    image={product.image}
                />
            ))}
            
        </ProductListWrapper>
       
    )
}

export default ProductList