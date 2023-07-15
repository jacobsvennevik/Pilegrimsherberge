import React from 'react'


import{ About, Blog, Course, Footer, Gallery, Header} from './container';
import { Navbar, Registration, Slideshow} from './components';
import Test from './test';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <About />
      <Course />
      <Registration/>
      <Blog />
      <Gallery />
      <Slideshow/>
      <Footer />
    </div>
  )
}

export default App