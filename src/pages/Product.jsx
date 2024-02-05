import React, { useEffect, useState } from 'react';
import Navbar from "../components/Navbar.jsx";
import Footer from '../components/Footer.jsx';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const Product = () => {
    const { id } = useParams()
    const [product, setProduct] = useState()

    useEffect(() => {
        async function fetchData() {
            try {
            const data = await axios.get(`http://localhost:1337/api/products?${id}`)
            const productData = data.data.data

            console.log('API svar:', data.data)

            setProduct({
                id: data.data.data.id,
                title: productData.title,
                price: productData.price,
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
                    <h3>{product.title}</h3>
                    <p>{product.price}</p>
                </>
            ) : (
                <p>Laddar...</p>
            )}

            <Footer />
        </>
    );
}

export default Product;