import React from 'react';
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import SkiList from '../components/SkiList.jsx';



function Skis() {
    return (
        <>
            <Navbar />
            <SkiList />
            <Footer />
        </>
    );
}

export default Skis;