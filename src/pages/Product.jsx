import React, { useEffect, useState, useContext } from 'react';
import Navbar from "../components/Navbar.jsx";
import Footer from '../components/Footer.jsx';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { CartContext } from '../components/CartContext.jsx';
import SkiQuantitySelector from '../components/QuantityOfProductSelector.jsx';
import CustomAlert from '../components/CustomAlert.jsx';

const Wrapper = styled.div`
 display: flex;
 justify-content: space-around;

 @media (max-width: 600px) {
  flex-direction: column;
 }
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

@media (max-width: 600px) {
  margin-right: 0;
  margin-bottom: 10px;
 }
`
const InfoWrapper = styled.div`
width: 800px;
margin-top: 100px;

@media (max-width: 600px) {
  order: -1;
 }
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

.button-size:focus {
outline: 3px solid #F2A42A;
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
  margin-left: 0px;
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


const ModalContainer = styled.div`
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1001;
`;


const Product = () => {
    const { id } = useParams()
    const [product, setProduct] = useState()
    const [selectedSize, setSelectedSize] = useState()
    const [quantity, setQuantity] = useState(1); 
    const { cart, dispatch } = useContext(CartContext); 
    const [showPopup, setShowPopup] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [inCartQuantity, setInCartQuantity] = useState(0);

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

                if (sizes.length > 0) {
                    setSelectedSize(sizes[0].size)
                }
            } catch (error) {
                console.error('Error fetching product details:', error)

            }
        }

        fetchData()
    }, [id])

    useEffect(() => {
        const productInCart = cart.items.find(item => item.product.id === product?.id && item.product.selectedSize === selectedSize);
        setInCartQuantity(productInCart ? productInCart.product.quantity : 0);
      }, [cart, product, selectedSize]);

    const changeSize = (size) => {
        setSelectedSize(size)
    }


const Modal = ({ show, onClose, alertMessage }) => {
  return (
    <ModalContainer show={show}>
      <CustomAlert message={alertMessage} onClose={onClose} />
    </ModalContainer>
  );
};

const handleAddToCart = () => {
    const selectedSizeProduct = product?.sizes?.find(size => size.size === selectedSize);
  if (!selectedSizeProduct) {
    setShowModal(true);
    setTimeout(() => setShowModal(false), 7000);
    return;
  }

  const availableQuantity = selectedSizeProduct.quantity;
  const totalQuantityInCart = inCartQuantity + quantity;

  if (totalQuantityInCart > availableQuantity) {
    setShowModal(true);
    setTimeout(() => setShowModal(false), 7000);
    return;
  }
    if (selectedSizeProduct && quantity <= selectedSizeProduct.quantity) {
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
    setTimeout(() => setShowPopup(false), 1500);
  } 
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

                            <AddToCart>
                            <SkiQuantitySelector quantity={quantity} setQuantity={setQuantity} />
                            <div style={{position: 'relative', width: '180px', top: '10px', left: '-5px', background: 'lightblue', padding: '15px', borderRadius: '5px', marginLeft: '5px'}}>Antal i varukorgen: {inCartQuantity}</div>
                            <StyledButton onClick={() => window.history.back()}>Tillbaka</StyledButton>
                            <StyledButton onClick={handleAddToCart}>Lägg Till</StyledButton>
                            {showPopup && (
                            <div style={{ position: 'fixed', bottom: '20px', right: '20px', background: 'lightgreen', padding: '15px', borderRadius: '5px' }}>
                                Tillagd till varukorgen
                            </div>
                            )}
                            <Modal show={showModal} onClose={() => setShowModal(false)} alertMessage={`Antingen så är det slut på produkten, eller så har vi inte så många i lager. Var god välj rätt antal!`} />
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