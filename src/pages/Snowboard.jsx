import React from 'react';
import Navbar from "../components/Navbar.jsx";
import SnowboardList from '../components/SnowboardList.jsx';

function Snowboards(props) {
    return (
        <>
            <Navbar />
            <div>SNOWBOARDS</div>
            <SnowboardList></SnowboardList>
        </>
    );
}

export default Snowboards;