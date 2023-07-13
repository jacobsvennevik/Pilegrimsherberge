import React from 'react'


import{ About, Blog, Course, Footer, Gallery, Header} from './container';
import { Navbar, Slideshow} from './components';

const App = () => {
  return (
    <div className="app">
      <Header />
      <About />
      <Course />
      <Blog />
      <Gallery />
      <Slideshow/>
      <Footer />
    </div>
  )
}

export default App