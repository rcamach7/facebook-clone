import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faEllipsisH,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import {
  UpdateImageForm,
  EditNameForm,
  AcceptFriendRequestButton,
  RequestFriendButton,
} from "../forms/";
import { isFriend, isRequested, isPendingAcceptance } from "../../data/helpers";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { LoadingUx } from "../Loading";

export default function ProfileOverview({
  setCurrentTab,
  currentTab,
  visitingProfile,
}) {
  const user = useSelector((state) => state.user.value);
  const params = useParams();

  const [showEditNameForm, setShowEditNameForm] = useState(false);

  const handleLogOut = () => {
    localStorage.clear();
    window.location.reload();
  };

  const determineProfilePicture = () => {
    if (visitingProfile) {
      return visitingProfile.profilePicture;
    } else {
      if (user) {
        return user.profilePicture;
      }
    }
    return null;
  };

  // Will determine the appropriate action button when visiting another users profile.
  const determineActionButton = () => {
    if (isFriend(user.friends, params.username)) {
      return (
        <button className="actionButtons dulledButton">
          Already Friends
          <FontAwesomeIcon icon={faCheck} />
        </button>
      );
    } else if (isRequested(user.sentFriendRequests, params.username)) {
      return (
        <button className="actionButtons dulledButton">
          Request Pending
          <FontAwesomeIcon icon={faCheck} />
        </button>
      );
    } else if (
      isPendingAcceptance(user.receivedFriendRequests, params.username)
    ) {
      return <AcceptFriendRequestButton friendId={visitingProfile._id} />;
    } else {
      return <RequestFriendButton username={visitingProfile.username} />;
    }
  };

  const renderUsername = () => {
    return (
      <div>
        {visitingProfile ? (
          visitingProfile.fullName
        ) : user ? (
          user.fullName
        ) : (
          <LoadingUx />
        )}{" "}
        {/* If user is on their own profile page, give them the edit name form. */}
        {!visitingProfile && (
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="editNameIcon"
            onClick={() => setShowEditNameForm(!showEditNameForm)}
          />
        )}
      </div>
    );
  };

  return (
    <div className="ProfileOverview">
      <section className="image-backdrop">
        <div className="imageContainer">
          <img src={determineProfilePicture()} alt="user" />
        </div>
      </section>

      <section className="user-backdrop">
        <div className="user-fullName">
          {showEditNameForm ? (
            <EditNameForm
              fullName={user ? user.fullName : null}
              setShowEditNameForm={setShowEditNameForm}
            />
          ) : (
            renderUsername()
          )}
        </div>

        <div className="editProfileButtons">
          {visitingProfile ? (
            determineActionButton()
          ) : (
            <button className="editProfileImageBtn">
              <UpdateImageForm />
            </button>
          )}

          {/* Give user log out option if on his own profile page. */}
          {!visitingProfile && (
            <button className="signOut" onClick={handleLogOut}>
              <FontAwesomeIcon icon={faArrowRightFromBracket} /> Sign Out
            </button>
          )}
        </div>

        {/* Buttons that will control which section to display for user profile. */}
        <ul className="profileSections">
          <li
            className={`${currentTab === "Messages" ? "active" : ""}`}
            onClick={() => setCurrentTab("Messages")}
          >
            Messenger
          </li>
          {!visitingProfile && (
            <li
              className={`${currentTab === "Friends" ? "active" : ""}`}
              onClick={() => setCurrentTab("Friends")}
            >
              Friends
            </li>
          )}
          <li
            className={`${currentTab === "About Creator" ? "active" : ""}`}
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
