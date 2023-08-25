import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HelloWorld from '../../oldInd/webPages/Hello.js';
//import {Destinations, Pricing, Contact} from './webPages';

const RoutesNav = () => {
  return (
    <Router>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<HelloWorld />} />
{/*         <Route path="/destinations" element={<Destinations />} />
        <Route path="/pricing" element={<Pricing />} />*/}
        <Route path="/contact" element={<HelloWorld />} /> 
      </Routes>
    </Router>
  );
};

export default RoutesNav;
