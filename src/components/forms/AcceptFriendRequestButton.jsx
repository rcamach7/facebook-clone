import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { acceptFriendRequest } from "../../data/api";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/user/userSlice";

export const AcceptFriendRequestButton = ({ friendId }) => {
  const dispatch = useDispatch();
  const handleAcceptRequest = async () => {
    try {
      const user = await acceptFriendRequest(friendId);
      dispatch(setUser(user));
    } catch (error) {
      console.log(error);
      alert("Error accepting request");
    }
  };

  return (
    <button
      className="actionButtons activeButton"
      onClick={handleAcceptRequest}
    >
      Accept Friend Request
      <FontAwesomeIcon icon={faUserPlus} />
    </button>
  );
};
