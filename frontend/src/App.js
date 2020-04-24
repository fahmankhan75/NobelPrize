import React from 'react';
import HomePage from './WebPages/HomePage.js';
import NobelPrizeDirectoryPage from './WebPages/NobelPrizeDirectoryPage.js';

import AboutPage from './WebPages/AboutPage.js';

import {BrowserRouter as Router, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Route path="/" exact component={HomePage}/>
      <Route path="/directory" exact component={NobelPrizeDirectoryPage}/>
      <Route path="/directory/:year/:category" exact component={NobelPrizeDirectoryPage}/>
      <Route path="/about" component={AboutPage}/>
    </Router>
      

  );
}

export default App;
