import React from 'react';
import logo from '../../logo.svg';
import './Navbar.scss';
export default function Navbar(){
    return (
        <nav className="navbar">
            <img src={logo} alt="city tours"/>
            <ul className="nav-links">
                <li><a href="/" className="nav-link active">Search</a></li>
                <li><a href="/" className="nav-link">Nobel Prize Directory</a></li>
                <li><a href="/" className="nav-link">About</a></li>

             </ul>   
        </nav>
    );
}