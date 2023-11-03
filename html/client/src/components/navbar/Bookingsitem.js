import { useState,useEffect } from "react";
import React from 'react'
import "./Bookingsitem.css"
import axios from "axios";
function Bookingsitem(props) {
    const [imageData, setImageData] = useState(null);
    const delprop = async () => {
        const propertyId = props.booking.id;
        const accessString = localStorage.getItem('JWT');
        try {
            const response = await axios.delete(
                `${process.env.REACT_APP_BASE_URL}/deleteproperty`,
                {
                    headers: { Authorization: `JWT ${accessString}` },
                    data: { id: propertyId },
                },
            );
            alert('Property deleted successfully');
            window.location.reload();
        } catch (error) {
            alert('Something went wrong!');
            console.error(error.response.data);
        }
    }
    useEffect(() => {
        // Assuming props.booking.imagefile is a BLOB or ArrayBuffer containing the image data
        console.log(props.booking.imagefile);
        const blob = new Blob([props.booking.imagefile]);
        const url = URL.createObjectURL(blob);
        console.log(url,"haes");
        setImageData(url);
    }, [props.booking.imagefile]);
    return (
        <>
        <div className='mm1'>
            <div className='mm11'>
                <div className='mm111'>
                    <p>{props.booking.apartment}</p>
                    <p>Apartment Name   : {props.booking.apartmentname}</p>
                </div>
                <div className='mm111'>
                    <p>{props.booking.bhk}</p>
                    <p>Which Floor : {props.booking.floor}</p>
                    <p>Total Floor : {props.booking.totalfloor}</p>
                </div>
                <div className='mm111'>
                    <p>Rent : {props.booking.expectedrent}</p>
                    <p>Deposit : {props.booking.expectedDepost}</p>
                </div>
                <div className='mm111'>
                    <p>State : {props.booking.state}</p>
                    <p>Property Age : {props.booking.propertyage}</p>
                </div>
            </div>
            <div className='ex'> 
                <img src={imageData} alt="this is image" />
                <p>Available From : {props.booking.date}</p>
            </div>
        </div>
        <div className='harshrit'>
            <button onClick={delprop}>Delete Property</button>
        </div>
        </>
    )
}

export default Bookingsitem;
