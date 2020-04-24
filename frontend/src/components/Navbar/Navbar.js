import React from 'react';
import logo from '../../logo.svg';
import './Navbar.scss';
import {Link} from 'react-router-dom';
export default function Navbar(){
    return (
        <nav className="navbar">
            <h1>Nobel Info</h1>
            <ul className="nav-links">
                <Link to="/">
                    <li className="nav-link">Search</li>
                </Link>
                <Link to="/directory">
                    <li className="nav-link directoryNav">Nobel Prize Directory</li>
                </Link>
                <Link to="/about">
                    <li className="nav-link aboutNav">About</li>
                </Link>

             </ul>   
        </nav>
    );
}