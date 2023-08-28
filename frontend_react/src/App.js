import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Head, Header, Footer, Navbar, Slideshow, Hero} from './Components';
import {Home, Cafe, Courses, Utleie, Contact, NoPage} from './Pages'
import heroImage from "./img/1.jpg";
import cabinImage from "./img/cabin.jpeg";

const App = () => {
  return (
    <>
      <Router>
        {/* Include the Head component */}
        <Head /> 
        <div className="grid-row">
          {/* Include the Header component */}
          <Header /> 
          {/* Hero image */}
          <Hero />
          {/* Body */}
          <div className="body full-width pt1 pr2 pb2 pl2">
            {/* Navigation */}
            <Navbar />
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
          </div>
          {/* end Body */}
        </div>
      </Router>
    </>
  );
}

export default App;
