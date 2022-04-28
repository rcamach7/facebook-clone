import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlus,
  faCamera,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";
import AboutCreator from "./AboutCreator";

export default function ProfileOverview({ user }) {
  return (
    <div className="ProfileOverview">
      <section className="image-backdrop">
        <div className="imageContainer">
          <img src={user ? user.profilePicture : null} alt="user" />
        </div>
      </section>
      <section className="user-backdrop">
        <p className="user-fullName">{user ? user.fullName : null}</p>
        <div className="editProfileButtons">
          <button className="addToStory">
            <FontAwesomeIcon icon={faCirclePlus} /> Add New Post
          </button>
          <button className="editProfile">
            <FontAwesomeIcon icon={faCamera} /> Edit Image
          </button>
        </div>

        <ul className="profileSections">
          <li>Creator</li>
          <li>Friends</li>
          <li>Messages</li>
          <li className="ellipse">
            <FontAwesomeIcon icon={faEllipsisH} />
          </li>
        </ul>
      </section>
      <AboutCreator />
    </div>
  );
}
