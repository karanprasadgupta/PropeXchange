import React from 'react'
import Bookingsitem from './Bookingsitem'
import Navbar from './Navbar';

function Bookings() {
    return (
        <>
            <Navbar/>
            <h1>History</h1>
            <Bookingsitem></Bookingsitem>
        </>
    )
}

export default Bookings;
