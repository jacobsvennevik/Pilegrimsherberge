import React from 'react';
import Head from './components/Head'; // Import your Head component
import Header from './components/Header'; // Import your Header component
import Footer from './components/Footer'; // Import your Footer component
import Foot from './components/Foot'; // Import your Foot component

const PricingPage = () => {
  return (
    <>
      <Head /> {/* Include the Head component */}
      <div className="grid-row">
        <Header /> {/* Include the Header component */}
        {/* Hero image */}
        <div className="hero-container full-width show-on-mobile pt1 pl2 pr2">
          <div className="hero full-width full-height" style={{ background: 'rgba(0, 0, 0, 0) url(\'/img/3.jpg\') no-repeat scroll center center / cover' }}></div>
        </div>
        <div className="hide-on-mobile hero" style={{ background: 'rgba(0, 0, 0, 0) url(\'/img/3.jpg\') no-repeat scroll center center / cover' }}></div>

        {/* Body */}
        <div className="body full-width pt1 pr2 pb2 pl2">
          {/* Navigation */}
          <nav className="navigation border--bottom pt1">
            <ul className="no-bullets list--inline pb1 bold">
              <li className="small mr2"><a className="link link--text" href="/">Who We Are</a></li>
              <li className="small mr2"><a className="link link--text" href="/destinations.html">Destinations</a></li>
              <li className="small mr2"><a className="link link--text current" href="/pricing.html">Pricing</a></li>
              <li className="small "><a className="link link--text" href="/contact.html">Contact</a></li>
            </ul>
          </nav>
          {/* Page Content */}
          <main className="content pt2 pb2">
            <h2>Pricing</h2>
            <p>We offer one price for all tours:</p>
            <p><span className="h1 bold">$3,870</span> / per person</p>
            <p>Et nunc quidem quod eam tuetur, ut de vite potissimum loquar, est id extrinsecus. Quid turpius quam sapientis vitam ex insipientium sermone pendere.</p>
            <p><a href="/contact" className="link link--default">Contact us</a> for group pricing.</p>
          </main>
          <Footer /> {/* Include the Footer component */}
        </div>{/* end Body */}
      </div>
      <Foot /> {/* Include the Foot component */}
    </>
  );
}

export default PricingPage;
