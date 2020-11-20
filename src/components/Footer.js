import React from "react";

import "../styles/Footer.css";

import twitterlogo from "../pictures/twitter.png";
import instagramlogo from "../pictures/insta.png";
import linkedinlogo from "../pictures/linkedin.png";
import github from "../pictures/github.png";
import gmail from "../pictures/gmail.png";

const Footer = () => {
  return (
    <footer data-testid="footer" className="footer">
      <div data-testid="footerContainer" className="footerContainer">
        <a
          data-testid="footerLinkOne"
          className="footerLinkOne"
          href="https://twitter.com/szabinkov?lang=en-gb"
          target="blank"
        >
          <img src={twitterlogo} href="www.google.com" alt="twitter" />
        </a>
        <a
          data-testid="footerLinkTwo"
          className="footerLinkTwo"
          href="https://www.instagram.com/szabinush/"
          target="blank"
        >
          <img src={instagramlogo} alt="instagram" />
        </a>
        <a
          data-testid="footerLinkThree"
          className="footerLinkThree"
          href="https://www.linkedin.com/in/szabina-kov%C3%A1cs-7a0592159/"
          target="blank"
        >
          <img src={linkedinlogo} alt="linkedin" />
        </a>
        <a
          data-testid="footerLinkFour"
          className="footerLinkFour"
          href="https://github.com/szabinakov"
          target="blank"
        >
          <img src={github} alt="Github" />
        </a>
        <a
          data-testid="footerLinkFive"
          className="footerLinkFive"
          href="mailto:szabinkov@gmail.com"
        >
          <img src={gmail} alt="Gmail" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
