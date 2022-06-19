import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { useUserContext } from "../../hooks/useUserContext";
import { acceptFriendRequest } from "../../assets/api";

export const AcceptFriendRequestButton = ({ friendId }) => {
  const { setUser } = useUserContext();
  const handleAcceptRequest = async () => {
    try {
      const user = await acceptFriendRequest(friendId);
      setUser(user);
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
