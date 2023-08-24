import React from 'react';
import Head from './components/Head'; // Import your Head component
import Foot from './components/Foot'; // Import your Foot component

const UIPage = () => {
  return (
    <>
      <Head /> {/* Include the Head component */}
      <div className="container pt3 pb3">

        {/* Colors */}
        <section className="pb4 align--center">
          <h2 className="text--gray pb1 border--bottom">Colors</h2>
          <div className="pt1 pb1 text--white bg--primary-color">Primary brand color</div>
          <div className="pt1 pb1 text--white bg--secondary-color">Secondary brand color</div>
          <div className="pt1 pb1 text--white bg--tertiary-color">Brand accent color</div>
          <div className="pt1 pb1 text--white bg--darkest-gray">Darkest gray</div>
          <div className="pt1 pb1 text--white bg--dark-gray">Dark gray</div>
          <div className="pt1 pb1 text--white bg--gray">Gray</div>
          <div className="pt1 pb1 text--white bg--light-gray">Light gray</div>
          <div className="pt1 pb1 bg--lightest-gray">Lightest gray</div>
        </section>

        {/* Type */}
        <section className="pb4 reading-font">
          <h2 className="text--gray pb1 border--bottom">Type</h2>
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          {/* ... */}
        </section>

        {/* Forms */}
        <section className="pb4">
          <h2 className="text--gray pb1 border--bottom">Forms</h2>
          <form className="form">
            <input className="form-control mb1" type="text" placeholder="Name" />
            <input className="form-control mb1" type="email" placeholder="Email Address" />
            <input className="form-control mb1" type="subject" placeholder="Subject" />
            <div className="select mb1">
              <select>
                <option selected>Open this select</option>
                <option>One</option>
                <option>Two</option>
                <option>Three</option>
              </select>
            </div>
            <textarea className="form-control mb1" placeholder="Message"></textarea>
            <button className="btn btn--default">Default</button>
          </form>
        </section>

        {/* Buttons */}
        <section className="pb4">
          <h2 className="text--gray pb1 border--bottom">Buttons</h2>
          <a className="btn btn--default" href="">Medium Default</a>
          <a className="btn btn--outline" href="">Medium Outline</a>
        </section>

      </div> {/* End container */}
      <Foot /> {/* Include the Foot component */}
    </>
  );
}

export default UIPage;
