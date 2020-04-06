import React from 'react';
import './HomePage.css';
import Navbar from '../components/Navbar/Navbar.js';
import Footer from '../components/Footer/FooterPage.js';
import Search from '../components/Main/Search.js';



function HomePage() {
    return (
        <div>
            <Navbar></Navbar>
            <Search></Search>
             <div className="homePageFooter">
                <Footer></Footer>
             </div>
        </div>
    );
  }
  
  export default HomePage;