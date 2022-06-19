import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faEllipsisH,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import UpdateImageForm from "../forms/UpdateImageForm";
import EditNameForm from "../forms/EditNameForm";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import LoadingUx from "../LoadingUx";
import {
  isFriend,
  isRequested,
  isPendingAcceptance,
} from "../../assets/helpers";
import { useParams } from "react-router-dom";
import { AcceptFriendRequestButton } from "../forms/AcceptFriendRequestButton";
import { RequestFriendButton } from "../forms/RequestFriendButton";

export default function ProfileOverview({
  user,
  setCurrentTab,
  currentTab,
  setUser,
  visitingProfile,
}) {
  const [showEditNameForm, setShowEditNameForm] = useState(false);
  const params = useParams();

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
              setUser={setUser}
              setShowEditNameForm={setShowEditNameForm}
            />
          ) : (
            <div>
              {visitingProfile ? (
                visitingProfile.fullName
              ) : user ? (
                user.fullName
              ) : (
                <LoadingUx />
              )}{" "}
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
          {visitingProfile ? (
            determineActionButton()
          ) : (
            <button className="editProfileImageBtn">
              <UpdateImageForm setUser={setUser} />
            </button>
          )}
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
