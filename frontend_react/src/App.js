import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Head, Header, Footer, Navbar, Slideshow} from './Components';
import {Home, Cafe, Courses, Utleie, Contact, NoPage} from './Pages'

const App = () => {
  return (
    <>
    <Router>
      <Head /> {/* Include the Head component */}
      <div className="grid-row">
        <Header /> {/* Include the Header component */}
        {/* Hero image */}
        <div className="hero-container full-width show-on-mobile pt1 pl2 pr2">
          <Slideshow /> 
        </div>
        <div className="hide-on-mobile hero" style={{ background: 'rgba(0, 0, 0, 0) url(\'/img/1.jpg\') no-repeat scroll center center / cover' }}></div>

        {/* Body */}
        <div className="body full-width pt1 pr2 pb2 pl2">
          {/* Navigation */}
          <Navbar/>
          {/* Page Content */}
          <main className="content pt2 pb2">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Cafe" element={<Cafe />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Utleie" element={<Utleie />} />
            <Route path="/Courses" element={<Courses />} />
            <Route path="/*" element={<NoPage />} />
        </Routes>
          </main>
          <Footer /> {/* Include the Footer component */}
        </div>{/* end Body */}
      </div>
    

    </Router>
    </>
  );
}

export default App;
