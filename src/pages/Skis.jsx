import React, {useEffect, useState} from 'react';
import Navbar from "../components/Navbar.jsx";
import axios from "axios";
import ProductListItem from "../components/ProductListItem.jsx";
import ProductList from "../components/ProductList.jsx";
import Footer from "../components/Footer.jsx";


function Skis(props) {
    return (
        <>
            <Navbar />
            <ProductList />
            <Footer />
        </>
    );
}

export default Skis;