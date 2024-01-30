import React from 'react';
import Navbar from "../components/Navbar.jsx";
import AccessorieList from '../components/AccessorieList.jsx';
import Footer from '../components/Footer.jsx';

function Accessories() {
    return (
        <>
            <Navbar />
            <AccessorieList></AccessorieList>
            <Footer />
        </>
    );
}

export default Accessories;