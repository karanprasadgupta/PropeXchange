import React, { useState } from 'react'
import axios from "axios";
import "./Postyourproperty.css"
import Navbar from './Navbar';
function Mybooking() {
    const [credentials,setCredentials]=useState({apartment:"",apartmentname:"",bhk:"",floor:"",totalfloor:"",propertyage:"",expectedrent:0,expectedDepost:0,date:""});
    const handleSubmit= async (e)=>{
        e.preventDefault();
        const accessString = localStorage.getItem('JWT');
        try {
        const response = await axios.post(
            `${process.env.REACT_APP_BASE_URL}/postyourproperty`,
            credentials,
            {
              headers: { Authorization: `JWT ${accessString}` },
            },
          );
        console.log(response);
        alert("Property posted successfully");
        } catch (error) {
            alert("Something went wrong!");
            console.error(error.response.data);
        }
    }
    const onChange=(e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
    }
    return (
        <>
        <Navbar></Navbar>
        <div className='main'>
        <h1>Property details</h1>
        <form onSubmit={handleSubmit}>

            <div className='ee1'>
                <label htmlFor="apartment">Apartment type:
                    <select name="apartment" id="apartment" value={credentials.apartment} onChange={onChange}>
                        <option value="apartment">apartment</option>
                        <option value="independent house">independent house</option>
                        <option value="Flatmates">Flatmates</option>
                    </select>
                </label>
                <input type="text" placeholder="apartment name" name='apartmentname' required maxLength={20} value={credentials.apartmentname} onChange={onChange}/>
            </div>
            <div className='love'>
            <label htmlFor="bhk">BHK type:
                    <select name="bhk" id="bhk" value={credentials.bhk} onChange={onChange}>
                        <option value="1bhk">1bhk</option>
                        <option value="2bhk">2bhk</option>
                        <option value="3bhk">3bhk</option>
                        <option value="4bhk">4bhk</option>
                        <option value="5bhk">5bhk</option>
                    </select>
                </label>
                <div className='floor'>Which Floor:
                    <input type="text" placeholder='Which floor?' name='floor'  required maxLength={20} value={credentials.floor} onChange={onChange}/>
                </div>
                <div>Total floor
                    <input type="text" placeholder='Total floor'name='totalfloor' required maxLength={20} value={credentials.totalfloor} onChange={onChange}/>
                </div>
            </div>
            <div className='rot'>
                <div>Property Age:
                    <input type="text" placeholder='property age' name='propertyage' required maxLength={20} value={credentials.propertyage} onChange={onChange}/>
                </div>
                <div>Expected Rent:
                    <input type="text" required maxLength={20} name='expectedrent' value={credentials.expectedrent} onChange={onChange}/>
                </div>
                <div>Expected Deposit
                    <input type="text" required maxLength={20} name='expectedDepost' value={credentials.expectedDepost} onChange={onChange}/>
                </div>
            </div>
            <div className='submit'>
                <div className='date'>Available from:
                    <input type="date" name="date" id="date" required maxLength={20} value={credentials.date} onChange={onChange}/>
                </div>
                <input type="submit" value="Post your Property!!!" />
            </div>
        </form>
        </div>
        </>
    )
}

export default Mybooking;
