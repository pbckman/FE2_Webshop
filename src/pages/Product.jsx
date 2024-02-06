import React, { useEffect, useState } from 'react';
import Navbar from "../components/Navbar.jsx";
import Footer from '../components/Footer.jsx';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const Wrapper = styled.div`
 display: flex;
`
const ImgWrapper = styled.div`
img {
max-width: 80%;
max-height: 80%;

}
`
const InfoWrapper = styled.div`

`


const Product = () => {
    const { id } = useParams()
    const [product, setProduct] = useState()

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await axios.get(`http://localhost:1337/api/products/${id}?populate=*`)
                const productData = data.data.data

                console.log('API svar:', data.data)

                setProduct({
                    id: data.data.data.id,
                    title: productData.attributes.title,
                    price: productData.attributes.price,
                    image: productData.attributes.image.data.attributes.url
                })
            } catch (error) {
                console.error('Error fetching product details:', error)

            }
        }

        fetchData()
    }, [id])

    return (
        <>
            <Navbar />
            {product ? (
                <>


                    <Wrapper>
                        <ImgWrapper> <img src={`http://localhost:1337${product.image}`} alt="" /> </ImgWrapper>

                        <InfoWrapper>
                            <h3>{product.title}</h3>

                            <p>{product.price} kr</p>

                        </InfoWrapper>

                    </Wrapper>

                </>
            ) : (
                <p>Laddar...</p>
            )}

            <Footer />
        </>
    );
}

export default Product;