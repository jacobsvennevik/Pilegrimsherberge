import React from 'react'


import{ About, Blog, Course, Footer, Gallery, Header} from '../container';
import { Navbar, Registration, Slideshow} from '../components';
import Test from '../test';

import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <Container className="container-md">
    <div className="app">
      <Header />
      <Navbar />
        <About />
        <Slideshow/>
        <Course />
        <Registration/>
        <Blog />
        <Gallery />
      <Footer/>
      </div>
      </Container>
  )
}

export default App;



