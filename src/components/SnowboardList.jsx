import styled from "styled-components";
import ProductListItem from "./ProductListItem";
import { useEffect, useState } from "react";
import axios from "axios";


const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
padding-inline-start: 400px;
padding-inline-end: 400px;
margin: 15px;
`


const SnowboardList = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function fetchData() {
            const data = await axios.get('http://localhost:1337/api/products?populate=*&filters[quantities][quantity][$gte]=0&filters[category][id][$eq]=12')
            

            const tempArr = data.data.data.map((element) => {
                     
                    const quantities = element.attributes.quantities.data;
                    const isInStock = quantities.some((quantityObj) => quantityObj.attributes.quantity > 0);

                    return {
                    id: element.id,
                    title: element.attributes.title,
                    price: element.attributes.price,
                    image: element.attributes.image.data.attributes.url,
                    quantity: quantities,
                    isInStock: isInStock,
                    };
                })
            setProducts(tempArr)
        }
        fetchData()
    }, [])

    return (
        
        <Wrapper>
            
            {products.map(product => (
                <ProductListItem
                    key={product.id} 
                    id={product.id} 
                    title={product.title}
                    price={product.price}
                    image={product.image}
                    quantity={product.quantity}
                    isInStock={product.isInStock}
                />
            ))}
            
        </Wrapper>
       
    )
}

export default SnowboardList