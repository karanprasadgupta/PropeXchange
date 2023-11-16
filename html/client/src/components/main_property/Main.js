import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Navigate, useParams } from 'react-router-dom';
import "./Main.css";
import Navbar from '../navbar/Navbar';
import { HeaderBar } from '../../components';
const loading = {
    margin: '1em',
    fontSize: '24px',
};

const title = {
    pageTitle: 'Home Screen',
};

function Main() {
    const [userData, setUserData] = useState({
        first_name: '',
        username: '',
        error: false,
        isLoading: true,
    });
    
    const params = useParams();
    
    useEffect(() => {
        const accessString = localStorage.getItem('JWT');
        if (accessString == null) {
        setUserData({
            isLoading: false,
            error: true,
        });
        } else {
        axios
            .get(`${process.env.REACT_APP_BASE_URL}/findUser`, {
            params: {
                username: params.username,
            },
            headers: { Authorization: `JWT ${accessString}` },
            })
            .then((response) => {
            setUserData({
                first_name: response.data.first_name,
                username: response.data.username,
                isLoading: false,
                error: false,
            });
            })
            .catch((error) => {
            console.error(error.response.data);
            setUserData({
                isLoading: false,
                error: true,
            });
            });
        }
    }, [params.username]);
    
    const { username, error, isLoading } = userData;

    if (isLoading) {
        return (
        <div>
            <HeaderBar title={title} />
            <div style={loading}>Loading Data...</div>
        </div>
        );
    }
    if(error===false){
    return (
        <>
        <Navbar/>
        <div className="har">
            <span>Sell or Rent your Property here</span>
        </div>
        <div className="whole">
            <div className="left">
                <div className="buy">Buy | Rent | Sale</div>
            </div>
            <div className="second">
                <div className="ee">
                    <label htmlFor="location">
                        <select name="location" id="location">
                            <option value="Delhi">Delhi</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Pune">Pune</option>
                            <option value="Goa">Goa</option>
                            <option value="Chennai">Chennai</option>
                        </select>
                    </label>
                </div>
                <div>
                    <input type="text" name="" id="ilove" placeholder="Locality Or Landmark"/>
                </div>
                <div className='search'>
                    <a href={`/${username}/search`}>Search</a>
                </div>
            </div>
            <div>
                <label htmlFor="rent">
                    <select name="rent" id="rent">
                        <option value="Type Home">Type of Home?</option>
                        <option value="Full House">Apartment</option>
                        <option value="Pg/Hostel">Independent house</option>
                        <option value="Flatmates">Flatmates</option>
                    </select>
                </label>
                <label htmlFor="BHK">
                    <select name="" id="">
                        <option value="BHK">BHK Type</option>
                        <option value="1 BHK">1 BHk</option>
                        <option value="2 BHK">2 BHK</option>
                        <option value="3 BHK">3 BHK</option>
                    </select>
                </label>
                <label htmlFor="availability">
                    <select name="availability" id="">
                        <option value="availability">availability</option>
                        <option value="within 15 days">within 15 days</option>
                        <option value="within 30 days">within 30 days</option>
                        <option value="after 30 days">after 30 days</option>
                    </select>
                </label>
                <label htmlFor="Budget">
                    <select name="Budget" id="">
                        <option value="availability">Budget</option>
                        <option value="within 15 days">Less Than 5000</option>
                        <option value="within 30 days">Less than 10000</option>
                        <option value="after 30 days">10000 or More</option>
                    </select>
                </label>
            </div>
        </div>
        </>
    )}
    return (
        <div>
        <HeaderBar title={title} />
        <div style={loading}>Problem fetching user data. Please login again.</div>
        <Navigate to={`/login`}/>
        </div>
    );
}

Main.propTypes = {
    // eslint-disable-next-line react/require-default-props
    params: PropTypes.shape({
        username: PropTypes.string.isRequired,
    }),
};

export default Main
