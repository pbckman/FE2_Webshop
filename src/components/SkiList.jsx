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
  @media (max-width: 1500px) {
    padding-inline-start: 50px;
    padding-inline-end: 50px;
    justify-content: center;
  }

  @media (max-width: 600px) {
    padding-inline-start: 20px;
    padding-inline-end: 20px;
    justify-content: center;
  }

  @media (max-width: 400px) {
    padding-inline-start: 10px;
    padding-inline-end: 10px;
    justify-content: center;
  }
`


const SkiList = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function fetchData() {
            const data = await axios.get('http://localhost:1337/api/products?populate=*&filters[category][id][$eq]=3')
            

            const tempArr = data.data.data.map((element) => {
                     
                    const sizes = Object.keys(element.attributes)
                    .filter((key) => key.startsWith("size_"))
                    .map((key) => element.attributes[key])

                    const isInStock = sizes.some((quantity) => quantity > 0);

                    return {
                    id: element.id,
                    title: element.attributes.title,
                    price: element.attributes.price,
                    image: element.attributes.image.data.attributes.url,
                    sizes: sizes,
                    isInStock: isInStock
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
                    sizes={product.sizes}
                    isInStock={product.isInStock}
                />
            ))}
            
        </Wrapper>
       
    )
}

export default SkiList