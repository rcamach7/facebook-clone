import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlus,
  faCamera,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";
import UpdateImageForm from "../forms/UpdateImageForm";

export default function ProfileOverview({ user, setCurrentTab, currentTab }) {
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
            <UpdateImageForm />
          </button>
        </div>

        <ul className="profileSections">
          <li
            className={`${currentTab === "About Creator" ? "active" : null}`}
            onClick={() => setCurrentTab("About Creator")}
          >
            About Creator
          </li>
          <li
            className={`${currentTab === "Friends" ? "active" : null}`}
            onClick={() => setCurrentTab("Friends")}
          >
            Friends
          </li>
          <li
            className={`${currentTab === "Messages" ? "active" : null}`}
            onClick={() => setCurrentTab("Messages")}
          >
            Messages
          </li>
          <li className="ellipse">
            <FontAwesomeIcon icon={faEllipsisH} />
          </li>
        </ul>
      </section>
    </div>
  );
}
