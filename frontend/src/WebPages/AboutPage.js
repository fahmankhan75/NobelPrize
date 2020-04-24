import React from 'react';
import Navbar from '../components/Navbar/Navbar.js';
import Footer from '../components/Footer/FooterPage.js';
import './AboutPage.css';

function AboutPage() {
    return (
    <div>
        <Navbar></Navbar>
        <img className="nobelPrizeImg" alt="Nobel Prize" src="/images/NobelPrize.jpg"/>
        <div className="nobelInformation">
            <h2> Nobel Prize </h2>
            <p>The Nobel Prize is considered the most prestigious prize in the world. This prize is given in the 6 fields’ i.e, Physics, Chemistry, Medicine, Literature, Economics, and Peace Prize. These prizes were commenced in 1901. The recipients of the first Nobel Prizes were given 150,782 SEK. In 2017, the Nobel laureates were awarded a prize amount of 9,000,000 SEK.</p>
            <h3>The Prize</h3>
            <p>The Nobel Prize is awarded to ‘those who, during the preceding year, shall have conferred the greatest benefit on mankind’. Prizes in physics, chemistry, physiology or medicine, literature and peace have been awarded since 1901 – and economic sciences since 1968.</p>
            <h3>The Party</h3>
            <p>On 10 December – Nobel Day – award ceremonies take place in both Stockholm, Sweden, and Oslo, Norway. At the Stockholm Concert Hall, the winners in physics, chemistry, physiology or medicine, literature and economic sciences receive a medal from the King of Sweden, as well as a diploma and a cash award. The ceremony is followed by a gala banquet at Stockholm City Hall.</p>
            <h3>The Man</h3>
            <p>The Nobel Prize is the legacy of Sweden’s Alfred Nobel (1833–1896). A chemist, engineer, inventor and entrepreneur, Nobel was devoted to the study of explosives, and his inventions include a blasting cap, dynamite and smokeless gunpowder.</p>
            <br></br>
            <p>When Nobel died, he held 355 patents in different countries and had made a fortune. His last will, signed in 1895, is the reason that the Nobel Prize is awarded every year. He had an idea about an annual prize that would go to brilliant minds around the world.
</p>
        </div>
        <div className="aboutFooter">
            <Footer></Footer>
        </div>
    </div>
    );
  }
  
  export default AboutPage;