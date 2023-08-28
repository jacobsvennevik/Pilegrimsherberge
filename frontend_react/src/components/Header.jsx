import React from "react";
import mobileLogo from "../img/mobile-logo.svg";
import desktopLogo from "../img/desktop-logo.svg";
import facebookIcon from "../img/facebook.svg";
import instagramIcon from "../img/instagram.svg";
import twitterIcon from "../img/twitter.svg";

const Header = () => {
  return (
    <header className="header full-width">
      {/* Mobile header */}
      <div className="show-on-mobile pt1 pl2 pr2 mb1 border--bottom">
        <div className="grid-row grid-row--center pb1">
          <div className="grid-column span-half">
            {/* Mobile logo */}
            <div className="mb0">
              <img
                className="logo--mobile"
                src={mobileLogo}
                alt="Viking Tours"
                title="Viking Tours"
              />
            </div>
          </div>
          <div className="grid-column span-half align--right">
            {/* Mobile social links */}
            <ul className="mobile-social-links list--inline">
              <li className="mr1">
                <a className="link link--default" href="https://www.twitter.com">
                  <img className="icon" src={facebookIcon} alt="Facebook" />
                </a>
              </li>
              <li className="mr1">
                <a className="link link--default" href="https://www.instagram.com">
                  <img className="icon" src={instagramIcon} alt="Instagram" />
                </a>
              </li>
              <li>
                <a className="link link--default" href="https://www.facebook.com">
                  <img className="icon" src={twitterIcon} alt="Twitter" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Desktop header */}
      <div className="hide-on-mobile logo-container absolute block full-width align--center">
        {/* Desktop logo */}
        <img
          className="logo--desktop"
          src={desktopLogo}
          alt="Viking Tours"
          title="Viking Tours"
        />
        {/* Social links */}
        <ul className="pt1 no-bullets align--center hide-on-mobile">
          <li>
            <a className="link link--default" href="https://www.facebook.com">
              <img className="icon" src={facebookIcon} alt="Facebook" />
            </a>
          </li>
          <li>
            <a className="link link--default" href="https://www.instagram.com">
              <img className="icon" src={instagramIcon} alt="Instagram" />
            </a>
          </li>
          <li>
            <a className="link link--default" href="https://www.twitter.com">
              <img className="icon" src={twitterIcon} alt="Twitter" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;


