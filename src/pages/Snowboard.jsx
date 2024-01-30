import React from 'react';
import Navbar from "../components/Navbar.jsx";
import SnowboardList from '../components/SnowboardList.jsx';
import Footer from '../components/Footer.jsx';

function Snowboards() {
    return (
        <>
            <Navbar />
            <SnowboardList></SnowboardList>
            <Footer />
        </>
    );
}

export default Snowboards;