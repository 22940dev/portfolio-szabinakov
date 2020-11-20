import React from "react";

import htmllogo from "../pictures/HTML-logo.png";
import csslogo from "../pictures/CSS-logo.png";
import reactlogo from "../pictures/React-logo.png";
import nodelogo from "../pictures/Nodejs-logo.png";
import jslogo from "../pictures/JS-logo.png";
import mysqllogo from "../pictures/MySQL-logo.png";

import "../styles/CheckOut.css";

const Checkout = () => {
  return (
    <>
      <div className="checkoutContainer">
        <div className="checkOutIntro">
          <h3>Check out all my project by flipping the cards below!</h3>
          <h4>Tech Stack:</h4>
        </div>
        <div data-testid="logoContainer" className="logoContainer">
          <a href="https://html.com/" target="blank">
            <img className="logoImg" src={htmllogo} alt="HTML-logo" />
          </a>

          <a
            href="https://www.w3.org/Style/CSS/Overview.en.html"
            target="blank"
          >
            <img className="logoImg" src={csslogo} alt="CSS-logo" />
          </a>

          <a href="https://www.javascript.com/" target="blank">
            <img className="logoImg" src={jslogo} alt="Javascript-logo" />
          </a>

          <a href="https://reactjs.org/" target="blank">
            <img className="logoImg" src={reactlogo} alt="React-logo" />
          </a>

          <a href="https://nodejs.org/en/" target="blank">
            <img className="logoImg" src={nodelogo} alt="Nodejs-logo" />
          </a>

          <a href="https://www.mysql.com/" target="blank">
            <img className="logoImg" src={mysqllogo} alt="MySQL-logo" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Checkout;
