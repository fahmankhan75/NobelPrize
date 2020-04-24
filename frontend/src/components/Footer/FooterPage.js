import React from "react";
import './FooterPage.css';
import {Link} from "react-router-dom";

const FooterPage = () => {
  return (
      <div className="mainFooter">
        <footer id="footer">
        <div className="foot-col-2">
                <h3>Navigation</h3>
                <ul className="navLinks">
                  <Link to="/">
                    <li className="nav-link">Search</li>
                  </Link>
                  <Link to="/directory">
                    <li className="nav-link">Nobel Prize Directory</li>
                  </Link>
                  <Link to="/about">
                    <li className="nav-link">About</li>
                  </Link>
                </ul>
            </div>
            <div className="foot-col-1">
                <div className="logo">
                    <h2><a href="https://en.wikipedia.org/wiki/Nobel_Prize">Nobel Prize Information</a></h2>
                </div>
                <p>The Nobel Prize  is a set of annual international awards bestowed in several categories by Swedish and Norwegian institutions in recognition of academic, cultural, or scientific advances. The will of the Swedish chemist, engineer and industrialist Alfred Nobel established the five Nobel prizes in 1895. The prizes in Chemistry, Literature, Peace, Physics, and Physiology or Medicine were first awarded in 1901. The prizes are widely regarded as the most prestigious awards available in their respective fields.</p>
            </div>

        </footer>
        </div>
  );
}

export default FooterPage;