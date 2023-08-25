import React from 'react';
import { Head, Header, Footer} from '../partials';

const DestinationsPage = () => {
  return (
    <>
      <Head /> {/* Include the Head component */}
      <div className="grid-row">
        <Header /> {/* Include the Header component */}
        {/* Hero image */}
        <div className="hero-container full-width show-on-mobile pt1 pl2 pr2">
          <div className="hero full-width full-height" style={{ background: 'rgba(0, 0, 0, 0) url(\'/img/2.jpg\') no-repeat scroll center center / cover' }}></div>
        </div>
        <div className="hide-on-mobile hero" style={{ background: 'rgba(0, 0, 0, 0) url(\'/img/2.jpg\') no-repeat scroll center center / cover' }}></div>

        {/* Body */}
        <div className="body full-width pt1 pr2 pb2 pl2">
          {/* Navigation */}
          <nav className="navigation border--bottom pt1">
            <ul className="no-bullets list--inline pb1 bold">
              <li className="small mr2"><a className="link link--text" href="/">Who We Are</a></li>
              <li className="small mr2"><a className="link link--text current" href="/destinations.html">Destinations</a></li>
              <li className="small mr2"><a className="link link--text" href="/pricing.html">Pricing</a></li>
              <li className="small "><a className="link link--text" href="/contact.html">Contact</a></li>
            </ul>
          </nav>
          {/* Page Content */}
          <main className="content pt2 pb2">
            <h2>Destinations</h2>
            <div className="border--full rounded pt1 pb1 pr2 pl2 mb1">
              <div className="grid-row">
                <div className="grid-column span-half align--center-on-tiny">
                  <p className="mb0 bold">Paris</p>
                </div>
                <div className="grid-column span-half align--right align--center-on-tiny">
                  <p className="mb0">June 16 - 21</p>
                </div>
              </div>
            </div>
            {/* ... Repeat similar structure for other destinations */}
          </main>
          <Footer /> {/* Include the Footer component */}
        </div>{/* end Body */}
      </div>
    </>
  );
}

export default DestinationsPage;
