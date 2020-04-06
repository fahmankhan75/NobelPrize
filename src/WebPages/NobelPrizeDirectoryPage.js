import React from 'react';
import Navbar from '../components/Navbar/Navbar.js';
import Footer from '../components/Footer/FooterPage.js';
import NobelPrizeTable from '../components/Main/NobelPrizeTable.js';
import './NobelPrizeDirectoryPage.css';


function NobelPrizeDirectoryPage() {
    return (
    <div>
        <Navbar></Navbar>
        <NobelPrizeTable></NobelPrizeTable>
        <div className="nobelPrizePage">
            <Footer></Footer>
        </div>
    </div>
    );
  }
  
  export default NobelPrizeDirectoryPage;