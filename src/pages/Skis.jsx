import React, {useEffect, useState} from 'react';
import Navbar from "../components/Navbar.jsx";
import axios from "axios";
import ProductListItem from "../components/ProductListItem.jsx";
import ProductList from "../components/ProductList.jsx";
import Footer from "../components/Footer.jsx";
import SkiList from '../components/SkiList.jsx';



function Skis(props) {
    return (
        <>
            <Navbar />
            <SkiList />
            <Footer />
        </>
    );
}

export default Skis;