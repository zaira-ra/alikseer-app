import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Productpage from "./Productpage";
import Homepage from "./Homepage";

export function Header(){
    return (
        <header class = "header">
            <div class ="logo">
                <img src="../images/logo.png" alt="logo" height="100"/>
            </div>
            <div class = "company-name">
                <h1> Alikseer </h1>
            </div>
            {/* I put routing in index.js, hope that's ok */}
            <nav>
                <Link to="/">Home</Link> {/*idk if this "/" will always work*/}
                <Link to="/Productpage">Products</Link>
                <Link to="/Loginpage">Login</Link>

            </nav>
        </header>
    );
}

export default Header;