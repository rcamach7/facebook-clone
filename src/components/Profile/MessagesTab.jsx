import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function MessagesTab() {
  return (
    <div className="MessagesTab">
      <div className="content">
        <img
          src="https://res.cloudinary.com/de2ymful4/image/upload/v1651533985/facebook/assets/messenger_ad_bejyp3.png"
          alt=""
        />
        <div className="messengerInfo">
          <p className="title">Fully Integrated with your current account!</p>
          <ul>
            <li>
              <FontAwesomeIcon icon={faSquareCheck} /> Same credentials across
              both apps!
            </li>
            <li>
              <FontAwesomeIcon icon={faSquareCheck} /> Make friends here, chat
              with them in our messenger app over an instant connection!
            </li>
            <li>
              <FontAwesomeIcon icon={faSquareCheck} /> Mobile and desktop
              responsive!
            </li>
            <li>
              <FontAwesomeIcon icon={faSquareCheck} />{" "}
              <a href="https://rcamach7.github.io/messenger/#/messenger">
                Visit Instant Messenger Web App!
              </a>
            </li>
          </ul>
          <span
            onClick={() =>
              window.open("https://github.com/rcamach7/messenger", "_blank")
            }
          >
            <FontAwesomeIcon icon={faGithub} className="githubIcon" />
          </span>
        </div>
      </div>
    </div>
  );
}
