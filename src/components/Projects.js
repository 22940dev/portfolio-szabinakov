import React from "react";
import "../styles/Projects.css";

import Checkout from "./CheckOut";

import cruise from "../pictures/cruise.png";
import bands from "../pictures/BandS.png";
import pet from "../pictures/pet.png";
import weather from "../pictures/weather.png";
import nasa from "../pictures/nasa.png";
import surreal from "../pictures/SurrealE.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnchor,
  faCloudSun,
  faDog,
  faRocket,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { faFortAwesome } from "@fortawesome/free-brands-svg-icons";
const Projects = () => {
  return (
    <>
      <Checkout />
      <div data-testid="projectContainer" className="projectContainer">
        <div className="card">
          <div className="cardInner">
            <div data-testid="bringAndShareFront" className="cardFront">
              <h3>Bring and Share</h3>
              <FontAwesomeIcon className="iconContainer" icon={faUsers} />
            </div>

            <div data-testid="bringAndShareBack" className="cardBack">
              <img src={bands} alt="Bring and Share" />
              <p className="projectPhar">
                This app has been a group project where I have been fully
                responsible to set up the API, database, and write tests. The
                App is allow you to create and event and add on participants
                with their diatry requriments. I have created the component for
                adding participants, and the participant list with all their
                details.
              </p>
              <div className="linksCard">
                <a
                  className="aCardLink"
                  href="https://github.com/szabinakov/Bring-and-Share"
                  target="blank"
                >
                  Front-End
                </a>
                <a
                  className="aCardLink"
                  href="https://github.com/szabinakov/bring-and-share-api"
                  target="blank"
                >
                  Back-End
                </a>
                <a
                  className="aCardLink"
                  href="https://bring-and-share-final-project.vercel.app/"
                  target="blank"
                >
                  Website
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="cardInner">
            <div data-testid="surrealFront" className="cardFront">
              <h3>Surreal Estate</h3>
              <FontAwesomeIcon className="iconContainer" icon={faFortAwesome} />
            </div>
            <div data-testid="surrealBack" className="cardBack">
              <img src={surreal} alt="Surreal Estate" />
              <p className="projectPhar">
                It is a property search engine just like Zoopla or Rightmove.
                There are properties, favourites and add property pages.The user
                is able to log in with their Facebook account. Once logged in,
                you are able to save properties to your favourites or remove
                them.
              </p>
              <div className="linksCard">
                <a
                  className="aCardLink"
                  href="https://github.com/szabinakov/surreal-estate"
                  target="blank"
                >
                  View Source
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="cardInner">
            <div data-testid="weatherFront" className="cardFront">
              <h3>Weather App</h3>
              <FontAwesomeIcon className="iconContainer" icon={faCloudSun} />
            </div>
            <div data-testid="weatherBack" className="cardBack">
              <img src={weather} alt="Weather App Project" />
              <p className="projectPhar">
                By using external data the app allows the user to search by
                cities. Once you type in the requested city it displays 5 days
                of weather forecast. By clicking on More Details, it gives you a
                more detailed description of the weather of the chosen day.
              </p>
              <div className="linksCard">
                <a
                  className="aCardLink"
                  href="https://github.com/szabinakov/weather-app"
                  target="blank"
                >
                  View Source
                </a>
                <a
                  className="aCardLink"
                  href="https://weather-app-ochre-two.vercel.app/"
                  target="blank"
                >
                  Website
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="cardInner">
            <div data-testid="nasaFront" className="cardFront">
              <h3>Nasa's Picture Search</h3>
              <FontAwesomeIcon className="iconContainer" icon={faRocket} />
            </div>
            <div data-testid="nasaBack" className="cardBack">
              <img src={nasa} alt="Nasa Search Project" />
              <p className="projectPhar">
                This is my first React web application I have built. The idea is
                to search images based on a query realiting to space using the
                NASA API.
              </p>
              <div className="linksCard">
                <a
                  className="aCardLink"
                  href="https://github.com/szabinakov/Nasa-picture-searchengine"
                  target="blank"
                >
                  View Source
                </a>
                <a
                  className="aCardLink"
                  href="https://tech-test.vercel.app/"
                  target="blank"
                >
                  Website
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="cardInner">
            <div data-testid="cruiseFront" className="cardFront">
              <h3>Cruise Ship</h3>
              <FontAwesomeIcon className="iconContainer" icon={faAnchor} />
            </div>
            <div data-testid="cruiseBack" className="cardBack">
              <img src={cruise} alt="Cruise Ship Project" />
              <p className="projectPhar">
                At this project I have built a cruise ship which is able to
                sail. There is a board also included which tells you the current
                and the next port. You are also able to add ports. It has been
                designed to look really oldschool. Because that is what I love
                the most.
              </p>
              <div className="linksCard">
                <a
                  className="aCardLink"
                  href="https://github.com/szabinakov/cruise-ships"
                  target="blank"
                >
                  View Source
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="cardInner">
            <div data-testid="petFront" className="cardFront">
              <h3>Virtual Pet</h3>
              <FontAwesomeIcon className="iconContainer" icon={faDog} />
            </div>
            <div data-testid="petBack" className="cardBack">
              <img src={pet} alt="Virtual Pet Project" />
              <p className="projectPhar">
                I have built a Virtual Pet with JavaScript. Same principles like
                the good old game Tamagotchi. The Pet gets older and as it gets
                older, it gets hungrier and more and more unfit. You are able to
                take it for a walk to get back its fitness and of course feed
                it. However, nature is cruel and even if you take care of it on
                the best way the pet will D-I-E when it reaches 30 years.
              </p>
              <div className="linksCard">
                <a
                  className="aCardLink"
                  href="https://github.com/szabinakov/Virtual-Pet"
                  target="blank"
                >
                  View Source
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
