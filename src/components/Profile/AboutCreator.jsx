import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDev,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";

export default function AboutCreator() {
  return (
    <div className="AboutCreator">
      <div className="infoContainer">
        <p className="name">Ricardo Camacho Mireles</p>
        <div className="description">
          <div className="imageContainer">
            <img
              src="https://res.cloudinary.com/de2ymful4/image/upload/v1651799612/facebook/assets/adminImage_fawpif.png"
              alt=""
            />
          </div>
          <p>
            Hi! I have a profound love for problem solving, which is at the root
            of why I enjoy programming so much! If you have any thoughts or
            feedback, or just want to say hi, feel free to reach out! My socials
            are down below.
          </p>
          <ul className="socials">
            <li>
              <FontAwesomeIcon
                icon={faGithub}
                className="socialsIcon"
                onClick={() =>
                  window.open("https://github.com/rcamach7", "_blank")
                }
              />
            </li>
            <li>
              <FontAwesomeIcon
                icon={faLinkedin}
                className="socialsIcon"
                onClick={() =>
                  window.open("https://github.com/rcamach7", "_blank")
                }
              />
            </li>
            <li>
              <FontAwesomeIcon
                icon={faDev}
                className="socialsIcon"
                onClick={() =>
                  window.open("https://www.ricardo-camacho.dev/", "_blank")
                }
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
