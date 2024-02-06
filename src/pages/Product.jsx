import React, { useEffect, useState } from 'react';
import Navbar from "../components/Navbar.jsx";
import Footer from '../components/Footer.jsx';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const Wrapper = styled.div`
 display: flex;
 justify-content: space-around;


`
const ImgWrapper = styled.div`

width: 800px;
display: flex;
align-items: center;
justify-content: end;
img {
    
max-width: 80%;
max-height: 80%;

}
`
const InfoWrapper = styled.div`
width: 800px;
margin-top: 100px;
`

const Title = styled.div`

`

const Description = styled.div`

`

const Price = styled.div`
font-weight: bold;
margin-bottom: 50px;
`

const ButtonWrapper = styled.div`
button {
    margin-right: 10px;
}
`

const Quantity = styled.div`

`


const Product = () => {
    const { id } = useParams()
    const [product, setProduct] = useState()
    const [selectedSize, setSelectedSize] = useState()

    const sizeMappings = {
        size_boot42: "42",
        size_boot43: "43",
        size_boot44: "44",
        size_ski160: "160cm",
        size_ski170: "170cm",
        size_ski180: "180cm",
        size_snowboard144: "144cm",
        size_snowboard152: "152cm",
        size_snowboard160: "160cm",
        size_onesize: "Onesize"
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await axios.get(`http://localhost:1337/api/products/${id}?populate=*`)
                const productData = data.data.data

                console.log('API svar:', data.data)

                

                const sizes = Object.keys(productData.attributes)
                    .filter(key => key.startsWith("size_"))
                    .map(key => ({
                        size: key,
                        label: sizeMappings[key],
                        quantity: productData.attributes[key]
                    }))
                    .filter(size => size.quantity > 0)

                setProduct({
                    id: data.data.data.id,
                    title: productData.attributes.title,
                    price: productData.attributes.price,
                    description: productData.attributes.description,
                    image: productData.attributes.image.data.attributes.url,
                    sizes: sizes
                })
            } catch (error) {
                console.error('Error fetching product details:', error)

            }
        }

        fetchData()
    }, [id])

    const changeSize = (size) => {
        setSelectedSize(size)
    }

    return (
        <>
            <Navbar />
            {product ? (
                <>


                    <Wrapper>
                        <ImgWrapper> <img src={`http://localhost:1337${product.image}`} alt="" /> </ImgWrapper>

                        <InfoWrapper>

                            <Title> <h3>{product.title}</h3> </Title>
                            
                            <Description> <p>{product.description}</p> </Description>
                            
                            <Price> <p>{product.price} kr</p> </Price>
                            

                            <ButtonWrapper>
                                <h4>Välj storlek</h4>
                                {product.sizes.map((size) => (
                                    <button className='button'
                                        key={size.size}
                                        onClick={() => changeSize(size.size)}
                                    >
                                        {size.label}
                                    </button>
                                ))}
                            </ButtonWrapper>

                            <Quantity>
                                {selectedSize && (
                                    <p> {product.sizes.find(size => size.size === selectedSize)?.quantity} st i lager</p>
                                )}
                            </Quantity>

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