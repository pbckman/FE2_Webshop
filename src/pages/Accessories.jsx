import React from 'react';
import Navbar from "../components/Navbar.jsx";
import AccessorieList from '../components/AccessorieList.jsx';

function Accessories(props) {
    return (
        <>
            <Navbar />
            <div>ACCESSORIES</div>
            <AccessorieList></AccessorieList>
            
        </>
    );
}

export default Accessories;