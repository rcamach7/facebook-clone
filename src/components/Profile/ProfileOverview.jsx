import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";
import UpdateImageForm from "../forms/UpdateImageForm";
import EditNameForm from "../forms/EditNameForm";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import LoadingUx from "../LoadingUx";

export default function ProfileOverview({
  user,
  setCurrentTab,
  currentTab,
  setUser,
  visitingProfile,
}) {
  const [showEditNameForm, setShowEditNameForm] = useState(false);

  const handleLogOut = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="ProfileOverview">
      <section className="image-backdrop">
        <div className="imageContainer">
          <img
            src={
              visitingProfile
                ? visitingProfile.profilePicture
                : user
                ? user.profilePicture
                : null
            }
            alt="user"
          />
        </div>
      </section>
      <section className="user-backdrop">
        <div className="user-fullName">
          {showEditNameForm ? (
            <EditNameForm
              fullName={user ? user.fullName : null}
              setUser={setUser}
              setShowEditNameForm={setShowEditNameForm}
            />
          ) : (
            <div>
              {user ? user.fullName : <LoadingUx />}{" "}
              {visitingProfile ? null : (
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  className="editNameIcon"
                  onClick={() => setShowEditNameForm(!showEditNameForm)}
                />
              )}
            </div>
          )}
        </div>
        <div className="editProfileButtons">
          <button className="editProfileImageBtn">
            {visitingProfile ? (
              "Send Friend Request"
            ) : (
              <UpdateImageForm setUser={setUser} />
            )}
          </button>
          {!visitingProfile && (
            <button className="signOut" onClick={handleLogOut}>
              <FontAwesomeIcon icon={faArrowRightFromBracket} /> Sign Out
            </button>
          )}
        </div>

        <ul className="profileSections">
          <li
            className={`${currentTab === "Messages" ? "active" : null}`}
            onClick={() => setCurrentTab("Messages")}
          >
            Messenger
          </li>
          {!visitingProfile && (
            <li
              className={`${currentTab === "Friends" ? "active" : null}`}
              onClick={() => setCurrentTab("Friends")}
            >
              Friends
            </li>
          )}
          <li
            className={`${currentTab === "About Creator" ? "active" : null}`}
            onClick={() => setCurrentTab("About Creator")}
          >
            About Creator
          </li>
          <li className="ellipse">
            <FontAwesomeIcon icon={faEllipsisH} />
          </li>
        </ul>
      </section>
    </div>
  );
}
