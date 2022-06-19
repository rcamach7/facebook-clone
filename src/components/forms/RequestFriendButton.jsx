import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { useUserContext } from "../../hooks/useUserContext";
import { sendFriendRequest } from "../../assets/api";

export const RequestFriendButton = ({ username }) => {
  const { setUser } = useUserContext();
  const handleRequest = async () => {
    try {
      const user = await sendFriendRequest(username);
      setUser(user);
    } catch (error) {
      console.log(error);
      alert("Error sending request");
    }
  };

  return (
    <button className="actionButtons activeButton" onClick={handleRequest}>
      Request Friend
      <FontAwesomeIcon icon={faUserPlus} />
    </button>
  );
};
