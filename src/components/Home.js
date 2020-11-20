import React from "react";

import "../styles/Home.css";

const Home = () => {
  return (
    <>
      <div className="outterDiv">
        <div data-testid="introContainer" className="introContainer">
          <div data-testid="topCircle" className="topCircle">
            <div data-testid="helloDiv" className="helloDiv">
              Hello,
            </div>
            <div data-testid="myNameDiv" className="myNameDiv">
              My name is Szabina!
              <br />
              and
              <br />I am a Software Engineer.
            </div>
          </div>
          <div data-testid="middleCircle" className="middleCircle">
            <p className="middleCircleText">
              I have just finished my coding course with Manchester codes, which
              I have started in March 2020. Learnt HTML, CSS, Javascript, React,
              Node.js, Express.js, MySQL.
            </p>
          </div>
          <div data-testid="bottomCircle" className="bottomCircle">
            <p className="bottomCircleText">
              Right now I am looking for my first position as a Software
              Engineer or any exciting projects, where I can deepen my skills
              and gain some new one. If you have any suggestion please send me a
              message.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
