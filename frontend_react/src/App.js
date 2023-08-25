import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Head, Header, Footer, Navbar} from './Components';

function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Home View</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
  );
}

function Cafe() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Home View</h2>
      <p>Lfuck.</p>
    </div>
  );
}

const App = () => {
  return (
    <>
    <Router>
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
          <Navbar/>
          {/* Page Content */}
          <main className="content pt2 pb2">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Cafe" element={<Cafe />} />
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
