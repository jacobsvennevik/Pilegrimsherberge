import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainContent from './MainContent';
import {Destinations, Pricing, Contact} from './webPages';

const RoutesNav = () => {
  return (
    <Router>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default RoutesNav;
