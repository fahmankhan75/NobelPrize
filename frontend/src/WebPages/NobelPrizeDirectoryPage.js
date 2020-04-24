import React from 'react';
import Navbar from '../components/Navbar/Navbar.js';
import Footer from '../components/Footer/FooterPage.js';
import NobelPrizeTable from '../components/Main/NobelPrizeTable.js';
import './NobelPrizeDirectoryPage.css';


function NobelPrizeDirectoryPage(props) {
    let year = null;
    let category = 'All';
    if(props.match.params.year!=null)
    {
        year = props.match.params.year;
    }
    if(props.match.params.category!=null && props.match.params.category !='All')
    {
        category = props.match.params.category;
    }

    return (
    <div>
        <Navbar></Navbar>
        <NobelPrizeTable year={year} category={category}></NobelPrizeTable>
        <div className="nobelPrizePage">
            <Footer></Footer>
        </div>
    </div>
    );
  }
  
  export default NobelPrizeDirectoryPage;