import React from 'react';

const Header = () => {
  return (
    <header className="header full-width">
      {/* Mobile header */}
      <div className="show-on-mobile pt1 pl2 pr2 mb1">
        <div className="border--bottom pt1">
          <div className="grid-row grid-row--center pb1">
            <div className="grid-column span-half">
              {/* Mobile logo */}
              <div className="mb0">
                <img className="logo--mobile" src="/img/mobile-logo.svg" alt="Viking Tours" title="Viking Tours" />
              </div>
            </div>
            <div className="grid-column span-half align--right">
              {/* Mobile social links */}
              <ul className="mobile-social-links list--inline">
                <li className="mr1">
                  <a className="link link--default" href="https://www.twitter.com">
                    <img className="icon" src="/img/facebook.svg" alt="Facebook" />
                  </a>
                </li>
                <li className="mr1">
                  <a className="link link--default" href="https://www.instagram.com">
                    <img className="icon" src="/img/instagram.svg" alt="Instagram" />
                  </a>
                </li>
                <li>
                  <a className="link link--default" href="https://www.facebook.com">
                    <img className="icon" src="/img/twitter.svg" alt="Twitter" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop header */}
      {/* Desktop logo */}
      <h1 className="hide-on-mobile logo-container absolute block full-width align--center">
        <img className="logo--desktop" src="/img/desktop-logo.svg" alt="Viking Tours" title="Viking Tours" />
      </h1>
      {/* Social links */}
      <ul className="pt1 no-bullets align--center hide-on-mobile">
        <li>
          <a className="link link--default" href="https://www.twitter.com">
            <img className="icon" src="/img/facebook.svg" alt="Facebook" />
          </a>
        </li>
        <li>
          <a className="link link--default" href="https://www.instagram.com">
            <img className="icon" src="/img/instagram.svg" alt="Instagram" />
          </a>
        </li>
        <li>
          <a className="link link--default" href="https://www.facebook.com">
            <img className="icon" src="/img/twitter.svg" alt="Twitter" />
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
