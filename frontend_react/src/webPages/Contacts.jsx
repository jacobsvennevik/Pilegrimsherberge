import React from 'react';
import { Head, Header, Footer} from '../partials';

const ContactPage = () => {
  return (
    <>
      <Head /> {/* Include the Head component */}
      <div className="grid-row">
        <Header /> {/* Include the Header component */}
        {/* Hero image */}
        <div className="hero-container full-width show-on-mobile pt1 pl2 pr2">
          <div className="hero full-width full-height" style={{ background: 'rgba(0, 0, 0, 0) url(\'/img/4.jpg\') no-repeat scroll center center / cover' }}></div>
        </div>
        <div className="hide-on-mobile hero" style={{ background: 'rgba(0, 0, 0, 0) url(\'/img/4.jpg\') no-repeat scroll center center / cover' }}></div>

        {/* Body */}
        <div className="body full-width pt1 pr2 pb2 pl2">
          {/* Navigation */}
          <nav className="navigation border--bottom pt1">
            <ul className="no-bullets list--inline pb1 bold">
              <li className="small mr2"><a className="link link--text" href="/">Who We Are</a></li>
              <li className="small mr2"><a className="link link--text" href="/destinations.html">Destinations</a></li>
              <li className="small mr2"><a className="link link--text" href="/pricing.html">Pricing</a></li>
              <li className="small "><a className="link link--text current" href="/contact.html">Contact</a></li>
            </ul>
          </nav>
          {/* Page Content */}
          <main className="content pt2 pb2">
            <h2>Contact</h2>
            <p>We'd love to hear from you. Give us a ring at +44&nbsp;7911&nbsp;123456, or send us a message&nbsp;below.</p>
            <form className="form">
              <label className="label" htmlFor="name">Name</label>
              <input className="form-control mb1" type="text" id="name" />
              <label className="label" htmlFor="email">Email</label>
              <input className="form-control mb1" type="email" id="email" />
              <label className="label" htmlFor="phone">Phone</label>
              <input className="form-control mb1" type="tel" id="phone" />
              <label className="label" htmlFor="message">Message</label>
              <textarea className="form-control mb2" id="message"></textarea>
              <div className="clearfix">
                <input className="btn btn--default float--right" value="Send" type="submit" />
              </div>
            </form>
          </main>
          <Footer /> {/* Include the Footer component */}
        </div>{/* end Body */}
      </div>
      <Foot /> {/* Include the Foot component */}
    </>
  );
}

export default ContactPage;


