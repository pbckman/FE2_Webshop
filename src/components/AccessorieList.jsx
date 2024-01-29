import styled from "styled-components";
import ProductListItem from "./ProductListItem";
import { useEffect, useState } from "react";
import axios from "axios";


const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;
padding-inline-start: 370px;
padding-inline-end: 370px;
margin: 15px;
`


const AccessorieList = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function fetchData() {
            const data = await axios.get('http://localhost:1337/api/products?populate=*&filters[category][id][$eq]=4&filters[category][id][$eq]=5')
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

        <Wrapper>
            
            {products.map(product => (
                <ProductListItem
                    key={product.id}  
                    title={product.title}
                    price={product.price}
                    image={product.image}
                />
            ))}
            
        </Wrapper>
       
    )
}

export default AccessorieList