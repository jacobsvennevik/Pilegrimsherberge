import React from 'react';

import { Head, Header, Footer} from './partials';
import {NavBar} from './components'; 



const index= () => {
  return (
    <>
      <Head /> {/* Include the Head component */}
      <div className="grid-row">
        <Header /> {/* Include the Header component */}
        {/* Hero image */}
        <div className="hero-container full-width show-on-mobile pt1 pl2 pr2">
          <div className="hero full-width full-height" style={{ background: 'rgba(0, 0, 0, 0) url(\'/img/1.jpg\') no-repeat scroll center center / cover' }}></div>
        </div>
        <div className="hide-on-mobile hero" style={{ background: 'rgba(0, 0, 0, 0) url(\'/img/1.jpg\') no-repeat scroll center center / cover' }}></div>

        {/* Body */}
        <div className="body full-width pt1 pr2 pb2 pl2">
          {/* Navigation */}
          <NavBar />
          {/* Page Content */}
          <main className="content pt2 pb2">
            <h2>Who We Are</h2>
            <p>Quid turpius quam sapientis vitam ex insipientium sermone pendere? Et non ex maxima parte de tota iudicabis? Videamus igitur sententias eorum, tum ad verba redeamus. Quae sequuntur igitur?</p>
            <p>Ne tum quidem te respicies et cogitabis sibi quemque natum esse et suis voluptatibus? Et nunc quidem quod eam tuetur, ut de vite potissimum loquar, est id extrinsecus.</p>
            <p>Videamus igitur sententias eorum?</p>
          </main>
          <Footer /> {/* Include the Footer component */}
        </div>{/* end Body */}
      </div>
    </>
  );
}

export default index;

