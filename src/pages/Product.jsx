import React, { useEffect, useState, useContext } from 'react';
import Navbar from "../components/Navbar.jsx";
import Footer from '../components/Footer.jsx';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { CartContext } from '../components/CartContext.jsx'; // Importera din CartContext

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

.button-size {
  background-color: #0276FF;
  border-radius: 8px;
  border-style: none;
  color: #fff;
  cursor: pointer;
  font-size: 80%;
  margin-right: 10px;
  padding: 10px 21px;
  text-align: center;
}

.button-size:hover {
  background-color: #1C84FF;
}
`

const AddToCart = styled.div`

`
const Quantity = styled.div`
`

const StyledButton = styled.button`
  width: 150px;
  padding: 15px;
  margin: 30px;
  background-color: ${(props) => (props.disabled ? '#003b6b' : '#007BECFF')};
  color: ${(props) => (props.disabled ? '#b9b9b9' : '#ffffff')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  border-radius: 10px;
  border: 1px solid lightgrey;

  &:hover {
    background-color: ${(props) => (props.disabled ? '#007BECFF' : '#005fa3')};
  }
  @media (max-width: 800px) {
    width: 200px;
  }
`

const StyledLabel = styled.div`
font-weight: bold;
margin-top: 30px;
margin-bottom: 20px;
`

const StyledQuantity = styled.div`
`;


const Product = () => {
    const { id } = useParams()
    const [product, setProduct] = useState()
    const [selectedSize, setSelectedSize] = useState()
    const [quantity, setQuantity] = useState(1); 
    const { dispatch } = useContext(CartContext); 
    const [showPopup, setShowPopup] = useState(false);

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
                // 
                if (sizes.length > 0) {
                    setSelectedSize(sizes[0].size)
                }
            } catch (error) {
                console.error('Error fetching product details:', error)

            }
        }

        fetchData()
    }, [id])

    const changeSize = (size) => {
        setSelectedSize(size)
    }

    const handleAddToCart = () => {
        dispatch({
          type: 'ADD_TO_CART',
          payload: {
            product: {
              id: product.id,
              title: product.title,
              price: product.price,
              selectedSize,
              quantity,
            },
          },
        });
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000);
      };
      

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
                                    <button className='button-size'
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

                            
                            <StyledLabel>Välj Antal</StyledLabel>
                            <StyledQuantity>    
                                <input
                                    type="number"
                                    value={quantity}
                                    onChange={(e) => setQuantity(e.target.value)}
                                    min="1"
                                />
                            </StyledQuantity>

                            <AddToCart>
                            <StyledButton onClick={() => window.history.back()}>Tillbaka</StyledButton>
                            <StyledButton onClick={handleAddToCart}>Lägg Till</StyledButton>
                            {showPopup && (
                            <div style={{ position: 'fixed', bottom: '20px', right: '20px', background: 'lightgreen', padding: '15px', borderRadius: '5px' }}>
                                Tillagd till varukorgen
                            </div>
                            )}
                            </AddToCart>

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

export default Product